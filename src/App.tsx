import { BrowserRouter  } from "react-router-dom";

import { useState } from 'react'
//components
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
//pages

import AnimatedRoutes from "./components/AnimatedRoutes";

import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
      </BrowserRouter>
     
    </div>
  )
}

export default App
