import React, { useState } from 'react';

import LoopCircleLoading from '../../shared/CircleLoading/CircleLoading'

import SubtitleCreation from '../../components/SubtitleCreation/SubtitleCreation'

import { StationContainer } from './Project-Station-styles'

import VideoPlayer from '../../components/VideoPlayer'

const ProjectStation = (props) => {

    const projectInfo = props.location.state.projectInfo;

    const [isLoading, setIsLoading] = useState(false)

    let video;

    if (projectInfo) {
        video = <VideoPlayer videoURL={projectInfo.videoURL} />;
    } else {
        video = 'Loading...';
    }

    return (

        <StationContainer>

            {isLoading ?

                <LoopCircleLoading /> :

                <React.Fragment>

                    <div className="video">
                        {video ? video : <LoopCircleLoading />}
                    </div>

                    <SubtitleCreation projectInfo={projectInfo} projectId={projectInfo.id} videoURL={projectInfo.videoURL} />

                </React.Fragment>

            }

        </StationContainer>

    );
};

export default ProjectStation;