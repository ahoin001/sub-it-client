import React, { useState,useEffect } from 'react';

import SubtitleCreation from '../../components/SubtitleCreation/SubtitleCreation'
// import SubtitleCreation from '../../components/SubtitleCreation';


import { StationContainer } from './Project-Station-styles'

import VideoPlayer from '../../components/VideoPlayer'

const ProjectStation = (props) => {

    const projectInfo = props.location.state.projectInfo;

    // console.log('I AM STATE OF STATIONl: ', projectInfo)


    useEffect(() => {
        console.log('STATION EFFECT HAS BEE RENDERED')
    }, [])

    const [videoControl,
        setvideoControl
    ] = useState({
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

    // const playVideo = () => {
    //     // You can use the play method as normal on your video ref
    //     this.refs.vidRef.play();

    // };

    // const pauseVideo = () => {
    //     // Pause as well
    //     this.refs.vidRef.pause();
    //     this.refs.vidRef.currentTime = 0;
    // };

    let video;

    if (videoControl.projectInfo) {
        video = <VideoPlayer videoURL={projectInfo.videoURL} />;
    } else {
        video = 'Loading...';
    }

    // console.log(`@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@: `,process.env.REACT_APP_API_URL)

    return (
        // <div className="container_video">

        <StationContainer>

            <div className="video">
                {video}
            </div>

            <div>

                <SubtitleCreation projectId={projectInfo.id} videoURL={projectInfo.videoURL}/>
            
            </div>

        </StationContainer>


        // </div>

    );
};

export default ProjectStation;