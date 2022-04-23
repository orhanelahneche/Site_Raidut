import React from 'react'
import './Eventsection.css'

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
                Evènement sportifs
              </li>
              <li>
                De multiples épreuves : VTT, Trail, Tir à la carabine
              </li>
              <li>
                En équipe
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
              Gratuit
            </li>
            <li>
              Des animations
            </li>
            <li>
              Des associations
            </li>
            <li>
              Un espace de restauration
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
