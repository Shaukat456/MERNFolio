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
import { SubdirectoryArrowLeftRounded } from '@material-ui/icons';



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
           
         </Fade>
        <Fade left>
    <p>  
    I am <strong> Shaukat Sohail</strong> , A <strong>FULL STACK WEB DEVELOPER</strong> , i am currently in intermediate (Science) but
    having deep interest in programming & development of various software operations I managed to become a web developer .   
         </p>
        </Fade>
         
</div>
        <div className='techs' > 
        <h3> TECHNOLOGIES I'VE WORKED WITH</h3>
        <ul>

     {/* • MATERIAL UI • JWT .  */}

         <li>  HTML5 </li>
         <li>          CSS3 </li>
         <li> JAVASCRIPT (ES5/6)</li>
         <li> REACT.js</li>
         <li>  NODE.js</li>
         <li> EXPRESS.js</li>
         <li> GIT / GITHUB </li>
        </ul>
        </div>



            {/* </Fade>
            </div> */}

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