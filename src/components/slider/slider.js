import React from 'react';

import './slider.scss'

class Slider extends React.Component{
    constructor(props){
        super(props);
        this.state = {isBodyVisible: this.props.isBodyVisible};
        this.onToggleBody = this.onToggleBody.bind(this);
    }

    onToggleBody(e){
        e.preventDefault()
        e.stopPropagation();
        this.setState({isBodyVisible: !this.state.isBodyVisible});
    }
    
    render(){
        return (
            <div>
                <div className="header" onClick={this.onToggleBody}> {this.props.header}</div>
                {this.state.isBodyVisible? <div className="body">{this.props.body}</div>: ""}
            </div>
        )
    }
}

export default Slider;