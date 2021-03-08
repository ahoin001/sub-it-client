/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { useForm } from 'react-hook-form'
import axios from "axios";

import {
    SolidButton
} from '../Buttons/Buttons'

import {
    BackDrop,
    ModalContainer,
    Modal,
    ModalHeader,
    ModalHeaderTitle,
    ModalTextArea
} from './Modal-Style'

import {
    Container,
    Content,
    MainContainer,
    LogoImage,
    EditFormContent,
    Heading,
    FormContainer,
    DividerTextContainer,
    DividerText,
    Input
} from '../FormPageLayout/Form-Styles'

import { Form } from '../../pages/addproject/add-project-styles'

import {
    ButtonsContainer,
    ActionButton
} from '../Buttons/Buttons';

const ModalExample = (props) => {

    const { register, handleSubmit, errors } = useForm()

    const handleEditProject = async (formInputs) => {

        let { title, genre, description } = formInputs;

        // If user doesn't provide values use the most recent values

        title = title ? title : props.projectInfo.title
        genre = genre ? genre : props.projectInfo.genre
        description = description ? description : props.projectInfo.description

        const data = {
            title,
            description,
            genre
        }

        // console.log('******** UPDATE OBJECT:', data)

        try {

            await axios.put(`${process.env.REACT_APP_API_URL}projects/api/updateProject/${props.projectInfo.id}`, data);
            props.toggle(false)
            console.log('Edit success!')

        } catch (error) {
            console.log('FORM FAILED');
            console.log(error);
        }

    }

    return (

        <React.Fragment>

            <BackDrop >

                <ModalContainer>

                    <Modal>

                        <ModalHeader>

                            <ModalHeaderTitle>

                                {/* Nested Ternary For heading */}
                                {
                                    props.isForm ? '' :
                                        !props.isConfirmation ? 'Enter Subtitle' : 'Delete Project?'

                                }
                            </ModalHeaderTitle>


                        </ModalHeader>

                        {
                            !props.isConfirmation && !props.isForm ?
                                <ModalTextArea
                                    onChange={(e) => props.onChange(e)}
                                    name="subtitleToSave"
                                    id="this-sub-text"
                                >

                                </ModalTextArea> : ''
                        }

                        {
                            props.isForm &&

                            <EditFormContent>

                                <Heading>{"Edit Project Info"}</Heading>

                                <DividerTextContainer>
                                    <DividerText></DividerText>
                                </DividerTextContainer>

                                <form onSubmit={handleSubmit(handleEditProject)} style={{ marginTop: "-80px" }}>

                                    <Input
                                        type="text"
                                        name="title"
                                        placeholder={props.projectInfo.title}
                                        ref={register({ required: false })}
                                    />

                                    <Input
                                        type="text"
                                        name="description"
                                        placeholder={props.projectInfo.description}
                                        ref={register({ required: false })}
                                    />

                                    <Input
                                        type="text"
                                        name="genre"
                                        placeholder={props.projectInfo.genre}
                                        ref={register({ required: false })}
                                    />

                                    <SolidButton
                                        type="submit"
                                        primaryColor={"isGreen"}
                                    >

                                        <span className="text">{"Save Changes"}</span>

                                    </SolidButton>

                                    <SolidButton
                                        onClick={() => props.toggle(false)}
                                        primaryColor={"isRed"}
                                    >

                                        <span className="text">{"Cancel"}</span>

                                    </SolidButton>

                                </form>

                            </EditFormContent>

                        }

                        <footer>

                            <ButtonsContainer>

                                {

                                    props.isForm ? ''
                                        :
                                        !props.isConfirmation
                                            ?
                                            <React.Fragment>
                                                <ActionButton isRed onClick={() => props.toggle(false)}>
                                                    Cancel
                                                </ActionButton>

                                                <ActionButton isGreen onClick={() => props.saveSubtitle()}>
                                                    Save
                                                </ActionButton>
                                            </React.Fragment>
                                            :
                                            <React.Fragment>
                                                <ActionButton isRed onClick={() => props.deleteProject()}>
                                                    Delete
                                                </ActionButton>

                                                <ActionButton isGreen onClick={() => props.toggle(false)}>
                                                    Cancel
                                        </ActionButton>
                                            </React.Fragment>

                                }

                            </ButtonsContainer>

                        </footer>

                    </Modal>

                </ModalContainer>

            </BackDrop>


        </React.Fragment>

    );
}

export default ModalExample;