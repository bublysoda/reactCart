import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import './App.css'
import Navbar from './Navbar';

function App() {
  return <div className="all">
    {Navbar()}
    This is the homepage!
  </div>
}

export default App
