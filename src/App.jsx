import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar';
import './index.css';
import Home from "./pages/Home"

import BackgroundBeams from "./ui/BackgroundBeams";

function Projects() {
  return <h1>Projects Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

const App = () => {
  return (
    <BrowserRouter>
    <BackgroundBeams />
    <div className=" min-h-screen flex justify-center">
      <div className="w-full max-w-6xl text-white px-6">
      <Navbar />

      {/* <BackgroundBeams /> */}
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    </div>
    </BrowserRouter>
  )
}

export default App
