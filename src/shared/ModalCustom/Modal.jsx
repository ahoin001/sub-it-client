/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';

import {
    BackDrop,
    ModalContainer,
    Modal,
    ModalHeader,
    ModalHeaderTitle,
    ModalContent
} from './Modal-Style'

// import moduleName from '../../shared/'

import {
    ButtonsContainer,
    ActionButton
} from '../Buttons/Buttons';

const ModalExample = (props) => {

    return (

        <React.Fragment>

            <BackDrop >

                <ModalContainer>

                    <Modal>

                        <ModalHeader>

                            <ModalHeaderTitle>
                                {

                                    !props.isConfirmation ? 'Enter Subtitle' : 'Delete this project?'

                                }
                            </ModalHeaderTitle>


                        </ModalHeader>

                        {
                            !props.isConfirmation &&
                            <ModalContent
                                onChange={(e) => props.onChange(e)}
                                name="subtitleToSave"
                                id="this-sub-text"
                            >

                            </ModalContent>
                        }


                        <footer>

                            <ButtonsContainer>

                                {!props.isConfirmation
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