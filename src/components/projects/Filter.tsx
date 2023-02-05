// @ts-nocheck
import { useEffect } from "react";
import data from './data.json';

function Filter({setActiveBtn, activeBtn, setFiltered, project}){

 useEffect(() => {
  if(activeBtn === 'all'){
   setFiltered(project);
   return;
  }
  const filtered = project.filter((item)=> item.tags.includes(activeBtn)
  );
  setFiltered(filtered);
 }, [activeBtn]);


return(
 <div className="project-filterCtn">
   <button 
    className={`project__filterBtn ${activeBtn === 'all' ? "project__filterBtn--active" : ""}`}
    onClick={()=> setActiveBtn('all')}
    >All
    </button>

  {data.map(({tags, id}) => (
    <div key={id}>
    {tags.map((btn => <button 
     className={`project__filterBtn ${activeBtn === btn ? "project__filterBtn--active" : ""}`} 
    key={btn}
    onClick={()=> setActiveBtn(btn)}
    >{btn}</button>))}
    </div>
  ))}
 </div>
)
}

export default Filter;