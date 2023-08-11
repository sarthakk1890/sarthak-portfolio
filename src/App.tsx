import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Index } from './Components/Layout/Index'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />}>

        <Route index element={<Home />} />
        <Route path = "/about" element={<About/>} />
        <Route path = "/contact" element={<Contact/>} />

      </Route>
    </Routes>
  )
}

export default App 
