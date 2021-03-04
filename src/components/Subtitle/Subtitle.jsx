import React, { useState } from 'react';

import { TableData } from '../../shared/Table/Table-Styles'

import {
    ButtonsContainer,
    ActionButton
} from '../../shared/Buttons/Buttons'

import { FormInput } from './Subtitle.styles'
// import { StyledHeader } from './navbar.styled'

const Subtitle = ({ Subtitle, onDeleteClick, onSaveEdit, refreshTable }) => {

    const [showEditInputs, setShowEditInputs] = useState(false);

    const [formInputs, setFormInputs] = useState({
        text: Subtitle.text,
        inTimeVTT: Subtitle.inTimeVTT,
        outTimeVTT: Subtitle.outTimeVTT
    })

    const genericSync = (event) => {
        const { name, value } = event.target;
        setFormInputs({ ...formInputs, [name]: value })
    }


    let tableData;

    showEditInputs
        ? tableData =
        <React.Fragment>

            <TableData isEdit>

                <div>

                    <FormInput
                    type="text"
                    name="text"
                    onChange={(e) => genericSync(e)}
                    value={formInputs.text}
                    className="editSub"
                />

                </div>

            </TableData>


            <TableData>

                <FormInput 
                    type="text"
                    onChange={(e) => genericSync(e)}
                    value={formInputs.inTimeVTT}
                    name="inTimeVTT"
                    className="editSub"
                />

            </TableData>


            <TableData>
                <p>
                    <FormInput 
                        type="text"
                        onChange={(e) => genericSync(e)}
                        value={formInputs.outTimeVTT}
                        name="outTimeVTT"
                        className="editSub"
                    />
                </p>
            </TableData>

            <TableData>

                <ButtonsContainer>

                    <ActionButton
                        isGreen
                        onClick={() => onSaveEdit(Subtitle, formInputs, setShowEditInputs)}
                    >
                        Save
                    </ActionButton>

                    <ActionButton
                        isRed
                        onClick={() => onDeleteClick(Subtitle.id)}
                    >
                        Delete
                    </ActionButton>

                </ButtonsContainer>

            </TableData>


        </React.Fragment>

        : tableData =
        <React.Fragment>

            <TableData>

                <div className="text">

                    {
                        Subtitle.text ?
                            Subtitle.text :
                            'Error Adding this subtitle'
                    }

                </div>

            </TableData>

            <TableData>

                <div className="inTime">
                    {
                        Subtitle.inTime ?
                            Subtitle.inTimeVTT :
                            'In Time Will Be Here'
                    }
                </div>

            </TableData>

            <TableData>

                <div className="outTime">
                    {
                        Subtitle.outTime ?
                            Subtitle.outTimeVTT :
                            'Out Time Will Be Here'
                    }
                </div>

            </TableData>

            <TableData>

                <ButtonsContainer>

                    <ActionButton isEdit
                        onClick={() => setShowEditInputs(true)}
                    >
                        Edit
                    </ActionButton>

                    <ActionButton
                        isRed
                        onClick={() => onDeleteClick(Subtitle.id)}
                    >
                        Delete
                    </ActionButton>

                </ButtonsContainer>

            </TableData>

        </React.Fragment>

    return (
        <tr className="each-sub">

            {tableData}

        </tr>
    );
};

export default Subtitle;