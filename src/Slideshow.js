import { useState, useRef, useEffect } from "react";
import hero from './images/borabora.jpeg'
import hero2 from './images/hero-city.jpg'
import hero3 from './images/hero-arctic.jpg'
import hero1 from './images/mountain-hero.jpg'
import 'react-slideshow-image'
import React from 'react'
import { Slide } from 'react-slideshow-image'



const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;
//const slideImages = [hero, hero1, hero2, hero3]


const slideImages = ["'https://media.istockphoto.com/photos/the-empire-state-picture-id1089200736?k=20&m=1089200736&s=612x612&w=0&h=0gT-injpIgrI-CPGsgpR0kOBVDqsoXArahvsTflt_FU=",
"https://www.intrepidtravel.com/sites/intrepid/files/basic_page/files/Ships-link_arctic.jpg",
"https://media.istockphoto.com/photos/watzmann-in-alps-dramatic-reflection-at-sunset-national-park-picture-id1136834574?k=20&m=1136834574&s=612x612&w=0&h=Mr2LOsCOOguErmwDGCMV61u0D_vKGa-xO-EEydwA8a4="]



const length = slideImages.length
function Slideshow() {
  const [current, setCurrent] = useState(0)
  
  return (
    <div className="slide-container">
    <Slide>
     {slideImages.map((slideImage, index)=> (
        <div className="each-slide" key={index}>
          <img src={slideImage} />
        </div>
      ))} 
    </Slide>
  </div>
  );
}

export default Slideshow;