import React, { Component } from 'react';
import Urgent from '../../static/img/urgentes.svg';
// import Pin from '../../static/img/Subtract.svg';

class LittleTask extends Component{
    render(){
        let littleTask = this.props
        return(
            <article className="component-task little-task">
                <div className="img-task">
                    <p className="price-task">{littleTask.price}</p>
                </div>
                <div>
                    <p>Durée <br/><span>{littleTask.duration}</span></p>
                    <img src={Urgent} alt="icon urgent" />
                </div>
            </article>
        )
    }
}

export default LittleTask