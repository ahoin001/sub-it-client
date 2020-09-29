import React, { useState, useEffect } from 'react';
import axios from "axios";

// import Project from '../Project'
import Project from '../Project/Project'


const ProjectsList = () => {

    const [projectsOfUser, setProjectsOfUser] = useState([])


    useEffect(() => {

        //     if (!this.props.theUser) {
        //         this.props.history.push('/login')
        // return;
        //     }
        //     console.log("this is the did mount and the props ========= ", this.props)

        const fetchData = async () => {

            const userId = localStorage.getItem('currentUserId');
            
            console.log('BEFORE FETCHING VIDS FOR DASHBOARD: ',userId)

            // * Get Projects that belong to signed in user
            await axios.get(`http://localhost:8000/projects/api/dashboard/${userId}`)
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

    let  projectListItems;

    if (projectsOfUser) {
         projectListItems = projectsOfUser.map((projectFromList, i) =>
            <li key={projectFromList.id}>

                {/* <Project videoURL={projectFromList.videoURLS} title={projectFromList.title} projectId={projectFromList.id} /> */}
                <Project projectInfo={projectFromList} /> 

            </li>
        );
    }


    return (

        <div className="project-container" >

            <ul>
                {projectsOfUser && projectListItems}
            </ul>

        </div>

    );

};

export default ProjectsList;