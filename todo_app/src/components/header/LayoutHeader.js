import React from 'react'
import { Link } from 'react-router-dom'
import Arrow from '../../static/img/arrow-toleft.svg'

const LayoutHeader = () => {
    return (
      <React.Fragment>
        <header className="LayoutHeader">
          <div className="layoutTitle">
          <Link to="/" title="Lien vers la page Home">
          <img src={Arrow} alt="Arrow to left" />
          </Link>
            <h1>Bouquet de fleurs</h1>
          </div>
          <div className="layoutContent">
            <p>15 Juin 2019</p>
            <p className="rounded">12:30</p>
          </div>
        </header>
      </React.Fragment>
    )
}

export default LayoutHeader