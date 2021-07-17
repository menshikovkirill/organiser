import React from 'react';
import Slider from '../slider/slider';
import WrittableInput from '../writtable-input'

import './quickBlock.scss';

const QuickNotesHeader = ({name}) =>{
    return (
        <div className="quick-block-header">{name}</div>
    )
}

const QuickNotesBody = () =>{
    return (
        <div className="quick-block-body">
            <WrittableInput initialValue="Не следует, однако забывать, что консультация с широким активом в значительной степени обуславливает создание форм развития. Задача организации, в особенности же реализация намеченных плановых заданий представляет собой интересный эксперимент проверки систем"></WrittableInput>
        </div>
    )
}

const QuickTasksBody = () =>{
    return (
        <div className="quick-block-body">
            <p>Не следует, однако забывать, что консультация с широким активом в значительной степени обуславливает создание форм развития. Задача организации, в особенности же реализация намеченных плановых заданий представляет собой интересный эксперимент проверки систем</p>
        </div>
    )
}


class QuickNotes extends React.Component{
    render(){
        return (
            <div>
                <div className="quick-block">
                 <Slider header={<QuickNotesHeader name="Быстрые заметки"/>} 
                    body={<QuickNotesBody />}
                    isBodyVisible={true}></Slider>
                </div>
                <div className="quick-block">
                    <Slider header={<QuickNotesHeader name="Быстрые задачи"/>} 
                    body={<QuickNotesBody />}
                    isBodyVisible={true}></Slider>
                </div>
            </div>
            
        )
    }
}

export default QuickNotes;