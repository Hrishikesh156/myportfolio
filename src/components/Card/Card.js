import Tom from '../../media/Tom.png';
import Robot from '../../media/robots.png';
import ML from '../../media/ML.png';
import './Card.css';
import GH from '../../media/github.png';
import Tilt from 'react-tilt'
const Card = () =>{
    return(
        <div>
            <h1 className="title" style={{marginTop:"200px" ,marginLeft:"100px" }}><b>Projects</b></h1>
    <div className="project-cards" id = "project">
            
            
            <div className="card" >
           
            <img src={Tom} alt="Avatar" style={{width:300 , height:400}} />
            <div className="container">
            <h4><b>Face Detection</b></h4>
            <p>1.Register & sigin<br />
                2. Click detect   <br />
                3. Check your Rank </p>
                <div className="center">
                <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
               <div className="Tilt-inner">
               <a href="https://github.com/Hrishikesh156/FaceDetection.git"  target="_blank" rel="noreferrer noopener">
                    <img src={GH} alt="github" />

                </a> 
                </div>
               </Tilt>

                </div>
 

            </div>
                
            
            </div>
    

         <div className="card" >
         <img src={Robot} alt="Avatar" style={{width:300 , height:400}} />
         <div className="container">
         <h4><b>Search & Create Robots</b></h4>
         <p>Here are various robots and their attribites mentioned on the card.<br />
            Create your own robot cards</p>
            <div className="center">
                <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
               <div className="Tilt-inner">
               <a href="https://github.com/Hrishikesh156/robofriends.git"  target="_blank" rel="noreferrer noopener">
                    <img src={GH} alt="github" />

                </a> 
                </div>
               </Tilt>

                </div>
            
         </div>
         </div>

         <div className="card" >
         <img src={ML} alt="Avatar" style={{width:400 , height:500}} />
         <div className="container">
         <h4><b>Face Identification in Python</b></h4>
         <p>This project is to train ML model to identify someone's face in python. </p>
         <div className="center">
                <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
               <div className="Tilt-inner">
               <a href="https://github.com/Hrishikesh156/FaceIdentification.git"  target="_blank" rel="noreferrer noopener">
                    <img src={GH} alt="github" />

                </a> 
                </div>
               </Tilt>

                </div>
         </div>
         </div>
    </div>



</div>
       
        


    );
}
export default Card;