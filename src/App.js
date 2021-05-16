import React, { useEffect, useState } from 'react'
import Shaukat from './Shaukat'
import styled from "styled-components";
import Navbar from './Navbar'
import Contact from './Contact'
import {Route , Switch} from 'react-router-dom'

const App= ()=>{

return(
    <>
 <React.Fragment>
           
           <Switch>
           <Route exact path='/About'component={Shaukat}  />
           <Route exact path='/Portfolio'  />
           <Route exact path='/Contact' component={Contact}  />
           </Switch>
           </React.Fragment>




<Navbar/>
{/* <Shaukat/> */}
{/* <Contact/> */}
    </>
)
}

export default App;