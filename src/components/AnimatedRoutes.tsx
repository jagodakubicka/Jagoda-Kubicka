import { Routes, Route, useLocation  } from "react-router-dom"

//pages
import Home from '../pages/home/Home'
import Projects from '../pages/projects/Projects'
//animation
import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {
 const location = useLocation();
  return (
    <AnimatePresence>
     <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
     
      </Routes>
    </AnimatePresence>
     
  )
}
