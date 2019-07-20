import React, { Component } from 'react'
import LogoUser from '../../static/img/profil-svg.svg'
import CardHeader from './Card-header'

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
                <CardHeader />
            </header>
        )
    }
}

export default Header