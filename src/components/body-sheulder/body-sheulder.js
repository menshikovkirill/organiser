import React from 'react';
import Slider from '../slider';
import ContentTable from '../content-table';
import WrittableInput from '../writtable-input';

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

const CircleTableElem = ({isClicked}) =>{
    return (
        <div className={isClicked? "circle crossed": "circle"}></div>
    )
}

class TaskLine extends React.Component{
    constructor(props){
        super(props);
        this.crosedLine = this.crosedLine.bind(this);

        this.state = {isCrossedLineArray: new Array(this.props.data.length)}
    }
    
    crosedLine(ind){
        let oldArray = this.state.isCrossedLineArray;
        oldArray[ind] = !oldArray[ind];
        this.setState({isCrossedLineArray: oldArray});
        //add AJAX query
    }
    
    render(){
        let list = this.props.data.map((elem, ind) =>{
            return (<tr key={ind} className={this.state.isCrossedLineArray[ind]? "crossed": ""}>
                <td onClick={() => this.crosedLine(ind)}><CircleTableElem isClicked={this.state.isCrossedLineArray[ind]}/></td>
                <td><WrittableInput initialValue={elem.task}/></td>
                <td className="group">{elem.group}</td>
                <td>{elem.time}</td>
            </tr>)
        });
        return (
           <>
            {list}
           </>
        )
    }
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