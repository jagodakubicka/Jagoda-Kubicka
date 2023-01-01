import React from 'react'
import { Link } from "react-router-dom"
//img
// import pl from require('../about/img/pl.png')
// import uk from './img/uk.png'
// import jp from './img/jp.png'


//styles
import './styles/style.css'

export default function About() {
  return (
    <div className='about'>
      <div className="about__title">
        <h2>About me</h2>
      </div>
      <div className="about__content">
        <div className="about__me">
          <p>I am a self-taught front end developer and I'm looking forward to use my skills to help with your projects. </p>
          <p>I have BA in management and 3+ years of experience in marketing.</p>
          <p>Feel more than welcome to talk to me in</p>
          <div className="about__lang">
            <div className="about__langSingle">
              {/* <img src={pl} alt="Polish" /> */}
              <p>Polish</p>
            </div>
            <div className="about__langSingle">
              {/* <img src={uk} alt="English" /> */}
              <p>English</p>
            </div>
            <div className="about__langSingle">
              {/* <img src={jp} alt="Japanese" /> */}
              <p>Japanese</p>
            </div>
          </div>
        </div>
         <div className="about__desc">
          <h3>What I use to build stuff</h3>
          <div className="about__techStack">
            <div className="about__techSingle">HTML</div>
            <div className="about__techSingle">CSS</div>
            <div className="about__techSingle">SCSS</div>
            <div className="about__techSingle">JavaScript</div>
            <div className="about__techSingle">TypeScript</div>
            <div className="about__techSingle">React</div>
            <div className="about__techSingle">GSAP</div>
          </div>
          <div className="about__projects">
            <Link to="/projects">See my projects</Link>
          </div>
        </div>
       
      </div>
    </div>
  )
}
