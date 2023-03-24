import { useState } from 'react'
import Portfolio from './Portfolio/Portfolio';
import { Routes, Route, Navigate } from 'react-router-dom';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Portfolio/>}/>
      </Routes>
    </div>
  )
}

export default App
