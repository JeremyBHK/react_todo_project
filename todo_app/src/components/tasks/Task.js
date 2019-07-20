import React, { Component } from 'react';
import Urgent from '../../static/img/urgentes.svg';
import Pin from '../../static/img/Subtract.svg';

class Task extends Component{
    render(){
        return(
            <article className="component-task">
                <div className="img-task">
                    <p className="price-task">7€</p>
                </div>
                <div>
                    <p className="date-time">15 juin <br/>12h30</p>
                    <div className="duration">
                        <img src={Pin} alt="Pin de localisation"/>
                        <p>À 5 minutes</p>
                    </div>
                </div>
                <div>
                    <p>Durée <br/><span>40min</span></p>
                    <img src={Urgent} alt="icon urgent" />
                </div>
            </article>
        )
    }
}

export default Task