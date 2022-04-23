import React, { useState } from 'react'
import './Accordion.css'

function Accordion(props){
  const [isActive, setIsActive] = useState(false);

  return(
    <div className="accordion">
      <div className="accordion-item">
        <div
          className="accordion-title"
          onClick={() => setIsActive(!isActive)}
        >
          <div> {props.question}</div>
          <div>{isActive ? '-' : '+'}</div>
        </div>
        {isActive && <div className="accordion-content">{props.response}</div>}
      </div>
    </div>
  )
}

export default Accordion
