/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';

import {
    ModalContainer,
    Modal,
    ModalHeader,
    ModalHeaderTitle,
    ModalContent
} from './Modal-Style'

// import moduleName from '../../shared/'

import { Button } from 'reactstrap';

const ModalExample = (props) => {

    return (

        <React.Fragment>

            <ModalContainer>

                <Modal>

                    {/* <!-- Header --> */}

                    <ModalHeader>

                        <ModalHeaderTitle>
                            Enter Subtitle
                        </ModalHeaderTitle>


                    </ModalHeader>

                    {/* <!--Header End--> */}

                    {/* <!-- Modal Content--> */}

                    <ModalContent>
                        This is a text inside the modal. You can add your content here.
                    </ModalContent>

                    {/* <!-- End of Modal Content--> */}

                    <footer>
                        <Button color="primary" onClick={() => props.saveSubtitle()}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={() => props.toggle()}>Cancel</Button>
                    </footer>

                </Modal>

            </ModalContainer>
                    

        </React.Fragment>

    );
}

export default ModalExample;