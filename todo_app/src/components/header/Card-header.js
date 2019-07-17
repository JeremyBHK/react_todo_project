import React, { Component } from 'react';
import Button from '../button/Button';
import Arrow from '../../static/img/V.svg';

class CardHeader extends Component{
    render(){
        return(
            <div id="card-header">
                <img src="" alt=""></img>
                <p>Ici celles que vous avez <br/>acceptées</p>
                <Button>
                    <div className="circle"><p>1</p></div>
                    <p>Tâches</p>
                    <img src={Arrow} alt="Arrow"/>
                </Button>
            </div>
        )
    }
}

export default CardHeader