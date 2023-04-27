import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './components/home'

import { Projects } from './components/projects'
import { Abouts } from './components/abouts'
import { Contacts } from './components/contacts'



function App() {

  return (
  
    <div className='App'>
  
      <Home/>

    </div>
    
    
  )
}

export default App
