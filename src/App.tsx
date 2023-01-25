import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

import { useState } from 'react'
//components
import Navbar from './components/navbar/RootLayout'
import Footer from './components/footer/Footer'
//pages


import './App.css'
import RootLayout from "./components/navbar/RootLayout";
import Home from './pages/home/Home'
import Projects from './components/projects/Projects'
import NotFound from './pages/notfound/NotFound'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="projects" element={<Projects />} />
      <Route path='*' element={<NotFound/>}></Route>
    </Route>
  )
)
function App() {
  return (
    <div className="App">

      <RouterProvider router={router} />

      <Footer />
     
    </div>
  )
}

export default App
