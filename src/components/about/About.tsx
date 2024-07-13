import React from 'react';
import geishaImg from './img/geisha_sketch.png';

//styles
import './styles/style.css';
import { SectionTitle } from '../sectionTitle/SectionTitle';

export default function About() {
  return (
    <div className='about' id='about'>
      <SectionTitle title='Person Behind the Pixels' />
      <div className='about-content'>
        <div className='bg-circle bg-circle--middle'></div>
        <div className='about-circle'>
          <img src={geishaImg} alt='' />
        </div>
        <div className='about-me'>
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
        </div>
      </div>
    </div>
  );
}
