//import React, {Component} from 'react';
import Toggle from '../toggle/Toggle';
import './Navbar.css'
const Navbar = () =>{

    return(
        <div>
            
            <nav className="navbar"  style={{display:'flex',justifyContent:'flex-end'}}>
            <Toggle />
                <a href="https://hrishikesh156.github.io/myportfolio">Home</a>
                <a href="#project">Projects</a>
                <a href="#contact">contact</a>
                <a href="#Education">Education</a>
                <a href="*">Resume</a>
            </nav>
        </div>
        
       
    );



}

export default Navbar;