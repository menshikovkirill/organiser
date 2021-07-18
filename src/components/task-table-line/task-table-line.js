import React from 'react';
import WrittableInput from '../writtable-input';

import './task-table-line.scss';

const CircleTableElem = ({isClicked}) =>{
    return (
        <div className={isClicked? "circle crossed": "circle"}></div>
    )
};

class TaskTableLine extends React.Component{
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
                <td style={{width:250}}><WrittableInput initialValue={elem.task}/></td>
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

export default TaskTableLine;