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
     

      
        
      
        <About />
        <Tech />
        <Card />
        
        <Education />

        <Contact />
        <footer>
          copyright@ 2022 portfolio website
        </footer>

      
      


      </div>
    
    );



}

}

export default App;
