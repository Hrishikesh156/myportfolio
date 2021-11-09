import './App.css';
import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Toggle from './components/toggle/Toggle';
import Navbar  from './components/Navbar/Navbar';
import Card  from './components/Card/Card';
import Tech from './components/Tech/Tech';
import Contact  from './components/Contact/Contact';
import Hand from './media/Hand.gif';
import Dp from './media/me2.jpg';
import Tilt from 'react-tilt';
import Education  from './components/Education/Education';
import About from './components/About/About';
const particlesOpt={
        
    

  particles: {
      number:{
          value:100,
          density:{
              enable:true,
              value_area:2000
          }

      }
     
   }
  }
class App extends Component{

render(){
    return(

      <div className="App">
      <Particles 
      className="particles"
      params={particlesOpt}
      />
       <Navbar />
     

      <div className="intro" id="home" >
        <span className="wave">
        <b>Hii</b> &nbsp;
        <img src= {Hand} alt = "hand" width="35px" />
        <br/>
          <b>I'm Hrishi.</b> <br></br>
          <br></br>
          
        </span>
        {/* <span className="center">
        <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
        <div className="Tilt-inner">
        <img src={Dp} alt="me" class="rounded-circle" height="200" width="200" style = {{margin:"40px"}}></img>
           
        </div>
        </Tilt>

        </span>       */}
        </div>
        <img src={Dp} className="profile" alt="me"  height="600" width="300" style = {{margin:"40px"}}></img>
      
        <About />
        <Tech />
        <Card />
        
        <Education />

        <Contact />
        <footer>
          copyright@ 2021 portfolio website
        </footer>

      
      


      </div>
    
    );



}

}

export default App;
