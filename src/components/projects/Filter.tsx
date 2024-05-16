import { useEffect } from 'react';

interface ImgProps {
  desktop: string;
  mobile: string;
}
interface ProjectProps {
  title: string;
  tags: string[];
  desc: string;
  github: string;
  preview: string;
  img: ImgProps;
  id: number;
}
interface FilterProps {
  setActiveBtn: (btn: string) => void;
  activeBtn: string;
  setFiltered: (projects: ProjectProps[]) => void;
  projects: ProjectProps[];
}

export const Filter: React.FC<FilterProps> = ({
  setActiveBtn,
  activeBtn,
  setFiltered,
  projects,
}: FilterProps) => {
  useEffect(() => {
    if (activeBtn === 'all') {
      setFiltered(projects);
      return;
    }
    const filtered = projects.filter((item) => item.tags.includes(activeBtn));
    setFiltered(filtered);
  }, [activeBtn]);

  const projectsTags = projects.map((item) => {
    return item.tags;
  });
  const tagsArray = projectsTags.flat(1);
  const removedDuplicatedTags = [...new Set(tagsArray)];

  return (
    <div className='project-filterCtn'>
      <button
        className={`project__filterBtn ${
          activeBtn === 'all' ? 'project__filterBtn--active' : ''
        }`}
        onClick={() => setActiveBtn('all')}>
        All
      </button>

      {removedDuplicatedTags.map((tag, index) => (
        <div key={index}>
          <button
            className={`project__filterBtn ${
              activeBtn === tag ? 'project__filterBtn--active' : ''
            }`}
            key={tag}
            onClick={() => setActiveBtn(tag)}>
            {tag}
          </button>
        </div>
      ))}
    </div>
  );
};
