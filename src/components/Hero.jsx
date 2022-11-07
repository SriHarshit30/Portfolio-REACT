import React from 'react'

import girl from '../images/hero.png';
import '../Style/hero.css';

const Hero = () => {
  return (
     <div className="container" style={{paddingBottom: '6rem'}}>
        <div className="row-hero">
            <div className="col-hero">
                <h1 className='michroma'>I'm Harshit Srivastav</h1>
                <h2 className='orbitron'>Problem Solver</h2>
                <p>I'm specialised in MERN Stack</p>
                <div style={{display: 'flex'}}>
                <button className='btn btn-primary'>Contact Me</button>
                <button className="btn btn-secondary" style={{marginLeft:'2rem'}}>About Me</button>
                </div>
            </div>
            <div className="col">
                <img src={girl} alt="girl" />
            </div>
        </div>
     </div>
  )
}

export default Hero;