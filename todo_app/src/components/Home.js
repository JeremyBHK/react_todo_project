import React, { Component } from 'react'
import Header from './header/Header'
import LittleTask from './tasks/LittleTask'
import Swiper from './Swiper'
import Menu from './Menu'

import TaskIcon from '../static/img/Vector.svg'
import Urgentes from '../static/img/urgent-icon-black.svg'
import Recurrentes from '../static/img/recurrentes.svg'
import Prev from '../static/img/prev.svg'

class Home extends Component{
    render(){
        return(
            <React.Fragment>
                <Header name="Bonjour Benjamin" p="Voici toutes les tâches que" p2="vous pouvez réaliser"/>
                <h2>Les tâches urgentes</h2>
                <section>
                    <Swiper />
                </section>
                <h2>Toutes les tâches</h2>
                <section id="all-tasks">
                    <div>
                        <LittleTask price="40€" duration="20min"/>
                        <LittleTask price="5€" duration="10min"/>
                        <LittleTask price="10€" duration="10min"/>
                        <LittleTask price="20€" duration="30min"/>
                        <LittleTask price="8€" duration="5min"/>
                        <LittleTask price="7€" duration="5min"/>
                    </div>
                </section>
                <Menu home={TaskIcon} urg={Urgentes} rec={Recurrentes} prev={Prev}/>
            </React.Fragment>
        )
    }
}

export default Home