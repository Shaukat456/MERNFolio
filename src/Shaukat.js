import React from 'react'
import { useState } from 'react'
// import 'https://fonts.googleapis.com/css2?family=Roboto&display=swap'

// import "react-reveal"
import { Bounce, Fade, LightSpeed } from 'react-reveal'
import './SHAUKAT.css';
// import icon from './favicon.ico'
// import icon from '../public/favicon.ico';
import styled from 'styled-components'

import Navbar from './Navbar'
import 'react-router-dom';
import { useLocation } from 'react-router-dom';
import DisplayPicture from './pppp.png'



const Portfolio=styled.div`
    display:flex;
    flex-wrap:wrap;
    text-align:center;
    justify-content:center;
    
    `;
const Sections=styled.h2`
    font-size:1.3rem
    border:2px solid green;
    // border-top:1px dotted white;
`;



const Shaukat=()=>{
  const [resume, setResume]=useState( )
  const [button ,setButton]=useState('See resume')

    const location=useLocation( );
    console.log(location)
    function seeResume(e){
   
   var show=()=>{

       return (
           <>
           <div className='intro'> 
    <Fade bottom >             <img    src={DisplayPicture}/>
           <h1> <strong>HEY, SHAUKAT HERE</strong> </h1>
    <p>  
        'I am 19 and a Mern Stack Developer who develops websites for various platforms, and being a Web app developer I am familar with
• JAVASCRIPT (ES5/6) 
• CSS3 • HTML5 • EXPRESS.js. • NODE.js   • REACT.js  • MATERIAL UI • JWT . • GITHUB

•  ABLE TO BUILD RESTful-APIs with Node/Express and MongoDB.
•  Can Make Responsive Web sites for cross platforms.
•  Can maintain both frontend and backend of web application.

My stack completes the full cycle of web development hence I am a Full Stack Web Developer.

Trying to manage programming along with my studies , I am always looking forward to learn something new and utilize my time in productive activities.

'   </p>
            </Fade>
            </div>

           </>
       )
    }
setResume(show) ? setButton('SHOW ') : setButton('Double tap to HIDE');
    //  console.log(e)

 
   
           
}
  
    return (
        <React.Fragment>

            <div className='N'> 
  <Bounce left  >          <h1>SHAUKAT SOHAIL </h1>     </Bounce> 
       <Fade left duration={1000} >          <h2> YOUR IDEA , MY CODE</h2>     </Fade>
    
    {/* Dynamic button hide/show */}
  <Bounce top right>  <button onDoubleClick={()=>[setResume('') ,setButton('SHOW')]}  onClick={ seeResume} className='intro' > { button} </button> 
  </Bounce >       <h3> {resume} </h3> 
       </div>

{/* <Navbar/> */}
           
    
        </React.Fragment>
    )
}

export default Shaukat;