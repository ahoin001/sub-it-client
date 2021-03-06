import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'

import Project from '../../components/project-components/Project/Project'

// import VideoPlayer from '../../components/VideoPlayer'

import {
    Container,
    FlexContainer,
    Column,
    Article,
    Header
} from './UserProjects-Styles'

const ProjectList = () => {

    const [projectsOfUser, setProjectsOfUser] = useState([])


    useEffect(() => {

        //     if (!this.props.theUser) {
        //         this.props.history.push('/login')
        // return;
        //     }
        //     console.log("this is the did mount and the props ========= ", this.props)

        const fetchData = async () => {

            const userId = localStorage.getItem('currentUserId');

            console.log('BEFORE FETCHING VIDS FOR DASHBOARD: ', userId)

            // * Get Projects that belong to signed in user
            await axios.get(`${process.env.REACT_APP_API_URL}projects/api/dashboard/${userId}`)
                .then(response => {
                    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!..............................", response.data);
                    setProjectsOfUser(response.data);
                })
                .catch(function (error) {
                    console.log('FAILURE GETTING USER PROJECTS')
                    console.log(error);
                })

        }

        fetchData();

    }, [])

    let projectListItems;

    // ! Need to make this return columns ov projects

    if (projectsOfUser) {
        projectListItems = projectsOfUser.map((projectFromList, i) =>
            <li key={projectFromList.id}>

                {/* <Project videoURL={projectFromList.videoURLS} title={projectFromList.title} projectId={projectFromList.id} /> */}
                <Project projectInfo={projectFromList} />

            </li>
        );
    }


    const videoRef = useRef(null);

    const hoverplayVideo = () => {

        // console.log(projectInfo.id)
        // References video with "vidRef" ref attribute, then plays the video
        videoRef.current.play();
        videoRef.current.currentTime = 0

    };

    const hoverpauseVideo = () => {

        // References video with "vidRef" ref attribute, then plays the video
        videoRef.current.pause();

    };

    return (

        <React.Fragment>

            {/* <VideoPlayer videoURL="https://www.youtube.com/watch?v=_ZjVpV-XUTc" /> */}

            <Container>

                <FlexContainer>

                    <Column>

                        <Article>

                            <a href="#">
                                <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                            </a>

                            <Header>

                                <h1 class="text-lg">

                                    <a class="no-underline hover:underline text-black" href="#">
                                        Article Title
                                </a>

                                </h1>
                                <p class="text-grey-darker text-sm">
                                    14/4/19
                            </p>

                            </Header>

                        </Article>

                    </Column>

                    <Column>

                        <Article>

                            <a href="#">
                                <img alt="Placeholder" class="" src="https://picsum.photos/600/400/?random" />
                            </a>

                            <Header>

                                <h1 class="text-lg">
                                    <a href="#">
                                        Article Title
                                </a>
                                </h1>

                                <p class="text-grey-darker text-sm">
                                    14/4/19
                            </p>

                            </Header>

                        </Article>

                    </Column>


                    <Column>

                        <Article>

                            <video
                                src="http://res.cloudinary.com/damclaohv/video/upload/v1601144854/subit/oklvyovwtnv45xpydlko.mp4"
                                type="video/mp4"
                                ref={videoRef}
                                onMouseOver={hoverplayVideo}
                                onMouseLeave={hoverpauseVideo}
                            ></video>

                            <Header>

                                <h1 class="text-lg">
                                    <a class="no-underline hover:underline text-black" href="#">
                                        Article Title
                                    </a>
                                </h1>

                                <p class="text-grey-darker text-sm">
                                    14/4/19
                                </p>



                            </Header>

                        </Article>

                    </Column>

                </FlexContainer>

            </Container>

        </React.Fragment>

    );
};

export default ProjectList;