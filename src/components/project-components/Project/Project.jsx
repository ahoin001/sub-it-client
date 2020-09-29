import React, { useRef } from 'react';
import { Link } from 'react-router-dom'

// Import Personal Card Styling
import '../../../ProjectStyles.css'

// ! Videos appear as blank white 

const Project = ({ projectInfo }) => {

    const videoRef = useRef(null);

    const hoverplayVideo = (e) => {

        console.log(projectInfo.id)
        // References video with "vidRef" ref attribute, then plays the video
        videoRef.current.play();
        videoRef.current.currentTime = 0

    };

    const hoverpauseVideo = () => {

        // References video with "vidRef" ref attribute, then plays the video
        videoRef.current.pause();

    };

    return (

        <div>
            <Link to={{
                pathname: `/project/${projectInfo.id}`,
                state: {
                    projectInfo
                }
            }} >

                <div className="card ">

                    <div className="card_video">

                        <video
                            // loop autoPlay='' muted
                            ref={videoRef}
                            src={projectInfo.videoURL}
                            type="video/mp4"

                            onMouseOver={hoverplayVideo}
                            onMouseLeave={hoverpauseVideo}
                        >
                        </video>


                    </div>

                    <div className="card_title title-white">

                        <p>{projectInfo.title}</p>

                    </div>

                </div>

            </Link>

        </div>
    );
};

export default Project;