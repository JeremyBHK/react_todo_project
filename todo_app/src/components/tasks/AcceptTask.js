import React from 'react'
import LayoutHeader from '../header/LayoutHeader'
import Timeline from '../../static/img/timeline.svg'
import Swiper from '../Swiper'
import MicroTask from './MicroTask'

const AcceptTask = () => {
  return(
    <React.Fragment>
      <LayoutHeader></LayoutHeader>
      <section className="livraisonInfo">
        <div className="line">
          <img src={Timeline} alt="timeline" />
        </div>
        <div className="line">
          <article>
            <h2>Lieu de Retrait:</h2>
            <p>
              <span>Interflora</span>
              13 Rue Saint Leonard<br />
              77350 Melun
            </p>
          </article>
          <article>
            <h2>Lieu de Livraison:</h2>
            <p>
              <span>Chez Eveline</span>
              40 Rue de l'Oliver<br />
              77350 Melun
            </p>
          </article>
        </div>
      </section>
      <section className="livraisonDesc">
        <div>
          <h2>Quelques mots du client :</h2>
          <p>
          Bonjour,<br />
          J’aurais besoin d’un bouquet de fleurs pour 12h30 à l’adresse indiqué ...
          </p>
        </div>
      </section>
      <section>
        <Swiper
          task={<MicroTask name="Distances du parcours" info="2,5 km" />}
         />
      </section>
    </React.Fragment>

  )
}

export default AcceptTask