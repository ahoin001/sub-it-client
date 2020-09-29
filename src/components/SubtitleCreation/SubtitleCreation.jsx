import React, { useState, useEffect } from 'react';
import axios from 'axios'
import FileSaver from 'file-saver';

// ! Currently makes request for all subs each time sub is added, works, but come back and 
// ! make this more efficient

const SubtitleCreation = ({ projectId }) => {

    const [shouldRefetch, setShouldRefetch] = useState(true)

    const [subTitleState, setSubTitleState] = useState({
        subInit: false,
        inTime: 0,
        outTime: 0,
        text: '',
        inTimeVTT: '',
        outTimeVTT: '',
        subtitles: [],
        download: []
    })

    useEffect(() => {

        const fetchData = async () => {

            console.log('Running Effect')

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

    const listSubtitles = () => {

        let tracks = document.querySelector('video').textTracks;
        let subtitleList = document.getElementById('sub-tbody');
        let projectSubtitles = subTitleState.subtitles;

        console.log('LIST SUBTITLES CALLED: ', projectSubtitles)

        // Clear List
        subtitleList.innerHTML = ""

        // Loop through subs and place them apropiately in video
        projectSubtitles.map((sub) => {

            // Add existing subtitles to HTML track tag
            let inTime = sub.inTime;
            let outTime = sub.outTime;
            let text = sub.text;
            let cue = new VTTCue(inTime, outTime, text);
            tracks[0].addCue(cue);

            // console.log(tracks[0]);

            // Display existing subtitles in DOM
            subtitleList.innerHTML +=
                `<tr class="each-sub">
          <td>${sub.text}</td>
          <td>${sub.inTimeVTT}</td>
          <td>${sub.outTimeVTT}</td>
        </tr>
        `;
        })

    }


    // ! May use this to efficiently add subtitles with out making too many requests
    // const listOneSubtitle = (sub, inTimeVTT, outTimeVTT) => {

    //     console.log('IM IN LIST ONE SUBTITLE')
    //     // Display subtitle in DOM
    //     let subtitleList = document.getElementById('sub-tbody');
    //     // subtitleList.innerHTML += `<li>${sub} || ${inTimeVTT} --> ${outTimeVTT}</li><br>`;
    //     subtitleList.innerHTML +=
    //         `<tr class="each-sub">
    //       <td>${sub}</td>
    //       <td>${inTimeVTT}</td>
    //       <td>${outTimeVTT}</td>
    //       </tr>
    //     `;

    // }

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
    };

    // function to display subtitle text modal after endTime has been set
    const completeSub = () => {
        let modal = document.getElementById('myModal');
        modal.style.display = 'block';
    };

    const saveSubtitle = async () => {

        let modal = document.getElementById('myModal')
        let tracks = document.querySelector('video').textTracks;
        let video = document.getElementById('video');
        let cuesLength = tracks[0].cues.length;

        // set cue text to the text typed in the modal
        let theText = document.getElementById('this-sub-text').value;
        tracks[0].cues[cuesLength - 1].text = theText;

        // clear modal text
        document.getElementById('this-sub-text').value = '';
        // let thisProjectId = this.props.projectId;

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
            setShouldRefetch(true)

            video.play();
            modal.style.display = 'none';

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
        modal.style.display = 'none';
    };

    const downloadSub = () => {

        let downloadVTT = `WEBVTT`
        axios.get(`http://localhost:8000/projects/api/subtitles/${projectId}`)
            .then((response) => {

                // setSubTitleState({
                //     ...subTitleState,
                //     download: response.data.subArray
                // })



                let finishedSubs = subTitleState.subtitles;
                finishedSubs.map((sub) => {
                    downloadVTT += `\n\n${sub.inTimeVTT} --> ${sub.outTimeVTT}\n${sub.text}`;
                });
                let blob = new Blob([downloadVTT], { type: "text/plain;charset=utf-8", endings: 'native' });
                FileSaver.saveAs(blob, 'subtitles.vtt');
            })
            .catch((err) => { });

    }


    return (
        <div>

            <div>
                <button id='creation-button' className="btn btn-secondary" onClick={createSub}>In Time</button>
            </div>

            <div className="creationSub">

                <div className="modal" id="myModal">

                    <div className="modal-dialog modal-dialog-centered">

                        <div className="modal-content">

                            <div className="modal-header">
                                <h4 className="modal-title">The text must be shorter than 80 characters</h4>
                                <button type="button" className="close" onClick={cancelSubtitle} data-dismiss="modal">X</button>
                            </div>

                            <div className="modal-body">
                                <textarea id="this-sub-text" rows="2" cols="50" maxLength="80"></textarea>
                            </div>

                            <div className="modal-footer">

                                <button type="button" className="btn btn-danger" data-dismiss="modal" id="cancel-btn"
                                    onClick={cancelSubtitle}>Close</button>

                                <button type="button" className="btn btn-primary" data-dismiss="modal" id="save-text-btn"
                                    onClick={saveSubtitle}>Save</button>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Subtitle list div */}
                <div>
                    <div id='show-subtitles'>
                        <table id="subtitle-list">
                            <thead>
                                <tr>
                                    <th>Text</th>
                                    <th>In time</th>
                                    <th>Out time</th>
                                </tr>
                            </thead>
                            <tbody id="sub-tbody">

                            </tbody>
                        </table>

                    </div>
                    <button id='download-button' onClick={downloadSub} className="btn btn-secondary">Download subtitles</button>


                </div>
                <div>

                </div>
            </div>
        </div>
    );

};

export default SubtitleCreation; 