import { SectionTitle } from '../sectionTitle/SectionTitle';
// @ts-ignore
import { db } from '../../../src/firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import './styles/styles.css';

interface TechStackProps {
  t_tag: string;
  id: string;
}

export const TechStack = () => {
  const [tags, setTags] = useState<TechStackProps[]>([]);

  useEffect(() => {
    const ref = collection(db, 'techstack');
    getDocs(ref).then((snapshot) => {
      let results: any = [];
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setTags(results);
    });
  }, []);

  return (
    <>
      <SectionTitle title={'TechStack'} />
      <div className='tags'>
        {tags.map((tag) => (
          <div className='tag' key={tag.id}>
            <p>{tag.t_tag}</p>
          </div>
        ))}
      </div>
    </>
  );
};
