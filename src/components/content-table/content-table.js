import React from 'react';
import PopUpLayer from '../popUpLayer'
import SheulderForm from '../sheulder-form'
import './content-table.scss'

const ContentTable = ({header, body}) =>{
    header = header || [];
    body = body || [];
    return (
        <>
            <table className="content-table">
                <thead>
                    <tr className="title">
                        {header.map((thElem, ind) => <th key={ind}>{thElem}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {body}
                </tbody>
            </table>
            <PopUpLayer buttonText="Новый"><SheulderForm /></PopUpLayer>
        </>
    )
}

export default ContentTable;