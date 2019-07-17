import React, { Component } from 'react';
import Button from '../button/Button';
import Arrow from '../../static/img/V.svg';
import TaskIlu from '../../static/img/Taskilu.png';

class CardHeader extends Component{
    render(){
        return(
            <div id="card-header">
                <img id="TaskIlu" src={TaskIlu} alt="TaskIlu"></img>
                <div>
                    <p>Ici celles que vous avez <br/>acceptées</p>
                    <Button>
                        <div className="circle"><p>3</p></div>
                        <p>Tâches</p>
                        <img src={Arrow} alt="Arrow"/>
                    </Button>
                </div>
            </div>
        )
    }
}

export default CardHeader