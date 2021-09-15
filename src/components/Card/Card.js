import Tom from '/Projects/myportfolio/src/media/Tom.png';
import Robot from '/Projects/myportfolio/src/media/robots.png';
import ML from '/Projects/myportfolio/src/media/ML.png';
import './Card.css';
import GH from '/Projects/myportfolio/src/media/github.png';
import Tilt from 'react-tilt'
const Card = () =>{
    return(
        <div>
            <h1 className="title" style={{color:"white",marginTop:"200px" }}>Projects</h1>
    <div className="project-cards" id = "project">
            
            
            <div className="card" >
           
            <img src={Tom} alt="Avatar" style={{width:400 , height:500}} />
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
         <img src={Robot} alt="Avatar" style={{width:400 , height:500}} />
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
         <p>This project is to train ML model to identify someone's face. By changing training data set  in Image folder you can reuse this model.</p>
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