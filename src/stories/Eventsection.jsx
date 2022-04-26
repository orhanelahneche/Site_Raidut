import React from 'react'
import './Eventsection.css'
import Descriptif_parcours_difficile from './assets/Descriptif_parcours_difficile.svg'

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
                De multiples épreuves : VTT, Trail, Tir à la carabine
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
  </div>
)
}

export default Eventsection
