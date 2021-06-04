import React, { useEffect, useRef, useState } from 'react'
import Shaukat from './Shaukat'
import styled from "styled-components";
import Navbar from './Navbar'
import Contact from './Contact'
import Author from './Author'
import {Route , Switch,useLocation} from 'react-router-dom'
import  scroller  from 'react-scroll'
import './index.css'
const App= ()=>{
    
    
return(
    <>
 <React.Fragment>
           
           {/* <Switch> */}

        
           <Route exact path='/'  />
           <Route exact path='/Portfolio'   />
           

           <Route exact  path='/Contact'    />
           {/* </Switch> */}
           </React.Fragment>




<Navbar/>
<Shaukat/>
<Contact/>
<Author/>

<footer>
    Shaukat Sohail &copy; 


</footer>
    </>
)
}

export default App;