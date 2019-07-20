import React, { Component } from 'react';
import Header from '../header/Header';
import Menu from '../Menu';
import LittleTask from '../tasks/LittleTask';

import TaskIcon from '../../static/img/vector-black-icon.svg';
import Recurrentes from '../../static/img/recurrentes.svg';
import Urgentes from '../../static/img/urgent-icon-black.svg';
import Prev from '../../static/img/prev-blue-icon.svg';

class PrevTask extends Component{
    render(){
        return(
            <React.Fragment>
                <Header name="Bonjour Benjamin" p="Voici toutes les tâches que" p2="vous pouvez réaliser"/>
                <h2>Tâches prévisionnelles</h2>
                <section id="prev-tasks">
                    <LittleTask price="40€" duration="20min"/>
                    <LittleTask price="40€" duration="20min"/>
                    <LittleTask price="40€" duration="20min"/>
                    <LittleTask price="40€" duration="20min"/>
                    <LittleTask price="40€" duration="20min"/>
                    <LittleTask price="40€" duration="20min"/>
                </section>
                <Menu home={TaskIcon} urg={Urgentes} rec={Recurrentes} prev={Prev}/>
            </React.Fragment>
        )
    }
} 

export default PrevTask