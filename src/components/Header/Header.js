import React from 'react'
import './header.css';
import {Link} from 'react-router-dom'
function Header() {
  return (
    <header className="jumbotron text-center">
        <Link to="/" style={{
          textDecoration: "none"
        }}><p className="brand">BhoJAn @ 24/7</p></Link>
    </header>
  )
}

export default Header
