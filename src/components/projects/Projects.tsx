
import {useState} from 'react';

import Filter from './Filter';
import data from './data.json';
import './styles/styles.css';

export default function Projects() {
const [project, setProject] = useState(data)
const [filtered, setFiltered] = useState(data);
const [activeBtn, setActiveBtn] = useState('all');

const fetchProject = () => {
  const projectData = data
  setProject(projectData);
  setFiltered(projectData);
}

  return (
   <>
    <Filter 
    project = {project} 
    setFiltered = {setFiltered}
    activeBtn = {activeBtn}
    setActiveBtn = {setActiveBtn}
    />
   <div className="projects__container">
       
    {filtered.map(({id, title, tags, desc, github, preview, img}) => (
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
   </>
      
    
    
  )
}
