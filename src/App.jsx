import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './Pages/Home'
import Tours from './Pages/Tours'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
      </Routes>
    </div>
  )
}

export default App