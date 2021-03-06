import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import axios from "axios";

import AuthContext from '../../../shared/context/auth-context'

// ! Add loading screen since uploads can take awhile
// ! Add modal after upload asking if they want to upload another maybe?

const ProjectForm = () => {

    const [projectInfo, setProjectInfo] = useState({
        userId: localStorage.getItem('currentUserId'),
        videoURL: "",
        title: "",
        genre: "",
        description: "",
        language: "English",
        videoFile: ''
    })

    const { userSignedIn } = useContext(AuthContext)

    let history = useHistory();

    useEffect(() => {

        if (!userSignedIn) {
            history.push('/login');
        }

    }, [])

    const genericSync = e => {

        const { name, value } = e.target
        setProjectInfo({ ...projectInfo, [name]: value })

    }

    // this method handles just the file upload
    const handleFileUpload = e => {

        console.log("The file to be uploaded is: ", e.target.files[0]);

        setProjectInfo({ ...projectInfo, videoFile: e.target.files[0] })

    }

    const handleSubmit = (event) => {

        // if (!userSignedIn) {
        //     this.props.history.push('/login');
        // }

        // prevent behavior of form submission (refreshing or clearing) page
        event.preventDefault()

        // ? console.log('ENTERING SUBMIT, FILE IN STATE IS ', projectInfo.videoFile);

        let data = new FormData();

        // data.append('userId', projectInfo.userId);
        data.append('title', projectInfo.title);
        data.append('genre', projectInfo.genre);
        data.append('description', projectInfo.description);
        data.append('language', projectInfo.language);
        data.append('videoFile', projectInfo.videoFile);

        axios({
            method: 'post',
            url: `${process.env.REACT_APP_API_URL}projects/api/create-project/${projectInfo.userId}`,
            headers: { 'Content-Type': `multipart/form-data` },
            data
        })
            .then((responseFromCreatingProject) => {
                console.log(responseFromCreatingProject.data);
            })
            .catch((err) => {
                console.log('FORM FAILED');
                console.log(err);
            });

    }

    return (
        <section>

            <h2> Video Info </h2>

            <form name='myForm' onSubmit={event => handleSubmit(event)} >

                <label> Video Title: </label>
                <input
                    value={projectInfo.videoTitle} // projectInfo.fullName
                    onChange={event => genericSync(event)}
                    type="text"
                    name="title"
                    placeholder="Name of Project"
                />

                <label> Video Genre: </label>
                <input
                    value={projectInfo.genre} // projectInfo.fullName
                    onChange={event => genericSync(event)}
                    type="text"
                    name="genre"
                    placeholder="Drama"
                />

                <label> Video Description: </label>
                <input
                    value={projectInfo.description} // projectInfo.fullName
                    onChange={event => genericSync(event)}
                    type="text"
                    name="description"
                    placeholder="Desc."
                />

                <label className="file-preview"> Video Language: </label>
                <input
                    value={projectInfo.language} // projectInfo.fullName
                    onChange={event => genericSync(event)}
                    type="text"
                    name="language"
                    placeholder="Upload File"
                />

                <div className="custom-file">
                    <input type="file" name="videoFile"  className="custom-file-input" id="inputGroupFile01"
                        aria-describedby="inputGroupFileAddon01" onChange={(e) => handleFileUpload(e)} />
                    <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                </div>

                <br /> <label> Video File: </label>

                <button onClick={() => handleSubmit}>Submit</button>

            </form>

            {/* if the message is not null (basically if there's a message) then show it in this <div> tag */}
            {/* {this.state.message && <div> {this.state.message} </div>} */}

        </section>
    );

};

export default ProjectForm;