import React, { useEffect, useRef, useState } from 'react'
import Shaukat from './Shaukat'
import styled from "styled-components";
import Navbar from './Navbar'


const Contact= ()=>{

    const [ Button, setButton]=useState(false);

  const input= useRef('')
  // useEffect(()=>{
    // setButton(true)
  //   // input.current.value < 5 ? setButton('Send Now') : setButton('Share Response')

  // },[Button])
return(

<>
<div className='contact'> 
<h1>CONTACT </h1>
<input type='text'  ref={input} placeholder='Name' />
<input type='text'  ref={input} placeholder='EMAIL' />
<button  >  {Button} </button>
</div>




    </>
)
}

export default Contact;