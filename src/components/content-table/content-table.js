import React from 'react';

import './content-table.scss'

const ContentTable = ({header, body}) =>{
    header = header || [];
    return (
        <table>
            <thead>
                <tr className="title">
                    {header.map((thElem, ind) => <th key={ind}>{thElem}</th>)}
                </tr>
            </thead>
            <tbody>
                {body? body : ""}
            </tbody>
        </table>
    )
}

export default ContentTable;