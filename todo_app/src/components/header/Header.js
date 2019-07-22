import React, { Component } from 'react'
import CardHeader from './Card-header'
import Button from '../button/Button';

import LogoUser from '../../static/img/profil-svg.svg';
import Arrow from '../../static/img/V.svg';
import TaskIlu from '../../static/img/Taskilu.png';

class Header extends Component {
    render(){
        let header = this.props
        return(
            <header>
                <div className="flex-container-header">
                    <div>
                        <h1>{header.name}</h1>
                        <br/>
                        <p>{header.p}<br/>{header.p2}</p>
                    </div>
                    <img src={LogoUser} alt="LogoUser"/>
                </div>
                <CardHeader>
                    <img id="TaskIlu" src={TaskIlu} alt="TaskIlu"></img>
                    <div>
                        <p>Ici celles que vous avez <br/>acceptées</p>
                        <Button>
                            <div className="circle"><p>3</p></div>
                            <p>Tâches</p>
                            <img src={Arrow} alt="Arrow"/>
                        </Button>
                    </div>
                </CardHeader>
            </header>
        )
    }
}

export default Header