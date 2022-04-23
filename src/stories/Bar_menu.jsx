import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'

import './Bar_menu.css'

import mountain from "./assets/mountain.svg"
import flag from "./assets/flag.svg"
import bike from "./assets/bike.svg"

function Bar_menu () {

  return(
      <div className="div_menu" id="div_menu">
        <Link
        activeClass="active"
        to="event-section"
        spy
        smooth
        offset={0}
        duration={500}
        className="section-name"
        >
          <h1>Evènement</h1>
        </Link>
        <Link
        activeClass="active"
        to="association-section"
        spy
        smooth
        offset={0}
        duration={500}
        className="section-name"
        >
          <h1>L'association</h1>
        </Link>
        <Link
        activeClass="active"
        to="FAQ-section"
        spy
        smooth
        offset={0}
        duration={500}
        className="section-name"
        >
          <h1>FAQ</h1>
        </Link>
        <Link
        activeClass="active"
        to="Partenaires-section"
        spy
        smooth
        offset={0}
        duration={500}
        className="section-name"
        >
          <h1>Partenaires</h1>
        </Link>
      </div>
  )
}


export default Bar_menu
