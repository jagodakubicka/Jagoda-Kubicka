// @ts-nocheck
import { useEffect} from "react";
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

     <button 
    className={`project__filterBtn ${activeBtn === 'HTML' ? "project__filterBtn--active" : ""}`}
    onClick={()=> setActiveBtn('HTML')}
    >HTML
    </button>

     <button 
    className={`project__filterBtn ${activeBtn === 'CSS' ? "project__filterBtn--active" : ""}`}
    onClick={()=> setActiveBtn('CSS')}
    >CSS
    </button>

    <button 
    className={`project__filterBtn ${activeBtn === 'SCSS' ? "project__filterBtn--active" : ""}`}
    onClick={()=> setActiveBtn('SCSS')}
    >SCSS
    </button>

     <button 
    className={`project__filterBtn ${activeBtn === 'JavaScript' ? "project__filterBtn--active" : ""}`}
    onClick={()=> setActiveBtn('JavaScript')}
    >JavaScript
    </button>

    <button 
    className={`project__filterBtn ${activeBtn === 'VUE' ? "project__filterBtn--active" : ""}`}
    onClick={()=> setActiveBtn('VUE')}
    >VUE
    </button>

  {/* {data.map(({tags, id}) => (
    <div key={id}>

    {tags.map((btn => 
    <button 
     className={`project__filterBtn ${activeBtn === btn ? "project__filterBtn--active" : ""}`} 
    key={btn}
    onClick={()=> setActiveBtn(btn)}
    >{btn}
    </button>
    ))}
    </div>
  ))} */}

 </div>
)
}

export default Filter;