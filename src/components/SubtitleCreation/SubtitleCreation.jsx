import React, { useState, useEffect } from 'react';
import axios from 'axios'
import FileSaver from 'file-saver';

import { Table } from 'reactstrap';

import VideoPlayer from '../../components/VideoPlayer'
import { SubtitleCreationContainer } from './SubtitleCreation-Styles'
import Modal from '../../shared/modal/Modal'
import Subtitle from './Subtitle'

// ! HTML LIMITATION ADDING A SUBTITLE BEFORE AN ESTABLISHED TIME BEFORE REFRESHING
// ! Currently makes request for all subs each time sub is added, works, but come back and 
// ! make this more efficient

const SubtitleCreation = ({ projectId, videoURL }) => {

    const [shouldRefetch, setShouldRefetch] = useState(true)

    const [shouldAddSub, setShouldAddSub] = useState()

    const [modalVisible, setModalVisible] = useState(false)

    const [subtitleRows, setSubtitleRows] = useState(null)

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

        const fetchData = async () => {

            console.log('Running Sub Creation Effect')

            if (shouldRefetch) {

                console.log('INSIDE Effect IF')

                // * Get subtitles that belong to project
                axios.get(`http://localhost:8000/projects/api/subtitles/${projectId}`)
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

    const genericSync = (event) => {

        const { name, value } = event.target;
        setSubTitleState({ ...subTitleState, [name]: value })

    }

    const listOneSubtitle = (mostRecentSavedSubtitle) => {

        let newSub = <Subtitle key={mostRecentSavedSubtitle.id} Subtitle={mostRecentSavedSubtitle} />

        setSubtitleRows([...subtitleRows, newSub])
        setShouldAddSub(false)

        listSubtitles()

    }

    const listSubtitles = () => {

        // debugger;

        let tracks = document.querySelector('video').textTracks;

        // * Remove video cues before adding all from exsisiting subtitles 
        if (tracks[0].cues.length) {

            // Must declare here because pluggin directly won't work since length is decreasing each loop
            const lengthOfCueList = tracks[0].cues.length - 1;

            for (let i = 0; i <= lengthOfCueList; i++) {

                // Keep removing first cue until there is no more
                if (tracks[0].cues[0]) {

                    // console.log('IN FOR LOOP, CUE BEING REMOVED : ', tracks[0].cues[0])
                    tracks[0].removeCue(tracks[0].cues[0]);

                }

            }
        }

        console.log('LISTING TRACK', tracks)

        // * Keep Subs in order for user
        subTitleState.subtitles.sort((a, b) => (a.inTime) - (b.inTime));

        // * Add cues on track from sorted subtitles array
        let theSubtitleRows = subTitleState.subtitles.map((sub) => {

            let cue = new VTTCue(sub.inTime, sub.outTime, sub.text);
            tracks[0].addCue(cue);

            return <Subtitle key={sub.id} Subtitle={sub} />
        })

        setSubtitleRows(theSubtitleRows)

    }

    const timeToVTT = (num) => {
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

    // USED IN LIST FUNCTIONS TO MAKE SURE SUBS ARE CHRONOLOGICAL
    const sortSubtitlesForTable = (subtitles) => {

    }


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

            button.innerHTML = 'Out Time';

            // if inTime has already been defined, set cue endTime to current video time and pause video
        } else {
            let outTime = video.currentTime;

            console.log('****************************************************** CURRENT OUT TIME: ', outTime)

            // let cuesLength = tracks[0].cues.length;

            video.pause();

            // console.log('BEFORE ADDING OUT TIME', tracks[0].cues[cuesLength - 1])

            // tracks[0].cues[cuesLength - 1].endTime = outTime;

            setSubTitleState({
                ...subTitleState,
                subInit: false,
                outTime: outTime
            })

            setModalVisible(true)

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

        // * Set Subtitle info to save 
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

            let savedSubtitle = await axios.post(`http://localhost:8000/subtitles/api/${projectId}/add-sub`, thisSubtitle)

            console.log('SAVED SUBTITLE: ', savedSubtitle.data)

            setSubTitleState({
                ...subTitleState,
                subtitles: [...subTitleState.subtitles, savedSubtitle.data],
                inTimeVTT: inVTT,
                outTimeVTT: outVTT
            })
            setShouldAddSub(true)
            setModalVisible(false)
            video.play();

        } catch (error) {
            console.log(error)
        }

    };

    // function to cancel and clear current subtitle sith Cancel button in modal
    const cancelSubtitle = () => {
        // let modal = document.getElementById('sub-text');
        let modal = document.getElementById('myModal')
        let tracks = document.querySelector('video').textTracks;
        let video = document.getElementById('video');
        let cuesLength = tracks[0].cues.length;
        // delete current cue
        tracks[0].removeCue(tracks[0].cues[cuesLength - 1]);
        // clear modal text
        document.getElementById('this-sub-text').value = '';

        video.play();
        // modal.style.display = 'none';
        setModalVisible(true)

    };

    const downloadSub = () => {

        let downloadVTT = `WEBVTT`

        axios.get(`http://localhost:8000/projects/api/subtitles/${projectId}`)
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

            <SubtitleCreationContainer>

                {/* <Button> In Time</Button> */}

                <div>
                    <button
                        id='creation-button'
                        className="btn btn-primary"
                        onClick={createSub}
                    >
                        In Time
                 </button>
                </div>

                <div className="creationSub">


                    <Modal
                        Visible={modalVisible}
                        toggle={setModalVisible}
                        onChange={genericSync}
                        saveSubtitle={saveSubtitle}
                    />

                    {/* Subtitle list div */}
                    <div>

                        <div id='show-subtitles'>

                            <Table dark>

                                <thead>
                                    <tr>
                                        <th>Text</th>
                                        <th>In Time</th>
                                        <th>Out Time</th>
                                    </tr>
                                </thead>

                                <tbody id="sub-tbody">
                                    {subtitleRows}
                                </tbody>

                            </Table>

                        </div>

                    </div>

                </div>

                <div>
                    <button id='download-button' onClick={downloadSub} className="btn btn-secondary">Download subtitles</button>
                </div>

            </SubtitleCreationContainer>

        </React.Fragment>


    );

};

export default SubtitleCreation;