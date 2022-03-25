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
      <div className="container">
        <h1>Village associatif</h1>
        <br/>
        <ul>
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
      <div className="container">
        <h1>Une soirée</h1>
        <br/>
        <ul>
        <li>
          Un concert
        </li>
        <li>
          Des artistes
        </li>
        <li>
          Bar/Snack
        </li>
        </ul>
      </div>
    </div>
    <div className="container descriptif">
    <h1>Descriptif du parcours</h1>
    </div>
  </div>
)
}

export default Eventsection
