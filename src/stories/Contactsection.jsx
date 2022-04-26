import React from 'react'
import './Contactsection.css'
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai'


function Contactsection () {
  return(
    <div className="contact-section">
      <div className="contact-section-title">
        <h1>Contact</h1>
      </div>
      <div className="footer">
          <div className="footer-part">
              <a href="https://www.instagram.com/raiddes4monts/">
                <AiFillInstagram size={60} />
              </a>
              <a href="https://m.facebook.com/Raiddes4Monts/">
                <AiFillFacebook size={60} />
              </a>
          </div>
          <div className="footer-part">
              <h1>mail : raidut@assos.utc.fr</h1>
              <h1>tel. : 07.78.18.70.61</h1>
          </div>
    </div>
    </div>
  )
}

export default Contactsection
