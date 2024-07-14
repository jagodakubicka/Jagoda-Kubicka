import About from '../../components/about/About';
import Header from '../../components/header/Header';
import Contact from '../../components/contact/Contact';
import { Experience } from '../../components/experience/Experience';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
//svg
import { ReactComponent as Sakura } from './img/Sakura.svg';
import { TechStack } from '../../components/techStack/TechStack';

export default function Home() {
  const sakuraWrapper = useRef<HTMLDivElement>(null);

  const animateSakura = () => {
    const [sakuraImage] = sakuraWrapper?.current?.children!;
    const branch = sakuraImage.querySelector('#sakura-branch-1');
    const flowers = sakuraImage.querySelector('#flowers')!.children;
    const petals = sakuraImage.querySelector('#petals')!.children;
    const smallPetals = sakuraImage.querySelectorAll('.small-petal');
    const mediumPetals = sakuraImage.querySelector('#medium')!.children;
    const bigPetals = sakuraImage.querySelector('#big')!.children;

    const tl = gsap.timeline();

    const tl2 = gsap.timeline({
      defaults: {
        y: 0,
        opacity: 0,
        duration: 25,
        repeat: -1,
        repeatDelay: 2,
      },
    });

    //branch with flowers animation
    gsap.set(branch, { transformOrigin: 'top' });
    gsap.set(flowers, { transformOrigin: 'center' });
    tl.fromTo(branch, { autoAlpha: 0 }, { duration: 6, autoAlpha: 1 });
    tl.fromTo(
      flowers,
      { autoAlpha: 0, scale: 0 },
      { duration: 2, autoAlpha: 1, scale: 1, stagger: 0.15 },
      '<10%'
    );

    // petals animation

    tl.fromTo(petals, { opacity: 0 }, { opacity: 0.8 }, '<90%');
    // medium petals
    tl.fromTo(
      mediumPetals,
      { y: -400, x: 0, opacity: 0 },
      { y: 700, x: -80, opacity: 0.8, duration: 20, repeat: -1 },
      '<'
    );

    //small petals

    tl2.fromTo(
      smallPetals,
      { y: -400, x: 0, opacity: 1, stagger: 0.15 },
      { y: 350, x: 200, opacity: 0 },
      '<50%'
    );
    //big petals
    tl2.fromTo(
      bigPetals,
      { y: -400, x: 0, opacity: 1 },
      { y: 500, x: 100, opacity: 0 },
      '<50%'
    );

    tl.fromTo(
      branch,
      { rotate: 0, y: 0 },
      { rotate: 2, y: -10, duration: 5, repeat: -1, yoyo: true },
      '<'
    );
  };

  useEffect(() => {
    sakuraWrapper && animateSakura();
  }, []);
  return (
    <>
      <Header />
      <div ref={sakuraWrapper} className='header-animations'>
        <Sakura className='header-sakuraBranch' />
      </div>
      <About />
      <TechStack />
      <Experience />
      <Contact />
    </>
  );
}
