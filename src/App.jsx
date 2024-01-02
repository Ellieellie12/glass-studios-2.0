// import { useState } from 'react'

//npm modules
import {Routes, Route } from 'react-router-dom'


//components
import NavBar from './components/NavBar/NavBar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Studios from './components/pages/Studios'
import Merch from './components/pages/Merch'
import Contact from './components/pages/Contact'


//styles
import './App.css'

function App() {

  return (
  <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/studios' element={<Studios />} />
      <Route path='/merchandise' element={<Merch />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  </>
  )
}

export default App
