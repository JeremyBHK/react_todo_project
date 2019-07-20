import React, { Component } from 'react';
import Header from '../header/Header';
import Menu from '../Menu';
import Task from './Task';

import TaskIcon from '../../static/img/vector-black-icon.svg';
import Urgentes from '../../static/img/urgentes-blue-icon.svg';
import Recurrentes from '../../static/img/recurrentes.svg';
import Prev from '../../static/img/prev.svg';

class UrgentTask extends Component{
    render(){
        return(
            <React.Fragment>
                <Header name="Bonjour Benjamin" p="Voici toutes les tâches que" p2="vous pouvez réaliser"/>
                <h2>Tâches urgentes</h2>
                <section id="urg-tasks">
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                </section>
                <Menu home={TaskIcon} urg={Urgentes} rec={Recurrentes} prev={Prev}/>
            </React.Fragment>
        )
    }
} 

export default UrgentTask