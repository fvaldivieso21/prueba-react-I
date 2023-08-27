import { useState } from 'react'
import './App.css'
import MiApi from './components/MiApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Buscador from './components/Buscador';




function App() {
  

  return (
    <>
    <NavBar/>
    
    <MiApi />
    </>
  )
}

export default App
