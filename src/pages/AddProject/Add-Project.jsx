import React, { useState, useEffect, useContext } from "react";
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import axios from "axios";
import FileViewer from 'react-file-viewer';

import { ReactComponent as Warning } from '../../shared/Alerts/Icons/Warning.svg'

import AuthContext from '../../shared/context/auth-context'

import logo from "../../images/logo.svg";
import googleIconImageSrc from "../../images/google-icon.png";

import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";

import AnimationRevealPage from "../../helpers/AnimationRevealPage";
import { AddButton } from "./Add-Project-Styles";

import {
    Container,
    Content,
    MainContainer,
    LogoImage,
    MainContent,
    Heading,
    FormContainer,
    DividerTextContainer,
    DividerText,
    Input
} from '../../shared/FormPageLayout/Form-Styles'

import { SolidButton } from '../../shared/Buttons/Buttons'

import {
    Form
} from './Add-Project-Styles.jsx'




// TODO Need user errors for inputs amd to only allow video formats on input

const ProjectPage = (props) => {

    // ***************************************************************

    const [projectInfo, setProjectInfo] = useState({
        userId: localStorage.getItem('currentUserId'),
        videoURL: "",
        title: "",
        genre: "",
        description: "",
        language: "English",
        videoFile: null
    })

    // ** React Hook Form 
    //   const { register, handleSubmit, errors } = useForm()

    const [selectedFile, setSelectedFile] = useState()

    const [preview, setPreview] = useState()

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }

    // ***************

    // const { userSignedIn } = useContext(AuthContext)

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

    // ***************************************************************


    // dynamically keep track of form field in state
    const handleInputChange = e => {
        console.log('EVENT TARGET', e.target.name)
        const { name, value } = e.target
        setProjectInfo({ ...projectInfo, [name]: value });
    }



    let history = useHistory();

    let headingText = "Add A Project"
    let socialButtons = [
        {
            iconImageSrc: googleIconImageSrc,
            text: "Sign In With Google",
            url: "https://google.com"
        }
    ]

    let submitButtonText = "Submit Project"
    let SubmitButtonIcon = LoginIcon

    return (
        <AnimationRevealPage disabled>

            <Container>

                <Content>

                    <MainContainer>

                        <Link to="/">
                            {/* <LogoLink href={logoLinkUrl}> */}
                            <LogoImage src={logo} />
                            {/* </LogoLink> */}
                        </Link>


                        <MainContent>

                            <Heading>{headingText}</Heading>

                            <FormContainer>

                                <DividerTextContainer>
                                    <DividerText></DividerText>
                                </DividerTextContainer>

                                <Form>

                                    <Input
                                        type="text"
                                        name="title"
                                        placeholder="Name of Video"
                                        onChange={e => handleInputChange(e)}
                                    />

                                    <Input
                                        type="text"
                                        name="description"
                                        placeholder="Description"
                                        onChange={e => handleInputChange(e)}
                                    />

                                    <Input
                                        type="text"
                                        name="genre"
                                        placeholder="Genre"
                                        onChange={e => handleInputChange(e)}
                                    />

                                    <AddButton for="videoFile" class="custom-file-upload">
                                        + Click to Add Video
                                    </AddButton>

                                    <Input
                                        type="file"
                                        name="videoFile"
                                        id="videoFile"
                                        className="file-input"
                                        placeholder="Upload File"
                                        // onChange={e => handleFileUpload(e)}
                                        onChange={onSelectFile}
                                    />

                                    {
                                        selectedFile
                                        &&
                                        <FileViewer
                                            fileType={'mp4'}
                                            filePath={preview}
                                        />
                                    }

                                    <SolidButton
                                        type="submit"
                                        onClick={handleSubmit}
                                    >

                                        <SubmitButtonIcon className="icon" />
                                        <span className="text">{submitButtonText}</span>

                                    </SolidButton>


                                </Form>

                            </FormContainer>

                        </MainContent>

                    </MainContainer>

                </Content>

            </Container>

        </AnimationRevealPage>
    );
};

export default ProjectPage;