import Img from '../src/prp.jpg';
import {useState } from 'react'

const Author=()=>{
const [btn,setbtn]=useState('hahaha');

function fuc (){
    function shh(){

        return (
            <>
        <div  className='rend'>
        <h1>{btn}</h1> 
        <h1>ahahahah</h1> 
    </div>
        </>
    )
}
setbtn(shh)
}

return(<>


    <div className='introduction'> 
        
    <h2> From the Author Himself </h2>
    </div>
  <div className='Author' >
      <figure>
          <img src={Img} />
      </figure>
    <p> 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacinia aliquet tincidunt. Morbi placerat, ex in dictum congue, sapien eros pretium orci, ac aliquam arcu dui ultrices metus. Suspendisse sed dui vitae ipsum faucibus lobortis. Nunc felis nisl, vulputate sed pretium et, iaculis tincidunt enim. Morbi sed accumsan magna. Nunc euismod ipsum quis gravida lacinia. Pellentesque consectetur in velit in placerat. Nunc bibendum rhoncus urna, sed auctor felis ullamcorper id. Aliquam sit amet suscipit enim.

Suspendisse nec blandit odio, eget mollis erat. Vivamus cursus pharetra mauris, non vulputate nulla lobortis et. Duis vel leo in sem pulvinar lobortis. Nullam commodo venenatis felis, nec cursus sem suscipit at. Aliquam placerat, lacus eget accumsan molestie, sem arcu volutpat nisl, at interdum arcu metus et odio. Vestibulum nec tincidunt nisl. Etiam auctor rhoncus rutrum. Nunc ullamcorper turpis justo, eu euismod nisi malesuada maximus. Sed nec lacinia sapien. Nullam a ultricies dui, vel ullamcorper nunc. Nullam placerat efficitur diam sed tincidunt. Nulla convallis tellus a augue iaculis sagittis. Aliquam iaculis erat non dolor dignissim, ut hendrerit justo pretium. Curabitur non tincidunt purus.

Phasellus egestas imperdiet velit, vitae rutrum augue ullamcorper eget. Proin maximus scelerisque imperdiet. Praesent scelerisque volutpat eros eu vestibulum. Phasellus feugiat viverra blandit. Nunc molestie felis non lorem vehicula lobortis. Integer ac justo non sapien eleifend placerat vel at quam. Cras vitae eros urna. Aliquam eget semper diam, a viverra ante. Nunc semper eleifend erat varius sodales. Nullam viverra dolor at semper vestibulum.

Mauris sit amet quam id turpis egestas fermentum. Aenean feugiat est vel enim malesuada, ut convallis diam dignissim
Maecenas vulputate urna id lectus consequat scelerisque. Donec elit velit, pretium a justo eget, feugiat blandit odio. Sed bibendum urna ut eros elementum, in ultrices neque euismod. Proin eu est a risus euismod mollis a ac risus. Quisque eu placerat ante, a scelerisque dui. Donec non purus nisi. Nullam imperdie
         </p>
         </div>

        <button onClick={fuc}>  RENDER THIS SHIT </button> 
    
    </>)
}


export default Author;