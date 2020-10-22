/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    return (
        <div>
            {/* <Button color="danger" onClick={() => props.toggle()}>{buttonLabel}</Button> */}

            <Modal
                isOpen={props.Visible}
                toggle={() => props.toggle()}
                className={className}
                centered
                
                >

                <ModalHeader toggle={() => props.toggle()} >Enter Subtitle For This Segment</ModalHeader>

                <ModalBody>
                    <textarea
                        onChange={(e) => props.onChange(e)}
                        name="subtitleToSave"
                        id="this-sub-text"
                        rows="10"
                        cols="50"
                        maxLength="80"

                    />


                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={() => props.saveSubtitle()}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={() => props.toggle()}>Cancel</Button>
                </ModalFooter>

            </Modal>

        </div>
    );
}

export default ModalExample;