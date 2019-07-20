import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import Header from './header/Header';
import LittleTask from './tasks/LittleTask';
import Swiper from './Swiper';

class Home extends Component{
    render(){
        return(
            <React.Fragment>
                <Header name="Bonjour Benjamin" p="Voici toutes les tâches que" p2="vous pouvez réaliser"/>
                <h2>Les tâches urgentes</h2>
                <section>
                    <Swiper />
                </section>
                {/* <Link to="/tasks" title="Lien vers la page Tasks">
                    Lien vers la page des tâches
                </Link> */}
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
            </React.Fragment>
        )
    }
}

export default Home