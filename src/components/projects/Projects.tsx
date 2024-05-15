import { useState } from 'react';

import Filter from './Filter';
import data from './data.json';
import './styles/styles.css';

export default function Projects() {
  const [project, setProject] = useState(data);
  const [filtered, setFiltered] = useState(data);
  const [activeBtn, setActiveBtn] = useState('all');

  const fetchProject = () => {
    const projectData = data;
    setProject(projectData);
    setFiltered(projectData);
  };

  return (
    <>
      <Filter
        project={project}
        setFiltered={setFiltered}
        activeBtn={activeBtn}
        setActiveBtn={setActiveBtn}
      />
      <div className='projects-container'>
        {filtered.map(({ id, title, tags, desc, github, preview, img }) => (
          <div className='project' key={id}>
            <div className='project-content'>
              <h3 className='project-title'>{title}</h3>
              <div className='project-tech'>
                {tags.map((item) => (
                  <p className='project-tag' key={item}>
                    {item}
                  </p>
                ))}
              </div>
              <p className='project-desc'>{desc}</p>
              <div className='project-links'>
                <a href={preview} target='_blank'>
                  live project
                </a>
                <a href={github} target='_blank'>
                  github
                </a>
              </div>
            </div>
            <div className='project-img'>
              {/* <img src={img} alt={title} /> */}
              <div className='project-img__desktop'>
                <div className='project-img__screen project-img__screen--desktop'>
                  <img src={img.desktop} alt={title} />
                </div>
              </div>
              <div className='project-img__mobile'>
                <div className='project-img__screen project-img__screen--mobile'>
                  <img src={img.mobile} alt={title} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
