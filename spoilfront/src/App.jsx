import { useState } from 'react'
import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

import { Homepage, Movies, Shows, Discover ,Login,About} from './pages'


function App(){
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/aboutUs" element={<About />} />
      </Routes>
    </div>
  );
  }

export default App
