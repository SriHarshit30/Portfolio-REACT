import React from 'react'
import logo from '../images/logo-light.svg';
import '../Style/Footer.css';
const Footer = () => {
  return (
    <>
        <div className = "container">
          <div className="row" style={{paddingTop: '5rem', paddingBottom: '5rem'}}>
            <div className="col first">
              <img src={logo} alt="logo"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quos saepe autem, ducimus deleniti dolorum.</p>
            </div>
            <div className="col">
              <h3>Quick Links</h3>
              <ul>
                <li>Join Us</li>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="col">
            <h3>Legal Stuff</h3>
              <ul>
                <li>Privacy</li>
                <li>Cookies</li>
                <li>Terms of Use</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className='footer-last'>©Copyright | Code with passion</div>

    </>
       
       


        
   
  
  )
}

export default Footer;