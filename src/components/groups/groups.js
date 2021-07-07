import React from 'react';
import GroupItem from './group-item';

//join with day-content to one component
class Groups extends React.Component{
    render(){
        let list = this.props.groupData.map((elem, ind) =>{
            return <GroupItem name={elem.name} />
        });
        return (
            <div className="group-list">
                {list}
            </div>
        )
    }
}

export default Groups;