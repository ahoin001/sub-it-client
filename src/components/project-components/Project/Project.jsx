import React, { useRef } from 'react';
import { Link } from 'react-router-dom'


import {
    Container,
    Article,
    Header
} from './Project-Styles.jsx'


// ! Videos appear as blank white 

// const Project = ({ projectInfo,...props }) => {
const Project = (props) => {

    const videoRef = useRef(null);

    const hoverplayVideo = (e) => {

        // console.log(props.projectInfo)
        
        // References video with "vidRef" ref attribute, then plays the video
        videoRef.current.play();
        videoRef.current.currentTime = 0

        // console.log('================================ Props: ', props)

    };

    const hoverpauseVideo = () => {

        // References video with "vidRef" ref attribute, then plays the video
        videoRef.current.pause();

    };

    return (

        <React.Fragment>

            <Link to={{
                pathname: `/project/${props.projectInfo.id}`,
                state: {
                    projectInfo: props.projectInfo
                }
            }}
                style={{ textDecoration: 'none' }}
            >

                <Article
                // style={{ backgroundColor: 'none' }}
                >

                    <video
                        src={props.projectInfo.videoURL}
                        type="video/mp4"
                        ref={videoRef}
                        onLoadedData={props.onVideoLoaded}
                        onMouseOver={hoverplayVideo}
                        onMouseLeave={hoverpauseVideo}
                    ></video>

                    <Header>

                        <h1>
                            {/* <a class="text-primary-900 no-underline" href="#"> */}
                            {props.projectInfo.title}
                            {/* </a> */}
                        </h1>

                        <p>
                            {props.projectInfo.description}
                        </p>

                    </Header>

                </Article>
            </Link>

        </React.Fragment>

    );
};

export default Project;