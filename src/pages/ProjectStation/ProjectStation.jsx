import React, { useState } from 'react';

import LoopCircleLoading from '../../shared/CircleLoading/CircleLoading'

import SubtitleCreation from '../../components/SubtitleCreation/SubtitleCreation'

import { StationContainer } from './Project-Station-styles'

import VideoPlayer from '../../components/VideoPlayer'

const ProjectStation = (props) => {

    const projectInfo = props.location.state.projectInfo;

    const [isLoading, setIsLoading] = useState(false)

    let content;

    if (projectInfo) {
        content = <VideoPlayer onVideoLoaded={setIsLoading} videoURL={projectInfo.videoURL} />;
    } else {
        content = <LoopCircleLoading />;
    }

    return (

        <StationContainer>

            {
                isLoading ?

                    <LoopCircleLoading /> :

                    <React.Fragment>

                        <div className="video">
                            {content ? content : <LoopCircleLoading />}
                        </div>

                        <SubtitleCreation
                            isLoading={isLoading}
                            setLoading={setIsLoading}
                            projectInfo={projectInfo}
                            projectId={projectInfo.id}
                            videoURL={projectInfo.videoURL}
                        />

                    </React.Fragment>

            }

        </StationContainer>

    );
};

export default ProjectStation;