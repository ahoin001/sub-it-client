import React from 'react';
import "twin.macro";

import {
    SubtitleTable,
    // TableHeadRow,
    TableBody,
    TableHeader
} from './Table-Styles'

const Table = (props) => {
    return (

                    <SubtitleTable>

                        <thead>

                            <tr>

                                <TableHeader>
                                    Subtitle
                                        </TableHeader>

                                <TableHeader>
                                    In Time
                                        </TableHeader>

                                <TableHeader>
                                    Out Time
                                        </TableHeader>

                                <TableHeader>
                                    Actions
                                        </TableHeader>

                            </tr>

                        </thead>

                        <TableBody>

                            {/* // **** Add new Rows from Props */}
                            {props.children}

                        </TableBody>

                    </SubtitleTable>

    );
};

export default Table;