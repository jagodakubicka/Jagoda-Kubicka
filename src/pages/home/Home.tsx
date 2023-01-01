import {motion} from "framer-motion"
import About from '../../components/about/About'
import Header from '../../components/header/Header'
import Contact from '../../components/contact/Contact'

export default function Home() {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity:0}}
    >
      <Header />
      <About />
      <Contact />
    </motion.div>
  )
}
