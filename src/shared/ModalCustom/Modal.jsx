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
                                Enter Subtitle
                            </ModalHeaderTitle>


                        </ModalHeader>

                        <ModalContent
                            onChange={(e) => props.onChange(e)}
                            name="subtitleToSave"
                            id="this-sub-text"
                        >

                        </ModalContent>

                        <footer>

                            <ButtonsContainer>

                                <ActionButton isDelete onClick={() => props.toggle(false)}>
                                    Cancel
                                </ActionButton>

                                <ActionButton isSave onClick={() => props.saveSubtitle()}>
                                    Save
                                </ActionButton>

                            </ButtonsContainer>

                        </footer>

                    </Modal>

                </ModalContainer>

            </BackDrop>


        </React.Fragment>

    );
}

export default ModalExample;