import React from 'react'
import "react-router-dom"
import {Fade}  from  'react-reveal'
import { NavLink, Switch,Route, useLocation } from 'react-router-dom'
import Shaukat from './Shaukat'
import Contact from './Contact'
// import 'react-scroll'
import { scroller } from 'react-scroll';



const Navbar=()=>{
   const navs=useLocation();


    return (
        <React.Fragment>
{/*            
            <Switch>
            <Route exact path='/' component={Shaukat}  />
            <Route exact path='/Portfolio'  />
            <Route exact path='/Contact' component={Contact}  />
            </Switch> */}

{/* WHAT REALLY RENDERS! */}
      <Fade top> 
        <div className='nav'> 
            <NavLink    className='navL'     to='/PortFolio' activeClassName="selected" >
                
                 PORTFOLIO 
            
                 </NavLink>
 
 
            <NavLink  className='navL'    to='/Contact' activeClassName="selected" > 
            
            Contact ME 
            
            
            
            </NavLink>
            <NavLink   className='navL'   to='/' activeClassName="selected" > 
            
            About
          

            
              </NavLink>
            </div>
            </Fade>
        </React.Fragment>
    )
}

export default Navbar;