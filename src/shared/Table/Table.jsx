import React from 'react';
import "twin.macro";

import {
    SubtitleTable,
    TableBody,
    TableHeader
} from './Table-Styles'

const Table = (props) => {
    return (

        <div className="antialiased font-sans 
                      bg-gray-200
                      ">

            {/* <div className="lg:container mx-auto px-2 overflow-auto sm:px-8"> */}

                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4">

                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">

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

                        </div>
            
                    </div>
            
 
            
            {/* </div> */}

        </div>
    );
};

export default Table;