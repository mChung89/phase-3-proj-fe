import NavBar from './NavBar'
import Home from './Home'
import './styles/App.css';
import './images/hero.png'
import { useState, useEffect } from 'react'
import MultiActionAreaCard from './Card';
import SimpleContainer from './Container';
import SpacingGrid from './Grid'
import { Routes, Route, Link } from "react-router-dom";

function App() {
  



  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
