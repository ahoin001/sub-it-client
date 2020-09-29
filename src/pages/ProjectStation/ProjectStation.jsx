import React, { useState, useRef } from 'react';

import SubtitleCreation from '../../components/SubtitleCreation/SubtitleCreation'

// import SubtitleCreation from '../../components/SubtitleCreation';

import VideoPlayer from '../../components/VideoPlayer'

const ProjectStation = (props) => {

    const projectInfo = props.location.state.projectInfo;

    console.log('I AM STATE OF STATIONl: ', projectInfo)

    const [videoControl, setvideoControl] = useState({
        projectInfo: projectInfo,
        ready: false,
        pip: false,
        playing: true,
        controls: false,
        light: false,
        volume: 0.8,
        muted: false,
        played: 0,
        loaded: 0,
        duration: 0,
        playbackRate: 1.0,
        loop: false,
        currentProjectId: '',
    })

    const playVideo = () => {
        // You can use the play method as normal on your video ref
        this.refs.vidRef.play();

    };

    const pauseVideo = () => {
        // Pause as well
        this.refs.vidRef.pause();
        this.refs.vidRef.currentTime = 0;
    };

    let video;

    if (videoControl.projectInfo) {
        video = <VideoPlayer videoURL={projectInfo.videoURL} />;
    } else {
        video = 'Loading...';
    }

    // console.log(`@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@: `,process.env.REACT_APP_API_URL)

    return (
        <div className="container_video">

            <div>{video}</div>
            {/* <div id='video-container'>
                    <video id="video" crossOrigin="anonymous" autoPlay controls preload="metadata">
                    <source src={this.state.videoURL} />
                    <track id="my-subs" label="English" kind="subtitles" srcLang="en" src="" default/> 
                    </video>
                </div> */}

            {/* TODO: Get projectID from URL */}
            <div><SubtitleCreation projectId={projectInfo.id} /></div>

        </div>

    );
};

export default ProjectStation;