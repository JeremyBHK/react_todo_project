import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SwitchBtn from '../static/img/switch-button.svg';

class Menu extends Component{
    render(){
        let menu = this.props
        return(
            <nav>
                <img id="switchBtn" src={SwitchBtn} alt="Switch button"/>
                <div>
                    <div className="fixWidth">
                        <div className="flex-column container-icon">
                            <Link to="/" title="Lien vers la page Home">
                                <img src={menu.home} alt="icon menu"/>
                            </Link>
                        </div>
                    </div>
                    <div className="fixWidth">
                        <div className="flex-column container-icon">
                            <Link to="/urgent-tasks" title="Lien vers la page des tâches urgentes">
                                <img src={menu.urg} alt="icon menu"/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="fixWidth margeR15">
                        <div className="flex-column container-icon">
                            <Link to="/recurrent-tasks" title="Lien vers la page des tâches récurrentes">
                                <img src={menu.rec} alt="icon menu"/>
                            </Link>
                        </div>
                    </div>
                    <div className="fixWidth margeR15">
                        <div className="flex-column container-icon">
                            <Link to="/forecast-tasks" title="Lien vers la page des tâches prévisionnelles">
                                <img src={menu.prev} alt="icon menu"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Menu