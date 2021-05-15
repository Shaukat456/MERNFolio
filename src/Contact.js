import React, { useEffect, useRef, useState } from 'react'
import Shaukat from './Shaukat'
import styled from "styled-components";

import Navbar from './Navbar'
import { set } from 'mongoose';
import { Fade, LightSpeed } from 'react-reveal';


const Contact = () => {

  //Styled Component

  const ContactForm = styled.div `
  display:flex;
  flex-direction:column
  // justify-content:center;
  transition:all .5s ease;
  padding:1.1em;
  flex-wrap:wrap

  // align-items:center;

  & > h1{
    // display:block;
  justify-content:center;
  flex-direction:column
  flex-wrap:wrap
  transition:all .5s ease;
}
  `;



  const Cinput = styled.input`
display:flex;
  justify-content:center;
  flex-direction:column;
  transition:all .5s ease;
  font-size:2rem;
  flex-wrap:wrap;
  text-transform:capitalize;
  font-family:monospace;
  border-radius:20px ;
  outline: black;
  transition:all .5s ease;

  &:focus {
    background-color:black;
    color:green;
  transition:all .5s ease;
    outline: none;
    box-shadow: 0px 0px 6px yellow; 
}&:hover{
  transition:all .5s ease;

} 
  &:last-child:focus {
  

    transtion:all .5s ease;
    color:orange;
    
   
    box-shadow: 0px 0px 10px yellow; 
  }
  `;
<Navbar/>
  const [Button, setButton] = useState('HIRE ME ');
  const [Contact,setContact]=useState()
const SeeContact=()=>{
  var Clicked=()=>{
  return (
    <>
      <ContactForm>
    <Fade  bottom>
    <Cinput type='Name' autoFocus autoCapitalize placeholder=' NAME' />
        <Cinput type='email' placeholder='Email' />
        <Cinput type='text' placeholder='Hire me Or Lets Talk ' />
        </Fade >
        </ContactForm>
    </>
  )
  
}


setContact(Clicked) ?  console.log('') : setButton('DOUBLE CLICK TO HIDE')
  // setButton(Clicked)  

}


  const input = useRef('')
  // useEffect(()=>{
  // setButton(true)
  //   // input.current.value < 5 ? setButton('Send Now') : setButton('Share Response')

  // },[Button])
  return (

    <>
      {/* <div className='contact'> 
<h1>CONTACT </h1>
<input type='text'  ref={input} placeholder='Name' />
<input type='text'  ref={input} placeholder='EMAIL' />
<button  >  {Button} </button>
</div> */}

      <div className='N'>
  <button   onClick={SeeContact} onDoubleClick={()=>[setButton('show'), <> <Fade left duration={1000} >  { setContact('')} </Fade> </>   ]} >{Button}</button>
        <h1 >CONTACT</h1>
  </div>
      <ContactForm>
        { Contact}
      </ContactForm>

    </>
  )
}

export default Contact;