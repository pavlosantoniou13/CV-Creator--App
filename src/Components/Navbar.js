import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
        <Link to='/'><h1>CV Creator</h1></Link>
        <div className="links">
         
          <Link to ='/CVpdf'>Preview mode</Link>
        </div>
        
    </nav>
  )
}
