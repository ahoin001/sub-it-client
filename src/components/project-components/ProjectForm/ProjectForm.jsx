import React, { useState } from 'react';
import axios from "axios";

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

        // if (!this.props.theUser) {
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
            url: `http://localhost:8000/projects/api/create-project/${projectInfo.userId}`,
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
                    placeholder="The Great Journey"
                />

                <label> Video Genre: </label>
                <input
                    value={projectInfo.genre} // projectInfo.fullName
                    onChange={event => genericSync(event)}
                    type="text"
                    name="genre"
                    placeholder="The Great Journey"
                />

                <label> Video Description: </label>
                <input
                    value={projectInfo.description} // projectInfo.fullName
                    onChange={event => genericSync(event)}
                    type="text"
                    name="description"
                    placeholder="The Great Journey"
                />

                <label className="file-preview"> Video Language: </label>
                <input
                    value={projectInfo.language} // projectInfo.fullName
                    onChange={event => genericSync(event)}
                    type="text"
                    name="language"
                    placeholder="The Great Journey"
                />

                <div className="custom-file">
                    <input type="file" name="videoFile" className="custom-file-input" id="inputGroupFile01"
                        aria-describedby="inputGroupFileAddon01" onChange={(e) => handleFileUpload(e)} />
                    <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                </div>

                <br /> <label> Video File: </label>

                {/* <Dropzone updateParent={this.updateStateFileIfFileAdded.bind(this)} /> */}

                {/* <button> Update </button> */}

                {/* Styling is in app.css */}
                {/* <FileViewer
                    fileType={'mp4'}
                    filePath={projectInfo.tempFileURL}

                /> */}

                <button onClick={() => handleSubmit}>Submit</button>

            </form>

            {/* if the message is not null (basically if there's a message) then show it in this <div> tag */}
            {/* {this.state.message && <div> {this.state.message} </div>} */}

        </section>
    );

};

export default ProjectForm;