import React from 'react';
import Slider from '../slider';
// import {TaskLine} from '../task-line';
import TaskTableLine from '../task-table-line'
import ContentTable from '../content-table';

import './body-sheulder.scss';

const DayHeader = ({name, isDayNow, onClick}) => {
    return (
        <div className="day-header">
            <div className="name" onClick={onClick}><p>{name}</p></div>
            {isDayNow? <div className="now">сегодня</div> : ""}
        </div>
    )
};

const TaskContent = ({data, isBodyVisible, isDayNow}) => {
    return (
        <div className="day-body">
            <ContentTable 
                header={["", "Задача", "Группа", "Время"]}
                body={<TaskTableLine data={data}/>}/>
        </div>
    );
};

const WeekDayContent = ({data, isDayNow, name}) =>{
    data = data || [];
    return (
        <div className="day-content">
            <Slider 
                header={ <DayHeader name={name} isDayNow={isDayNow} />}
                body={<TaskContent data={data} isDayNow={isDayNow}/>}
                isBodyVisible={data.isVisible}
            >
            </Slider>
        </div>
    );
};

class BodySheulder extends React.Component{
    render(){
        let dayName = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
        return (
            <div>
                {dayName.map((elem, ind) => {
                    let data = this.props.data[ind] ? this.props.data[ind] : [];
                    data.isVisible = false;

                    if(ind == 0)//ajax
                        data.isVisible = true;

                    return  <WeekDayContent key={ind} name={elem} data={data}/>
                })}
            </div>
        );
    }
}

export default BodySheulder;