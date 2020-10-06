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

    const [subtitleRows, setSubtitleRows] = useState('')

    const [subTitleState, setSubTitleState] = useState({
        subInit: false,
        inTime: 0,
        outTime: 0,
        subtitleToSave: '',
        inTimeVTT: '',
        outTimeVTT: '',
        subtitles: [],
        download: [],
    })

    useEffect(() => {

        console.log('GOING TO ADD SUB')
        if (shouldAddSub) {
            console.log('INVTTTT: ', subTitleState.subtitleToSave)
            console.log('INVTTTT: ', subTitleState.inTimeVTT)
            console.log('OutTTTT: ', subTitleState.outTimeVTT)
            // listOneSubtitle(subTitleState.subtitleToSave, subTitleState.inTimeVTT, subTitleState.outTimeVTT)
            listOneSubtitle();
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

                        console.log("* Get Subtitles that belong to signed in user", response.data);

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

    const listOneSubtitle = () => {

        // Display subtitle in DOM
        let subtitleList = document.getElementById('sub-tbody');

        console.log('IN LIST ONE FUNCTION INTIME : ', subTitleState.inTimeVTT)
        console.log('IN LIST ONE FUNCTION OUTTOME: ', subTitleState.outTimeVTT)
        let newSub = <Subtitle text={subTitleState.text} inTimeVTT={subTitleState.inTimeVTT} outTimeVTT={subTitleState.outTime} />

        // subtitleList.innerHTML += `<li>${sub} || ${inTimeVTT} --> ${outTimeVTT}</li><br>`;
        setSubtitleRows(subtitleRows.push(newSub))

        // subtitleList.innerHTML +=
        //     `<tr class="each-sub">
        //   <td>${subTitleState.subtitleToSave}</td>
        //   <td>${subTitleState.inTimeVTT}</td>
        //   <td>${subTitleState.outTimeVTT}</td>
        //   </tr>
        // `;

        setShouldAddSub(false)
    }

    const listSubtitles = () => {

        let tracks = document.querySelector('video').textTracks;
        let subtitleList = document.getElementById('sub-tbody');
        let projectSubtitles = subTitleState.subtitles;

        console.log('LIST SUBTITLES CALLED: ', projectSubtitles)


        let rows = projectSubtitles.map((sub) => {
            let inTime = sub.inTime;
            let outTime = sub.outTime;
            let text = sub.text;
            let cue = new VTTCue(inTime, outTime, text);
            tracks[0].addCue(cue);
            return <Subtitle text={sub.text} inTimeVTT={sub.inTime} outTimeVTT={sub.outTime} />
        }
        )

        setSubtitleRows(rows)

        // Clear List
        // subtitleList.innerHTML = ""

        // Loop through subs and place them apropiately in video
        // projectSubtitles.map((sub) => {

        //     // Add existing subtitles to HTML track tag
        //     let inTime = sub.inTime;
        //     let outTime = sub.outTime;
        //     let text = sub.text;
        //     let cue = new VTTCue(inTime, outTime, text);
        //     tracks[0].addCue(cue);

        //     // Display existing subtitles in DOM
        //     subtitleList.innerHTML +=
        //         `<tr class="each-sub">
        //   <td>${sub.text}</td>
        //   <td>${sub.inTimeVTT}</td>
        //   <td>${sub.outTimeVTT}</td>
        // </tr>
        // `;

        // })

        // Loop through subs and place them apropiately in video


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

    const createSub = () => {
        let tracks = document.querySelector('video').textTracks;
        let video = document.getElementById('video');
        let button = document.getElementById('creation-button');

        // if inTime has not been defined, create a new cue with startTime set to current video time
        if (subTitleState.subInit === false) {
            let inTime = video.currentTime;
            let cue = new VTTCue(inTime, null, '');
            tracks[0].addCue(cue);

            setSubTitleState({
                ...subTitleState,
                subInit: true
            })

            button.innerHTML = 'Out Time';

            // if inTime has already been defined, set cue endTime to current video time and pause video
        } else {
            let outTime = video.currentTime;
            let cuesLength = tracks[0].cues.length;
            video.pause();
            tracks[0].cues[cuesLength - 1].endTime = outTime;

            setSubTitleState({
                ...subTitleState,
                subInit: false
            })

            completeSub()

            button.innerHTML = 'In Time';
        }

        // if (button.innerHTML = 'Out Time') {
        //     setModalVisible(!modalVisible)
        // }

    };


    // function to display subtitle text modal after endTime has been set
    const completeSub = () => {
        let modal = document.getElementById('myModal');

        // modal.style.display = 'block';

        setModalVisible(true)

    };

    const saveSubtitle = async () => {

        let tracks = document.querySelector('video').textTracks;
        let video = document.getElementById('video');
        let cuesLength = tracks[0].cues.length;

        // ! Get Subtitle to save from state
        let textToSave = subTitleState.subtitleToSave;
        tracks[0].cues[cuesLength - 1].text = textToSave;


        // clear modal text
        document.getElementById('this-sub-text').value = '';

        // Create VTT inTime and outTime with timeToVTT function
        let inVTT = timeToVTT(tracks[0].cues[cuesLength - 1].startTime);
        let outVTT = timeToVTT(tracks[0].cues[cuesLength - 1].endTime);

        // Define body for axios post request
        let thisSubtitle = {
            inTime: tracks[0].cues[cuesLength - 1].startTime,
            outTime: tracks[0].cues[cuesLength - 1].endTime,
            text: tracks[0].cues[cuesLength - 1].text,
            inTimeVTT: inVTT,
            outTimeVTT: outVTT
        }

        console.log('************* IM IN SAVE');

        // * Post request to push current subtitle to the database
        // * If successful then display to client

        try {

            console.log('IN THE TRY')

            let savedSubtitle = await axios.post(`http://localhost:8000/subtitles/api/${projectId}/add-sub`, thisSubtitle)

            console.log('SAVED SUBTITLE: ', savedSubtitle)

            // listOneSubtitle(thisSubtitle.text, thisSubtitle.inTimeVTT, thisSubtitle.outTimeVTT);
            setSubTitleState({
                ...subTitleState,
                subtitleToSave: tracks[0].cues[cuesLength - 1].text,
                inTimeVTT: inVTT,
                outTimeVTT: outVTT
            })
            setShouldAddSub(true)
            setModalVisible(false)
            video.play();
            // modal.style.display = 'none';


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

    let video;

    if (videoURL) {
        video = <VideoPlayer videoURL={videoURL} />;
    } else {
        video = 'Loading...';
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