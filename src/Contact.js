import React, { useEffect, useRef, useState } from 'react'
import Shaukat from './Shaukat'
import styled from "styled-components";

import Navbar from './Navbar'
// import { set } from 'mongoose';
import { Fade, LightSpeed } from 'react-reveal';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Contact = () => {

  //Styled Components

  const ContactForm = styled.div `
  display:flex;
  flex-direction:column
  justify-content:center;
  transition:all .5s ease;
  padding:1.1em;
  flex-wrap:wrap

  // align-items:center;

  & > h1{
    display:flex;
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

const SocialMedia=[
  {
    Name:'LinkedIN',
    Site:'https://www.linkedin.com/in/shaukat-sohail-012aaa167/',
    // icons:`<LinkedInIcon>  </LinkedInIcon>`
    icons:<LinkedInIcon></LinkedInIcon>
  },
 { Name:'Github',
  Site:'https://github.com/Shaukat456',
  icons:<GitHubIcon></GitHubIcon> 
} ,
{Name:'Facebook',
Site:'https://www.facebook.com/shoukat.sohail.58/',
icons:<FacebookIcon></FacebookIcon>

}
]


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
 <div className='N' >
    <button> SEND </button>
    </div>
        </Fade >

        </ContactForm>
    </>
  )
  
}


setContact(Clicked) ?  console.log('') : setButton('DOUBLE CLICK TO HIDE')
  // setButton(Clicked)  

}


  const input = useRef('')
  
  return (

    <>
      {/* <div className='contact'> 
<h1>CONTACT </h1>
<input type='text'  ref={input} placeholder='Name' />
<input type='text'  ref={input} placeholder='EMAIL' />
<button  >  {Button} </button>
</div> */}

      <div className='N'>
        <h1 >LET GET IN TOUCH</h1>
  <button   onClick={SeeContact} onDoubleClick={()=>[setButton('HIRE'), <> <Fade left duration={1000} >  { setContact('')} </Fade> </>   ]} >{Button}</button>
  </div>
      <ContactForm>
        { Contact}
      </ContactForm>


{SocialMedia.map((links , ke)=>{
  return <>
  <div className='l' key={ke} >
    <h1 >{links.Name}</h1>
   <a  href={links.Site} >  
  <i> {links.icons} </i>
     </a>
  

  </div>
  </>
})}

    </>
  )
}

export default Contact;