import React from 'react';
import { Link } from 'react-router-dom';
import { Door } from '../door/Door';
import { useScroll, useTransform, motion } from 'framer-motion';
//img
import pl from './img/pl.png';
import uk from './img/uk.png';
import jp from './img/jp.png';

//styles
import './styles/style.css';

export default function About() {
  const { scrollY } = useScroll();
  const leftDoorX = useTransform(scrollY, [0, 800], ['0vw', '-100vw']);
  const rightDoorX = useTransform(scrollY, [0, 800], ['0vw', '100vw']);
  return (
    <div className='about'>
      <motion.div
        style={{
          x: leftDoorX,
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}>
        <Door className='door-left' />
      </motion.div>
      <motion.div
        style={{
          x: rightDoorX,
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}>
        <Door className='door-right' />
      </motion.div>
      <div className='about__title'>
        <h2>About me</h2>
      </div>
      <div className='about__content'>
        <div className='about__me'>
          <p>
            I'm a frontend developer with over two years of experience in
            building dynamic web applications using React and TypeScript. Before
            transitioning to development, I worked in marketing and hold a
            Bachelor’s degree in Management.
          </p>
          <p>
            This unique background gives me a strong understanding of both user
            experience and business goals. I’m eager to bring my skills and
            passion to a forward-thinking team. Let’s create something amazing
            together!
          </p>
          <p>Feel more than welcome to talk to me in:</p>
          <div className='about__lang'>
            <div className='about__langSingle'>
              <img src={pl} alt='Polish' />
              <p>Polish</p>
            </div>
            <div className='about__langSingle'>
              <img src={uk} alt='English' />
              <p>English</p>
            </div>
            <div className='about__langSingle'>
              <img src={jp} alt='Japanese' />
              <p>Japanese</p>
            </div>
          </div>
        </div>
        <div className='about__desc'>
          <h3>What I use to build stuff</h3>
          <div className='about__techStack'>
            <div className='about__techSingle'>HTML</div>
            <div className='about__techSingle'>CSS</div>
            <div className='about__techSingle'>SCSS</div>
            <div className='about__techSingle'>JavaScript</div>
            <div className='about__techSingle'>TypeScript</div>
            <div className='about__techSingle'>React</div>
            <div className='about__techSingle'>GSAP</div>
          </div>
          <div className='about__projects'>
            <Link to='/projects'>See my projects</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
