import React, { useState, useEffect, useContext } from "react";
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import axios from "axios";
import FileViewer from 'react-file-viewer';

import WithLoader from '../../shared/CircleLoading/WithLoading'

import AuthContext from '../../shared/context/auth-context'

import { ReactComponent as Warning } from '../../shared/Alerts/Icons/Warning.svg'

import logo from "../../images/logo.svg";

import { ReactComponent as SubmitIcon } from "feather-icons/dist/icons/log-in.svg";

import AnimationRevealPage from "../../helpers/AnimationRevealPage";

import Alert from '../../shared/Alerts/Alert'
import LoopCircleLoading from '../../shared/CircleLoading/CircleLoading'

import { AddButton } from "./Add-Project-Styles";
import { Form } from './Add-Project-Styles.jsx'

import { SolidButton } from '../../shared/Buttons/Buttons'
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


// TODO Need user errors for inputs amd to only allow video formats on input

const ProjectPage = (props) => {

    const { register, handleSubmit, errors } = useForm()

    const [isLoading, setIsLoading] = useState(false)

    const [selectedFile, setSelectedFile] = useState()

    const [preview, setPreview] = useState()

    // let history = useHistory();

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

    const handleAddProject = (formInputs) => {

        if (!isLoading) {
            setIsLoading(true)
        }

        const { title, genre, description, videoFile } = formInputs

        let data = new FormData();

        const userId = localStorage.getItem('currentUserId');

        data.append('title', title);
        data.append('genre', genre);
        data.append('description', description);
        data.append('videoFile', videoFile[0]);

        axios({
            method: 'post',
            url: `http://localhost:8000/projects/api/create-project/${userId}`,
            headers: { 'Content-Type': `multipart/form-data` },
            data
        })
            .then((responseFromCreatingProject) => {

                console.log(responseFromCreatingProject.data);
                setIsLoading(false)

            })
            .catch((err) => {
                console.log('FORM FAILED');
                console.log(err);
            });

    }

    return (

        <AnimationRevealPage disabled>

            <Container>

                <Content>
                    {!isLoading ?

                        <MainContainer>

                            <Link to="/">
                                {/* <LogoLink href={logoLinkUrl}> */}
                                <LogoImage src={logo} />
                                {/* </LogoLink> */}
                            </Link>


                            <MainContent>

                                <Heading>{"Add A Project"}</Heading>

                                <FormContainer>

                                    <DividerTextContainer>
                                        <DividerText></DividerText>
                                    </DividerTextContainer>

                                    <Form onSubmit={handleSubmit(handleAddProject)}>

                                        <Input
                                            type="text"
                                            name="title"
                                            placeholder="Name of Video"
                                            ref={register({ required: true })}
                                        />

                                        {

                                            errors.title &&
                                            <>
                                                <Alert logo={Warning}>Email is required</Alert>
                                            </>

                                        }

                                        <Input
                                            type="text"
                                            name="description"
                                            placeholder="Description"
                                            ref={register({ required: true })}
                                        />

                                        {

                                            errors.description &&
                                            <>
                                                <Alert logo={Warning}>Description is required</Alert>
                                            </>

                                        }

                                        <Input
                                            type="text"
                                            name="genre"
                                            placeholder="Genre"
                                            ref={register({ required: true })}
                                        />

                                        <AddButton for="videoFile" className="custom-file-upload">
                                            + Click to Add Video
                                        </AddButton>

                                        <Input
                                            type="file"
                                            name="videoFile"
                                            id="videoFile"
                                            className="file-input"
                                            placeholder="Upload File"
                                            ref={register({ required: true })}
                                            onChange={onSelectFile}
                                        />

                                        {

                                            errors.videoFile &&
                                            <>
                                                <Alert logo={Warning}>Video is required</Alert>
                                            </>

                                        }


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
                                        >

                                            <SubmitIcon className="icon" />
                                            <span className="text">{"Submit Project"}</span>

                                        </SolidButton>

                                    </Form>

                                </FormContainer>

                            </MainContent>

                        </MainContainer>

                        :

                        <LoopCircleLoading />
                    }

                </Content>

            </Container>

        </AnimationRevealPage>
    );
};

export default ProjectPage;