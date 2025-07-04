import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Education from './pages/Education'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import SocialLinks from './pages/SocialLinks'

import { Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div>
      {/* Navbar with Links */}
      <nav className="navbar navbar-expand-lg navbar-dark shadow-sm position-fixed top-0 w-100 z-3 "
      style={{ background: "linear-gradient(90deg,rgb(17, 165, 233),rgb(146, 197, 36))" }
      
      }>
        <Link to="/" className="btn btn-outline-primary me-2 text-black m-1">Home</Link>
        <Link to="/about" className="btn btn-outline-primary text-black m-3">About</Link>
        <Link to="/education" className="btn btn-outline-primary text-black m-3">Education</Link>
        <Link to="/portfolio" className="btn btn-outline-primary text-black m-3">Projects</Link>
        <Link to="/contact" className=" btn btn-outline-primary text-black m-3">Contact</Link>
        <Link to="/social" className='btn btn-outline-primary text-black m-3'>Social Media</Link>



      </nav>

      {/* Route Setup */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} /> 
          <Route path="/social" element={<SocialLinks />}/>

      </Routes>
    </div>
  );
}

export default App;

