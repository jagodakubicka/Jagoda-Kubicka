import { useEffect } from 'react';

export interface ProjectProps {
  p_title: string;
  p_tags: string[];
  p_desc: string;
  p_github: string;
  p_preview: string;
  p_img: string;
  p_display: boolean;
  p_inProgress: boolean;
  id: number;
  completed: boolean;
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
    const filtered = projects.filter((item) => item.p_tags.includes(activeBtn));
    setFiltered(filtered);
  }, [activeBtn]);

  const projectsTags = projects.map((item) => {
    return item.p_tags;
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
