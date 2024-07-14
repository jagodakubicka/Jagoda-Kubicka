import { useEffect, useState } from 'react';

import { Filter, ProjectProps } from './Filter';
// @ts-ignore
import { db } from '../../../src/firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import './styles/styles.css';

export default function Projects() {
  const [project, setProject] = useState<ProjectProps[]>([]);
  const [filtered, setFiltered] = useState<ProjectProps[]>([]);
  const [activeBtn, setActiveBtn] = useState('all');

  useEffect(() => {
    const ref = collection(db, 'portfolio');
    getDocs(ref).then((snapshot) => {
      let results: any = [];
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setProject(results);
      setFiltered(results);
    });
  }, []);

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
          ({
            id,
            p_title,
            p_tags,
            p_desc,
            p_github,
            p_preview,
            p_img,
            p_inProgress,
            p_display,
          }) => (
            <div className='project' key={id}>
              <div className='project-content'>
                <h3 className='project-title'>
                  {p_title}

                  {p_inProgress ? (
                    <span className='project-title__progress'> in progess</span>
                  ) : (
                    ''
                  )}
                </h3>
                <div className='project-tech'>
                  {p_tags.map((item) => (
                    <p className='project-tag' key={item}>
                      {item}
                    </p>
                  ))}
                </div>
                <p className='project-desc'>{p_desc}</p>
                <div className='project-links'>
                  {p_inProgress && p_preview === '' ? (
                    ''
                  ) : (
                    <a href={p_preview} target='_blank'>
                      live project
                    </a>
                  )}

                  <a href={p_github} target='_blank'>
                    github
                  </a>
                </div>
              </div>
              <div className='project-img'>
                <div className='project-img__desktop'>
                  <div className='project-img__screen project-img__screen--desktop'>
                    <img src={p_img} alt={p_title} />
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
