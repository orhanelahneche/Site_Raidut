import React from 'react'
import './Associationsection.css'

function Associationsection () {
  return(
  <div className="association-section">
    <div className="association-section-title">
      <hr></hr>
      <h1>L'association</h1>
      <hr></hr>
    </div>
    <div className="association-section-content">
      <div className="container_asso">
        <div className="description">
          <p>Raid’UT est une association créée en 2020, elle regroupe plus de <b>30 étudiants bénévoles</b> et dépend du BDE de l’UTC. Chaque année, l’association organise un <b>raid multisports</b> dans la <b>forêt de Compiègne</b>. L’objectif est de promouvoir la pratique sportive auprès du plus grand nombre tout en gardant un esprit festif.</p>
          <p>L’association s’engage à développer un événement qui s’inscrit dans une <b>démarche soutenable et caritative</b>. En effet, le Raid des 4 Monts est partenaire de l’association Cœur de Forêt, un <b>don</b> leur sera versé pour les aider dans leur action de préservation des forêts.</p>
        </div>
      </div>
    </div>
  </div>
)
}

export default Associationsection
