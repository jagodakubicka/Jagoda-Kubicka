import About from '../../components/about/About';
import Header from '../../components/header/Header';
import Contact from '../../components/contact/Contact';
import { Experience } from '../../components/experience/Experience';

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Experience />
      <Contact />
    </>
  );
}
