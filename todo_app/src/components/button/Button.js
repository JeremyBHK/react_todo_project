import React, { Component } from 'react';

class Button extends Component{
    render(){
        let button = this.props
        return(
            <button id="button-card-header">
                {button.children}
            </button>
        )
    }

}

export default Button