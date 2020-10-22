import React, { useState } from 'react';

import {
    TableData,
    ActionsContainer,
    ActionButton

} from '../../shared/Table/Table-Styles'

import { FormInput } from './Subtitle-styles'

// !!!!!! CHECK GITHUB TO GET FORMINPUT STYLE


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

            <TableData>

                <div>

                    <textarea
                        onChange={(e) => genericSync(e)}
                        value={formInputs.text}
                        name="text"
                        className="editSub" >

                    </textarea>

                </div>

            </TableData>


            <TableData>

                <FormInput type="text"
                    type="text"
                    onChange={(e) => genericSync(e)}
                    value={formInputs.inTimeVTT}
                    name="inTimeVTT"
                    className="editSub"
                />

            </TableData>


            <TableData>
                <p>
                    <FormInput type="text"
                        type="text"
                        onChange={(e) => genericSync(e)}
                        value={formInputs.outTimeVTT}
                        name="outTimeVTT"
                        className="editSub"
                    />
                </p>
            </TableData>

            <TableData>

                <ActionsContainer>

                    <ActionButton
                        isSave
                        onClick={() => onSaveEdit(Subtitle, formInputs, setShowEditInputs)}
                    >
                        Save
                    </ActionButton>

                    <ActionButton
                        isDelete
                        onClick={() => onDeleteClick(Subtitle.id)}
                    >
                        Delete
                    </ActionButton>

                </ActionsContainer>

            </TableData>


        </React.Fragment>

        : tableData =
        <React.Fragment>

            <TableData>

                <div className="text">

                    {
                        Subtitle.text ?
                            Subtitle.text :
                            'Subtitle Text Should be Here'
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

                <ActionsContainer>

                    <ActionButton isEdit
                        onClick={() => setShowEditInputs(true)}
                    >
                        Edit
                    </ActionButton>

                    <ActionButton
                        isDelete
                        onClick={() => onDeleteClick(Subtitle.id)}
                    >
                        Delete
                    </ActionButton>

                </ActionsContainer>

            </TableData>

        </React.Fragment>

    return (
        <tr className="each-sub">

            {tableData}

        </tr>
    );
};

export default Subtitle;