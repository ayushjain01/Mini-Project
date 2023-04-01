import { useState } from 'react'
import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Movies from './pages/Movies'
import Shows from './pages/Shows'
import Discover from './pages/Discover'

function App(){
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/discover" element={<Discover />} />
      </Routes>
    </div>
  )
  }

export default App
