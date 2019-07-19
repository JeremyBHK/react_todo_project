import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import Header from './header/Header';
// import Task from './tasks/Task';
import Swiper from './Swiper';

class Home extends Component{
    render(){
        return(
            <React.Fragment>
                <Header name="Bonjour Benjamin" p="Voici toutes les tâches que" p2="vous pouvez réaliser"/>
                <h2>Les tâches urgentes</h2>
                <section>
                    {/* <Task /> */}
                    <Swiper />
                </section>
                {/* <Link to="/tasks" title="Lien vers la page Tasks">
                    Lien vers la page des tâches
                </Link> */}
            </React.Fragment>
        )
    }
}

export default Home