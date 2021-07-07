import React from 'react';
import Slider from '../slider';
import ContentTable from '../content-table';
import TaskLine from './task-line';

import './body-sheulder.scss';

const DayHeader = ({name, isDayNow, onClick}) => {
    return (
        <div className="day-header">
            <div className="name" onClick={onClick}><p>{name}</p></div>
            {isDayNow? <div className="now">сегодня</div> : ""}
        </div>
    )
}

const TaskContent = ({data, isBodyVisible, isDayNow}) => {
    return (
        <div className="day-body">
            <ContentTable 
                header={["", "Задача", "Группа", "Время"]}
                body={<TaskLine data={data}/>}/>

        </div>
    )
}

const WeekDayContent = ({data, isDayNow, name}) =>{
    data = data || [];
    return (
        <div className="day-content">
            <Slider 
                header={ <DayHeader name={name} isDayNow={isDayNow} />}
                body={<TaskContent data={data} isDayNow={isDayNow}/>}
                isBodyVisible={true}
            >
            </Slider>
        </div>
    );
}

class BodySheulder extends React.Component{
    render(){
        let dayName = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
        return (
            <div>
                {dayName.map((elem, ind) => {
                    let data = this.props.data[ind] ? this.props.data[ind] : [];
                    return  <WeekDayContent key={ind} name={elem} data={data}/>
                })}
            </div>
        );
    }
}

export default BodySheulder;