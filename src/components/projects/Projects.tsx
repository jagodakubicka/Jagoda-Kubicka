import { useState } from 'react';

import { Filter } from './Filter';
import data from './data.json';
import './styles/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

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
        projects={project}
        setFiltered={setFiltered}
        activeBtn={activeBtn}
        setActiveBtn={setActiveBtn}
      />
      <div className='projects-container'>
        {filtered.map(
          ({ id, title, tags, desc, github, preview, img, completed }) => (
            <div className='project' key={id}>
              <div className='project-content'>
                <h3 className='project-title'>
                  {title}
                  {completed ? (
                    ''
                  ) : (
                    <span className='project-title__progress'>
                      {' '}
                      in progress
                    </span>
                  )}
                </h3>

                <div className='project-tech'>
                  {tags.map((item) => (
                    <p className='project-tag' key={item}>
                      {item}
                    </p>
                  ))}
                </div>
                <p className='project-desc'>{desc}</p>
                <div className='project-links'>
                  {preview ? (
                    <a href={preview} target='_blank'>
                      live project
                    </a>
                  ) : (
                    ''
                  )}

                  <a href={github} target='_blank'>
                    github
                  </a>
                </div>
              </div>
              <div className='project-img'>
                <div className='project-img__desktop'>
                  <div className='project-img__screen project-img__screen--desktop'>
                    {img.desktop ? (
                      <img src={img.desktop} alt={title} />
                    ) : (
                      <FontAwesomeIcon
                        className='project-progress'
                        icon={faEyeSlash}
                      />
                    )}
                  </div>
                </div>
                <div className='project-img__mobile'>
                  <div className='project-img__screen project-img__screen--mobile'>
                    {img.mobile ? (
                      <img src={img.mobile} alt={title} />
                    ) : (
                      <FontAwesomeIcon
                        className='project-progress'
                        icon={faEyeSlash}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}
