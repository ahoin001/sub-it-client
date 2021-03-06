import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import LoopCircleLoading from '../../../shared/CircleLoading/CircleLoading'

import WithLoading from '../../../shared/CircleLoading/WithLoading'

import { Link } from 'react-router-dom'

import { Container } from './ProjectList-Styles'

// import Project from '../Project'
import Project from '../Project/Project'
import { ContentContainer } from './ProjectList-Styles';


const ProjectsList = () => {

    const [projectsOfUser, setProjectsOfUser] = useState([])

    const [isloading, setIsloading] = useState(true)

    const counter = useRef(0);

    const videoLoaded = () => {

        counter.current += 1;
        // console.log('VIDEO LOADING LENGTH: ', projectsOfUser.length)
        // console.log('VIDEO LOADING COUNTER: ', counter.current)

        if (counter.current >= projectsOfUser.length) {
            setIsloading(false);
        }

    }

    useEffect(() => {

        //     if (!this.props.theUser) {
        //         this.props.history.push('/login')
        // return;
        //     }
        //     console.log("this is the did mount and the props ========= ", this.props)

        const fetchData = async () => {

            setIsloading(true);

            // * Get Projects that belong to signed in user
            await axios.get(`${process.env.REACT_APP_API_URL}projects/api/dashboard/${localStorage.getItem('currentUserId')}`)
                .then(response => {

                    // console.log("REQUEST COMPLETE, CAN STOP LOADING", response.data);

                    setProjectsOfUser(response.data);

                    setIsloading(false);

                })
                .catch(function (error) {
                    console.log('FAILURE GETTING USER PROJECTS')
                    console.log(error);
                })

        }

        fetchData();

    }, [])

    let projectListItems;

    if (projectsOfUser) {

        projectListItems = projectsOfUser.map((projectFromList, i) =>

            <React.Fragment key={projectFromList.id}>
                <Project onVideoLoaded={videoLoaded} projectInfo={projectFromList} />
            </React.Fragment>

        );
    }


    return (

        <Container>

            <ContentContainer>
                {
                    isloading ?
                        <LoopCircleLoading /> :
                        projectListItems
                }
            </ContentContainer>

        </Container>

    );

};

export default ProjectsList;