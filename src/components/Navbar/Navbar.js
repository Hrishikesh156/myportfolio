//import React, {Component} from 'react';
import Toggle from '../toggle/Toggle';
import './Navbar.css';

const Navbar = () =>{
    
    return(
        
        <div>
            
            <nav className="navbar"  >
            <div className='Brand-title'> Portfolio </div>
            <Toggle />
                <a href="#" className="nav-button">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </a>
                <div className='nav-links'>
                    <ul>
                        <li> <a className="links" href="#">Home</a></li>
                        <li> <a className="links" href="#project">Projects</a></li>
                        <li> <a className="links" href="#contact">contact</a></li>
                        <li> <a className="links" href="#Education">Education</a></li>
                    </ul>
               
               
               
               
                </div>
            
            
            </nav>
        </div>
        
       
    );



}

export default Navbar;