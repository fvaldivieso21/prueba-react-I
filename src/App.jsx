import { useState } from 'react'
import './App.css'
import MiApi from './components/MiApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';

function App() {
  
  return (
    <>
    <NavBar/>
     <MiApi/>
    </>
  )
}

export default App
