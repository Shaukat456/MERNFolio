import React from 'react'
import "react-router-dom"
import {Fade}  from  'react-reveal'
import { NavLink, Switch,Route, useLocation } from 'react-router-dom'
import Shaukat from './Shaukat'



const Navbar=()=>{
    const c=useLocation()
    console.log(c)
    return (
        <React.Fragment>
           
            <Switch>
            <Route exact path='/' />
            <Route exact path='/Portfolio'  />
            <Route exact path='/Contact'  />
            </Switch>

{/* WHAT REALLY RENDERS! */}
      <Fade top> 
        <div className='nav'> 
            <NavLink  className='navL'  exact  to='/PortFolio' activeClassName="selected" > PORTFOLIO </NavLink>
            <NavLink  className='navL'  exact  to='/Contact' activeClassName="selected" > Contact ME </NavLink>
            <NavLink   className='navL' exact  to='/' activeClassName="selected" > About  </NavLink>
            </div>
            </Fade>
        </React.Fragment>
    )
}

export default Navbar;