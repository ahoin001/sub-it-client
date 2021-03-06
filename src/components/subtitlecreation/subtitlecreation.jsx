import React, { useState, useEffect } from 'react';
import axios from 'axios'
import FileSaver from 'file-saver';
import { useHistory, withRouter } from 'react-router-dom'

import LoopCircleLoading from '../../shared/CircleLoading/CircleLoading'

import Table from '../../shared/Table/Table'
import Alert from '../../shared/Alerts/Alert'

import {
    SubtitleCreationContainer,
    ButtonsContainer
} from './subtitlecreation-Styles'

import {
    SolidButton,
} from '../../shared/Buttons/Buttons'

import CustomModal from '../../shared/ModalCustom/Modal'
import Subtitle from '../subtitle/subtitle'

// TODO I would like to make table more responsive and scroll without body
// TODO After using content background and container, need to readjust responsive behavior

const SubtitleCreation = (props) => {

    const [shouldRefetch, setShouldRefetch] = useState(true)

    const [shouldAddSub, setShouldAddSub] = useState()

    const [theCreateSubModalVisible, setTheCreateSubModalVisible] = useState(false)

    const [theDeleteSubModalVisible, setTheDeleteSubModalVisible] = useState(false)

    const [subtitleRows, setSubtitleRows] = useState([])

    const [subTitleState, setSubTitleState] = useState({
        subInit: false,
        subtitleToSave: '',
        inTime: null,
        outTime: null,
        inTimeVTT: '',
        outTimeVTT: '',
        subtitles: [],
        download: [],
    })

    useEffect(() => {

        // ? Get the most recent added subtitle after user submits subtitle and lists it

        if (shouldAddSub) {
            console.log('BEFORE LISTING: ', subTitleState)
            listOneSubtitle(subTitleState.subtitles[subTitleState.subtitles.length - 1]);
        }

    }, [shouldAddSub])

    useEffect(() => {

        const fetchData = () => {

            console.log('Running Sub Creation Effect')

            if (shouldRefetch) {

                console.log('INSIDE Effect IF')

                // * Get subtitles that belong to project
                axios.get(`${process.env.REACT_APP_API_URL}projects/api/subtitles/${props.projectId}`)
                    .then(response => {

                        // console.log("* Get Subtitles that belong to signed in user", response.data);

                        setSubTitleState({
                            ...subTitleState,
                            subtitles: response.data.results
                        });

                        setShouldRefetch(false);

                    })
                    .catch(function (error) {
                        console.log('FAILURE GETTING SUBTITLES OF PROJECT')
                        console.log(error);
                    })

            }

            listSubtitles();

        }

        fetchData();

    }, [shouldRefetch])

    let history = useHistory();

    const genericSync = (event) => {

        const { name, value } = event.target;
        setSubTitleState({ ...subTitleState, [name]: value })

    }

    const deleteVideo = async () => {

        try {

            props.setLoading(true);

            const response = await axios.delete(`${process.env.REACT_APP_API_URL}projects/api/deleteProject/${props.projectId}`);
            console.log("* Deleted Successfully! ", response);
            console.log("Redirecting!")

            history.push("/dashboard");

        } catch (error) {
            console.log('FAILURE DELETING PROJECT')
            console.log(error)
        }

        props.setLoading(false)

    }


    const vttToSeconds = (timeAsVTT) => {

        const [hh = '0', mm = '0', ss = '0'] = (timeAsVTT || '0:0:0').split(':');
        const hour = parseInt(hh, 10) || 0;
        const minute = parseInt(mm, 10) || 0;
        const second = parseFloat(ss, 10) || 0;

        const timeInSeconds = (hour * 3600) + (minute * 60) + (second);
        console.log('Time in Seconds: ', timeInSeconds)

        return timeInSeconds;

    }


    const submitChanges = (Subtitle, formInputs, setEdit) => {

        //  debugger;

        console.log("* GOING TO EDIT THIS SUBTITLE: ", Subtitle);
        console.log("* FORM DATA: ", formInputs);

        let inTimeAsSeconds = vttToSeconds(formInputs.inTimeVTT);
        let outTimeAsSeconds = vttToSeconds(formInputs.outTimeVTT);

        console.log('IN VTT: ', formInputs.inTimeVTT)
        console.log('IN SECONDS: ', inTimeAsSeconds)

        const dataToEditInSubtitle = {
            ...Subtitle,
            text: formInputs.text,
            inTime: inTimeAsSeconds,
            outTime: outTimeAsSeconds,
            inTimeVTT: formInputs.inTimeVTT,
            outTimeVTT: formInputs.outTimeVTT
        }

        axios.put(`${process.env.REACT_APP_API_URL}subtitles/api/${Subtitle.id}/edit-sub`, dataToEditInSubtitle)
            .then(response => {

                console.log("* RESPONSE AFTER EDITING SUBS", response.data);

                setShouldRefetch(true)
                setEdit(false)

            })
            .catch(function (error) {
                console.log('FAILURE GETTING SUBTITLES OF PROJECT')
                console.log(error);
            })

    }

    const listOneSubtitle = (mostRecentSavedSubtitle) => {

        let newSub = <Subtitle key={mostRecentSavedSubtitle.id} Subtitle={mostRecentSavedSubtitle} onDeleteClick={deleteSubtitle} onSaveEdit={submitChanges} refreshTable={setShouldRefetch} />

        setSubtitleRows([...subtitleRows, newSub])
        setShouldAddSub(false)

        listSubtitles()

    }

    const listSubtitles = () => {

        // ? Activates chrome debug for react
        // debugger;

        let tracks = document.querySelector('video').textTracks;

        // * Remove video cues before adding all from exsisiting subtitles 
        if (tracks[0].cues === null) {
            return
        }
        else if (tracks[0].cues.length) {

            // Must declare here since length is decreasing each loop since array is directly manipulated, so we use the static number of length
            const lengthOfCueList = tracks[0].cues.length - 1;

            for (let i = 0; i <= lengthOfCueList; i++) {

                // Keep removing first cue until there is no more
                if (tracks[0].cues[0]) {

                    // console.log('IN FOR LOOP, CUE BEING REMOVED : ', tracks[0].cues[0])
                    tracks[0].removeCue(tracks[0].cues[0]);

                }

            }
        }

        // console.log('LISTING TRACK', tracks)

        // * Keep Subs in order for user
        subTitleState.subtitles.sort((a, b) => (a.inTime) - (b.inTime));

        // * Add cues on track from sorted subtitles array, otherwise VTTCue will sort it in its own messy way that conflicts with logic
        let theSubtitleRows = subTitleState.subtitles.map((sub) => {

            let cue = new VTTCue(sub.inTime, sub.outTime, sub.text);
            tracks[0].addCue(cue);

            return <Subtitle key={sub.id} Subtitle={sub} onDeleteClick={deleteSubtitle} onSaveEdit={submitChanges} refreshTable={setShouldRefetch} />
        })

        setSubtitleRows(theSubtitleRows)

    }

    const timeToVTT = (num) => {

        console.log("INTIME TOVTT NUMBER IS: ", num)
        console.log("NUMBER IS TYPE: ", typeof num)

        // Also Converts to String
        let stringNum = num.toFixed(3);

        let splitNum = stringNum.split('.');
        let totalSeconds = splitNum[0];
        let totalMilliseconds = splitNum[1];

        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;

        // If you want strings with leading zeroes:
        minutes = String(minutes).padStart(2, "0");
        hours = String(hours).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");

        let timeVTT = hours + ":" + minutes + ":" + seconds + "." + totalMilliseconds;

        return timeVTT;

    };

    const createSub = () => {
        let tracks = document.querySelector('video').textTracks;
        let video = document.getElementById('video');
        let button = document.getElementById('creation-button');

        // if inTime has not been defined, create a new cue with startTime set to current video time
        if (subTitleState.subInit === false) {
            let inTime = video.currentTime;

            console.log('****************************************************** CURRENT IN TIME: ', inTime)

            let cue = new VTTCue(9999999999, 99999999999, '');

            console.log(cue)

            tracks[0].addCue(cue);

            setSubTitleState({
                ...subTitleState,
                subInit: true,
                inTime: inTime
            })

            // button.innerHTML = 'Out Time';

            // if inTime has already been defined, set cue endTime to current video time and pause video
        } else {
            let outTime = video.currentTime;

            console.log('****************************************************** CURRENT OUT TIME: ', outTime)

            video.pause();

            setSubTitleState({
                ...subTitleState,
                subInit: false,
                outTime: outTime
            })

            setTheCreateSubModalVisible(true)

            button.innerHTML = 'In Time';
        }

    };

    const saveSubtitle = async () => {

        // ? Activates chrome debug for react
        // debugger;

        let tracks = document.querySelector('video').textTracks;
        let video = document.getElementById('video');
        let cuesLength = tracks[0].cues.length;

        console.log('THE TRACK CUE THING: ', tracks)

        // * Set Subtitle info 
        let textToSave = subTitleState.subtitleToSave;
        let inVTT = timeToVTT(subTitleState.inTime);
        let outVTT = timeToVTT(subTitleState.outTime);

        // ? Define body to fill the VTTCue and also send to Database
        const thisSubtitle = {
            inTime: subTitleState.inTime,
            outTime: subTitleState.outTime,
            text: textToSave,
            inTimeVTT: inVTT,
            outTimeVTT: outVTT
        }

        // ? ENDTIME MUST BE FIRST OR SELECTING LAST CUE WON"T WORK
        // ? CUES ARE AUTOMATICALLY SORTED BY START TIME, CHANGING START TIME WILL POTENTIALLY MOVE LAST CUE MAKING GETTER LOGIC ERROR
        tracks[0].cues[cuesLength - 1].text = textToSave;
        tracks[0].cues[cuesLength - 1].endTime = thisSubtitle.outTime;
        tracks[0].cues[cuesLength - 1].startTime = thisSubtitle.inTime;

        // console.log('THE CUE TRACK AFTER CHANGING WHERE I MAKE IT: ', tracks[0].cues[cuesLength - 1])

        // clear modal text
        document.getElementById('this-sub-text').value = '';


        // * Post request to push current subtitle to the database
        // * If successful then display to client

        try {

            let savedSubtitle = await axios.post(`${process.env.REACT_APP_API_URL}subtitles/api/${props.projectId}/add-sub`, thisSubtitle)

            console.log('SAVED SUBTITLE: ', savedSubtitle.data)

            setSubTitleState({
                ...subTitleState,
                subtitles: [...subTitleState.subtitles, savedSubtitle.data],
                inTimeVTT: inVTT,
                outTimeVTT: outVTT
            })
            setShouldAddSub(true)
            setTheCreateSubModalVisible(false)
            video.play();

        } catch (error) {
            console.log(error)
        }

    };

    const deleteSubtitle = (subId) => {

        console.log('INSEIDE DELETE $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$,', subId)

        // props.setLoading(true)

        // * Get subtitles that belong to project
        axios.delete(`${process.env.REACT_APP_API_URL}subtitles/api/${subId}/delete-sub`)
            .then(response => {

                console.log("* RESPONSE AFTER DELETING SUBTITLE");
                console.log("* RESPONSE AFTER DELETING SUBTITLE", response.data);

                setShouldRefetch(true);
                // props.setLoading(false)

            })
            .catch(function (error) {
                console.log('FAILURE GETTING SUBTITLES OF PROJECT')
                console.log(error);
            })

    }

    const downloadSub = () => {

        let downloadVTT = `WEBVTT`

        axios.get(`${process.env.REACT_APP_API_URL}projects/api/subtitles/${props.projectId}`)
            .then((response) => {

                let finishedSubs = subTitleState.subtitles;
                finishedSubs.map((sub) => {
                    downloadVTT += `\n\n${sub.inTimeVTT} --> ${sub.outTimeVTT}\n${sub.text}`;
                    return ''
                });
                let blob = new Blob([downloadVTT], { type: "text/plain;charset=utf-8", endings: 'native' });
                FileSaver.saveAs(blob, 'subtitles.vtt');
            })
            .catch((err) => { });

    }

    return (

        <React.Fragment>

            <ButtonsContainer>

                <SolidButton
                    id='creation-button'
                    onClick={createSub}
                    primaryColor={!subTitleState.subInit ? 'isIntime' : 'isOutTime'}
                >

                    {
                        !subTitleState.subInit ?
                            'In Time' :
                            'Out Time'

                    }

                </SolidButton>

                <SolidButton
                    id='download-button'
                    onClick={downloadSub}
                    primaryColor='isGray'
                >

                    Download Subtitles

                </SolidButton>

            </ButtonsContainer>

            <ButtonsContainer>
                <SolidButton
                    onClick={() => setTheDeleteSubModalVisible(true)}
                    primaryColor='isBlue'
                >

                    Edit Info

                </SolidButton>

                <SolidButton
                    onClick={() => setTheDeleteSubModalVisible(true)}
                    primaryColor='isRed'
                >

                    Delete Video

                </SolidButton>

            </ButtonsContainer>

            <SubtitleCreationContainer>

                {
                    subtitleRows.length
                        ?
                        <Table>
                            {subtitleRows}
                        </Table>
                        :
                        <Alert type={"isInfo"} centered={true} >
                            {"Don't be shy, add your first subtitle! Click in time and then out time!"}
                        </Alert>

                }

            </SubtitleCreationContainer>

            {/* When creating sub */}
            {
                theCreateSubModalVisible &&
                <CustomModal
                    visible={theCreateSubModalVisible}
                    toggle={setTheCreateSubModalVisible}
                    onChange={genericSync}
                    saveSubtitle={saveSubtitle}
                />
            }

            {/* When deleting Sub  */}
            {
                theDeleteSubModalVisible &&
                <CustomModal
                    isConfirmation
                    visible={theDeleteSubModalVisible}
                    toggle={setTheDeleteSubModalVisible}
                    deleteProject={deleteVideo}
                />
            }

        </React.Fragment>

    );

};

export default withRouter(SubtitleCreation);