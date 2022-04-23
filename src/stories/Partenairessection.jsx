import React from 'react'
import './Partenairessection.css'
import CDF from './assets/CDF.jpg'
import bde from './assets/bde.png'
import Lydia from './assets/Lydia.png'
import artisants from './assets/artisants_du_running.webp'
import HDF from './assets/Logo_Region_HDF.jpg'
import my_room from './assets/logo-Compiegne.jpg'
import Compi from './assets/LOGO-Myroom.png'


function Partenairessection () {
  return(
    <div className="Partenaires-section">
      <div className="Partenaires-section-title">
        <hr></hr>
        <h1>Partenaires</h1>
        <hr></hr>
      </div>
      <div className="Partenaires-section-content">
        <div className="Partenaires-container-row">
            <div className="Partenaires-container">
               <img width="100%" height="100%" src={CDF} alt="CDF" />
            </div>
            <div className="Partenaires-container">
                <img width="100%" height="100%" src={bde} alt="bde" />
            </div>
            <div className="Partenaires-container">
                <img width="150%" height="150%" src={Lydia} alt="bde" />
            </div>
            <div className="Partenaires-container">
                <img width="150%" height="150%" src={artisants} alt="bde" />
            </div>
        </div>
        <div className="Partenaires-container-row">
          <div className="Partenaires-container">
             <img width="100%" height="100%" src={HDF} alt="CDF" />
          </div>
          <div className="Partenaires-container">
              <img width="100%" height="100%" src={my_room} alt="bde" />
          </div>
          <div className="Partenaires-container">
              <img width="150%" height="150%" src={Compi} alt="bde" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partenairessection
