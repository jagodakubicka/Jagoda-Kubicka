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
      'Developed the frontend layer for a web application PIM & DAM using React, TypeScript, SCSS, and Bootstrap.',
      'Built and optimized the frontend for the company’s new website using TWIG, SCSS, and JavaScript within the headless CMS - Sulu with a focus on accessibility and SEO optimization',
      'Collaborated closely with UX/UI designers to enhance user flows and interface layouts, ensuring a seamless user experience',
      'Code reviews, contributing to the overall quality of the codebase',
    ],
  },
  {
    title: 'Junior Frontend Developer',
    company_name: 'eStoreLabs',
    date: 'May 2022 - Sep 2023',
    points: [
      'Developed responsive Landing Pages & Rich Content using HTML, CSS, SCSS and JavaScript.',
      'Transformed designs from Figma and Photoshop into coded layouts.',
      'Troubleshot and resolved content display errors and compatibility issues with browsers and WYSIWYG editors.',
      'Documented e-retailer requirements to align with project goals and technical specifications.',
      'Interacted with clients to gather requirements and develop tailored solutions, supporting project managers in scoping and delivery.',
    ],
  },
  {
    title: 'F&H Excess Specialist',
    company_name: 'Avon',
    date: 'Oct 2019 - Nov 2021',
    points: [
      'Planned and executed excess sales offers in Central Europe (online & print), leveraging data analysis to drive campaign effectiveness.',
      'Collaborated with the Digital Team on creating online sales offers, enhancing the digital presence and sales performance.',
      'Managed the excess digital offer store, optimizing product listings and driving sales through data-driven decision-making.',
    ],
  },
  {
    title: 'Fashin&Home Category Coordinator',
    company_name: 'Avon',
    date: 'July 2018 - Oct 2019',
    points: [
      'Supported Product Managers in daily tasks, including market research, data analysis, and campaign planning, gaining valuable insights into product management processes.',
      'Provided detailed product information to Customer Service, enhancing customer satisfaction and support effectiveness.',
      'Volunteered for manual testing of a new product management system, identifying and reporting issues to improve user experience and system functionality. This proactive involvement helped streamline the implementation process and ensured a smoother transition to the new system.',
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
    dateClassName='experience-card__date'
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
