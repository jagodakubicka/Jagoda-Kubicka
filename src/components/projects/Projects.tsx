import React, {useState, useEffect} from 'react';

import data from './data.json';
import './styles/styles.css';

export default function Projects() {


  return (
   
      <div className="projects__container">
       
    {data.map(({id, title, tags, desc, github, preview, img}) => (
      <div className='project' key={id}>
        <div className="project__content">
          <h3 className="project__title">{title}</h3>
          <div className="project__tech">
            {tags.map((item => <p className='project__tag' key={item}>{item}</p>))}
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
