import React from 'react'

import './Background.css';
import photo from '../img/photo.jpg';

const Background = () => {
    return (
       <div >
           <img className="fond" src= {photo} alt=" fond avec une citrouille"/>
       </div> 
    )
}

export default Background;