import { useEffect, useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SectionTitle } from '../sectionTitle/SectionTitle';
import { faCode, faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// @ts-ignore
import { db } from '../../../src/firebase/config';
import {
  collection,
  getDocs,
  query,
  orderBy,
  QuerySnapshot,
} from 'firebase/firestore';
import './styles/styles.css';

interface ExperienceCardProps {
  experience: {
    id: string;
    exp_ended: number;
    exp_title: string;
    exp_comp: string;
    exp_icon: string;
    exp_date: string;
    exp_points: string[];
  };
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => (
  <VerticalTimelineElement
    className='experience-card'
    contentStyle={{
      background: 'var(--light-color)',
      color: 'var(--primary-color-dark)',
    }}
    contentArrowStyle={{ borderRight: '7px solid var(--light-color)' }}
    date={experience.exp_date}
    dateClassName='experience-card__date'
    iconStyle={{ background: 'white', color: 'var(--primary-dark-color)' }}
    icon={
      <div className='experience-iconCtn'>
        <FontAwesomeIcon
          icon={experience.exp_icon === 'faCode' ? faCode : faChartSimple}
          className='experience-icon'
        />
      </div>
    }>
    <div>
      <h3>{experience.exp_title}</h3>
      <p className='experience-card__company'>{experience.exp_comp}</p>
    </div>
    <ul>
      {experience.exp_points.map((point: string, index: number) => (
        <li key={`experience-point-${index}`} className='experience-card__desc'>
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

export const Experience = () => {
  const [experiences, setExperiences] = useState<ExperienceCardProps[]>([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const q = query(
          collection(db, 'experience'),
          orderBy('exp_ended', 'desc')
        );
        const querySnapshot: QuerySnapshot = await getDocs(q);

        const experiences: ExperienceCardProps[] = [];
        querySnapshot.forEach((doc) => {
          experiences.push({
            // @ts-ignore
            id: doc.id,
            ...(doc.data() as ExperienceCardProps),
          });
        });

        setExperiences(experiences);
      } catch (error) {
        console.error('Error fetching documents: ', error);
      }
    };

    fetchExperiences();
  }, []);

  return (
    <div className='experience'>
      <div className='bg-circle bg-circle--top'></div>
      <div className='bg-circle bg-circle--middle'></div>
      <div className='bg-circle bg-circle--bottom'></div>
      <SectionTitle title='Work Experience' />
      <div>
        <VerticalTimeline lineColor='var(--primary-dark-color)'>
          {experiences.map((experience, index) => (
            // @ts-ignore
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};
