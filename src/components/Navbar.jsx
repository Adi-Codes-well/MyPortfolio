import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

const Navbar = () => {
  return (
    <nav className="relative z-10 text-white px-8 py-4 flex justify-between items-center shadow-lg">
  <h1 className="text-2xl font-bold tracking-wide">adicodes</h1>
  <div className="flex space-x-8">
    <Link
      className="text-gray-300 hover:text-white transition duration-300 hover:underline underline-offset-4"
      to="/"
    >
      Home
    </Link>
    <Link
      className="text-gray-300 hover:text-white transition duration-300 hover:underline underline-offset-4"
      to="/about"
    >
      Projects
    </Link>
    <Link
      className="text-gray-300 hover:text-white transition duration-300 hover:underline underline-offset-4"
      to="/contact"
    >
      About
    </Link>
    <Link
      className="text-gray-300 hover:text-white transition duration-300 hover:underline underline-offset-4"
      to="/blogs"
    >
      Blogs
    </Link>
  </div>
</nav>
  )
}

export default Navbar