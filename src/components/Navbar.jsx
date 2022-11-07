import React from 'react'
import  logo from '../images/logo-light.svg';
import '../Style/Navbar.css';

const Navbar = () => {
  return (
    <div className='container'>
        <nav className='row-navbar'>
            <div className='col-navbar'>
            <img src={logo} alt="Logo" className='logo'/>
            </div>
            <div className="nav-items col-navbar">
                <div>Home</div>
                <div>About</div>
                <div>Contact Me</div>
                <div>Icon</div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar