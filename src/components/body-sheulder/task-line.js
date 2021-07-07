import React from 'react';
//TODO
const CircleTableElem = ({isActive}) =>{
    return (
        <span className={isActive? "circle crossed": "circle"}></span>
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
        this.setState({isCrossedLineArray: oldArray})
    }
    render(){
        let list = this.props.data.map((elem, ind) =>{
            return (<tr key={ind} className={this.state.isCrossedLine? "crossed": ""}>
                <td><CircleTableElem onClick={(ind) => this.crosedLine(ind)} /></td>
                <td>{elem.task}</td>
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

export default TaskLine;
