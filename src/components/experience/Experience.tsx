import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import './styles/styles.css';
import 'react-vertical-timeline-component/style.min.css';
import { SectionTitle } from '../sectionTitle/SectionTitle';

interface ExperienceCardProps {
  experience: {
    title: string;
    company_name: string;
    date: string;
    points: string[];
  };
}
const experiences = [
  {
    title: 'Frontend Developer',
    company_name: 'eStoreLabs',
    date: 'Sep 2023 - May 2024',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Junior Frontend Developer',
    company_name: 'eStoreLabs',
    date: 'May 2022 - Sep 2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'F&H Excess Specialist',
    company_name: 'Avon',
    date: 'Oct 2019 - Nov 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Fashin&Home Category Coordinator',
    company_name: 'Avon',
    date: 'July 2018 - Oct 2019',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
];

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => (
  <VerticalTimelineElement
    className='experience-card'
    contentStyle={{
      background: 'var(--light-color)',
      color: 'var(--primary-color-dark)',
    }}
    contentArrowStyle={{ borderRight: '7px solid var(--light-color)' }}
    date={experience.date}
    iconStyle={{ background: 'white' }}
    icon={
      <div>
        <img src='' alt={experience.company_name} />
      </div>
    }>
    <div>
      <h3>{experience.title}</h3>
      <p className='experience-card__company'>{experience.company_name}</p>
    </div>
    <ul>
      {experience.points.map((point: string, index: number) => (
        <li key={`experience-point-${index}`} className='experience-card__desc'>
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

export const Experience = () => {
  return (
    <div className='experience'>
      <div className='bg-circle bg-circle--top'></div>
      <div className='bg-circle bg-circle--middle'></div>
      <div className='bg-circle bg-circle--bottom'></div>
      <SectionTitle title='Work Experience' />
      <div>
        <VerticalTimeline lineColor='var(--primary-dark-color)'>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};
