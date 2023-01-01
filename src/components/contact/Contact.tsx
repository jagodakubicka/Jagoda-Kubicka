import React from 'react'
import './styles/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
  return (
    <div className='contact'>
     <div className="contact__title">
      <h2>Contact</h2>
     </div>
     <div className="contact__container">
       
       <a href="mailto:jag.kubicka@gmail.com" className="contact__single">
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
        <p>jag.kubicka@gmail.com</p>
       </a>
     </div>
    </div>
  )
}
