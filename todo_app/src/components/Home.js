import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

import Header from './header/Header';

class Home extends Component{
    render(){
        return(
            <React.Fragment>
                <Header name="Bonjour Benjamin" p="Voici toutes les tâches que" p2="vous pouvez réaliser"/>
                <Link to="/tasks" title="Lien vers la page Tasks">
                    Lien vers tasks
                </Link>
            </React.Fragment>
        )
    }
}

export default Home 