import React, {useState, useEffect} from 'react'
import './styles/styles.css'


export default function Projects() {
const CARDS = [
  {
    title: 'Healthy Skin e-commerce site',
    tags: ['HTML', 'CSS', 'JavaScript'],
    desc: `This is a e-commerce store for cosmetics company made with only front-end features.
    Shopping cart logic is written with support of Coding Addict (John Smilga) tutorial whose video was uploaded on freeCodeCamp.org channel.
    I have added maximum item amount in cart ( max to 25 items per product) together with alert message when limit is reached.`,
    github: 'https://github.com/jagodakubicka/Healthy-skin',
    preview: 'https://healthy-skin.vercel.app/',
    img: './src/components/projects/img/Healthy-skin.png',
    id: 1,
  },
  {
    title: 'Tip-Calculator App - challenge from Frontend Mentor',
    tags: ['HTML', 'SCSS', 'VUE'],
    desc: `Small App created as close as possible to the provided design from jpg files. Challenge by Frontend Mentor, a platform with challenges to improve coding skills.This project focuses on VUE & SCSS.`,
    github: 'https://github.com/jagodakubicka/tip-calculator',
    preview: 'https://gilded-stroopwafel-59944c.netlify.app/',
    img: './src/components/projects/img/tip-calculator.png',
    id: 2,
  },
  {
    title: 'Some Tea',
    tags: ['HTML', 'SCSS', 'VUE'],
    desc: '',
    github: 'https://github.com/jagodakubicka/Some-Tea-Vue',
    preview: 'https://kaleidoscopic-basbousa-c6c82c.netlify.app/',
    img: './src/components/projects/img/some-tea.png',
    id: 3,
  },
  {
    title: 'Studio Adagio',
    tags: ['HTML', 'CSS', 'JavaScript'],
    desc: `Full website for a dancing studio. I saw a video of a ballet dancer which inspired me to try out a landing page with a video on the background. After creating it, I couldn't stop and I finished with full website.
    I wanted to challenge myself with a simple yet consistant design.
    Java Script is used here for a menu toggle button and pop up message on 'our offer page' with promotion info.`,
    github:
      'https://github.com/jagodakubicka/Studio-Adagio-Ballet-Dancing-School',
    preview: 'https://studio-adagio-ballet-dancing-school.hostman.site/',
    img: './src/components/projects/img/studio-adagio.png',
    id: 4,
  },
  {
    title: ' Space-Tourism',
    tags: ['HTML', 'SCSS', 'JavaScript'],
    desc: `Full site created as close as possible to the provided design from jpg files. Challenge by Frontend Mentor, a platform with challenges to improve coding skills.This project focuses on SCSS and JavaScript.`,
    github: 'https://github.com/jagodakubicka/Space-Tourism-Frontend-Mentor',
    preview: 'https://space-tourism-frontend-mentor-one.vercel.app/',
    img: './src/components/projects/img/space.png',
    id: 5,
  },
]


  return (
   
      <div className="projects__container">
       
    {CARDS.map(({title, tags, desc, github, preview, img, id}) => (
      <div className='project' key={id}>
        <div className="project__content">
          <h3 className="project__title">{title}</h3>
          <div className="project__tech">
            {tags.map(item => <p className='project__tag' key={item}>{item}</p>)}
          </div>
          <p className="project__desc">{desc}</p>
          <div className="project__links">
            <a href={preview} target="_blank">live project</a>
            <a href={github} target="_blank">github</a>
          </div>
        </div>
        <div className="project__img">
          <img src={img} alt={title} />
        </div>
      </div>
    ))}
    
    </div>
    
    
  )
}
