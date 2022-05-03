import React from 'react'
import './Eventsection.css'
import Descro_difficile from './assets/Descriptif_parcours_difficile1.png'
import Descro_intermediaire from './assets/Descriptif_parcours_intermediaire1.png'
import Descro_facile from './assets/Descriptif_parcours_facile1.png'


function Eventsection () {
  return(
  <div className="event-section">
    <div className="event-section-title">
      <hr></hr>
      <h1>L'évènement</h1>
      <hr></hr>
    </div>
    <div className="envent-section-content">
      <div className="container">
        <div className="container_inner">
          <div className="container_front back_Raid"></div>
          <div className="container_back">
            <h1>Le raid</h1>
            <br/>
            <ul>
              <li>
                Évènement sportif
              </li>
              <li>
                De multiples épreuves : VTT, Trail, Tir à l'arc
              </li>
              <li>
                En équipes
              </li>
              <li>
                Dans la forêt de Compiègne
              </li>
            </ul>
            </div>
        </div>
      </div>
      <div className="container">
        <div className="container_inner">
          <div className="container_front back_village"></div>
          <div className="container_back">
            <h1>Village associatif</h1>
            <br/>
            <ul>
            <li>
              Ouvert à toutes et à tous GRATUITEMENT
            </li>
            <li>
              De nombreuses animations
            </li>
            <li>
              Des concerts
            </li>
            <li>
              Des compétitions fun
            </li>
            <li>
              Un espace restauration, buvette et de détente
            </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="descriptif">
      <h1>Description</h1>
        <div className="descriptif_parcours">
          <div className="nom_epreuve"><b>La promenade du château</b></div>
          <img width="50%" height="50%" src={Descro_facile} alt="bde" />
        </div>
        <div className="descriptif_parcours">
          <div className="nom_epreuve"><b>L’aventure des Beaux-Monts</b></div>
          <img width="50%" height="50%" src={Descro_intermediaire} alt="bde" />
        </div>
        <div className="descriptif_parcours">
          <div className="nom_epreuve"><b>L’épreuve des 4 Monts</b></div>
          <img width="50%" height="50%" src={Descro_difficile} alt="bde" />
        </div>
    </div>
  </div>
)
}

export default Eventsection
