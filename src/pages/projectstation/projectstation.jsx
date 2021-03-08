import React, { useState } from 'react';

import LoopCircleLoading from '../../shared/CircleLoading/CircleLoading'

import SubtitleCreation from '../../components/subtitlecreation/subtitlecreation'

import { StationContainer, ContentContainer } from './project-station-styles'

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

            <ContentContainer>
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
            </ContentContainer>

        </StationContainer>

    );
};

export default ProjectStation;