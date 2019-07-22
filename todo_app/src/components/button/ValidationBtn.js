import React, { Component } from 'react'

class ValidationBtn extends Component{
    render(){
        return(
            <input className="valid-btn" type="submit" value={this.props.value} />
        )
    }
}

export default ValidationBtn