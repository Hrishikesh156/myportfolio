//import React, {Component} from 'react';
import './Navbar.css'
const Navbar = () =>{

    return(
        
        <nav className="navbar"  style={{display:'flex',justifyContent:'flex-end'}}>
                <a href="https://hrishikesh156.github.io/myportfolio">Home</a>
                <a href="#project">Projects</a>
                <a href="#contact">contact</a>
                <a href="#Education">Education</a>
                <a href="*">Resume</a>
            </nav>
       
    );



}

export default Navbar;