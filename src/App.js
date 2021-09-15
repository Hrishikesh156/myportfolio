import './App.css';
import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Navbar  from './components/Navbar/Navbar';
import Card  from './components/Card/Card';
import Tech from './components/Tech/Tech';
import Contact  from './components/Contact/Contact';
import Hand from './media/Hand.gif';
import Dp from './media/dp3.jpeg';
import Tilt from 'react-tilt';
import Education  from './components/Education/Education';
const particlesOpt={
        
    

  particles: {
      number:{
          value:200,
          density:{
              enable:true,
              value_area:1000
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

      <div className="intro" id="home">
        <span className="wave">
        Hii &nbsp;
        <img src= {Hand} alt = "hand" width="35px" />
          &nbsp;, I'm Hrishi.
        </span>
        <div className="center">
        <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
        <div className="Tilt-inner">
        <img src={Dp} alt="me" class="rounded-circle" height="200" width="200" style = {{margin:"40px"}}></img>
           
        </div>
        </Tilt>

        </div>      

        
        <span className="wave">
          I'm a Web Developer & Android Developer.
        </span>
        <p>
          
        </p>
        <Tech />
        <Card />
        
        <Education />

        <Contact />

      </div>
      


      </div>
    
    );



}

}

export default App;
