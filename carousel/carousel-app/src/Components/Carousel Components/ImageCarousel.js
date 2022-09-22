import React, { useState } from 'react'
import { ImageCarouselData } from './ImageCarouselData';
import { useCurrMousePosition } from './MouseTracker';
import { useCurrWindow } from './WindowSizeTracker';

export default function ImageCarousel() {

  const currMousePosition = useCurrMousePosition(); // tracks current mouse position
  const [currWindowWidth, currWindowHeight] = useCurrWindow() // tracks current window dimensions
  const [currImgIndex, setImgIndex] = useState(0); // stores and updates current carousel image index
  var carouselToggleStatus = ""; // stores whether screen click should trigger next slide, prev slide, or neither

  if (ImageCarouselData.length === 0) return


  /*
    * updates (based on mouse position) whether a screen click should trigger next slide, prev slide, or neither
        by updating carouselToggleStatus
    * also updates the cursor icon accordingly
  */
  if (currMousePosition.x <= currWindowWidth * 0.25 && currMousePosition.y >= currWindowHeight * 0.095) {
    carouselToggleStatus = "previous";
    document.body.style.cursor = "w-resize";
  } else if (currMousePosition.x >= currWindowWidth * 0.75 && currMousePosition.y >= currWindowHeight * 0.095) {
    carouselToggleStatus = "next";
    document.body.style.cursor = "e-resize";
  } else {
    carouselToggleStatus = "";
    document.body.style.cursor = "default";
  }


  /*
    * when user clicks the screen, the carousel is toggled based on imageToggleStatus by incrementing / decrementing currImgIndex 
    * ternary operator is used to cycle back to beginning / end of images (avoid index out of bounds error)
  */
  document.onclick = function() {
    if (carouselToggleStatus === "next") {
      setImgIndex((currImgIndex === ImageCarouselData.length - 1) ? 0 : currImgIndex + 1)
    } else if (carouselToggleStatus === "previous") {
      setImgIndex((currImgIndex === 0) ? ImageCarouselData.length - 1 : currImgIndex - 1)
    }
  };


  /*
    * returns carousel to be displayed on the screen
  */
  return (
    <div class="carouselContainer">
      
      {ImageCarouselData.map( (image, index) => {
        
        return(
          
          // classes active and inactive allow toggling / animating visibility of the images in the carousel (see App.cs)
          <div
            className = {index === currImgIndex ? 'active' : 'inactive'}
            key={index}
          >
            <img class="carouselImage" src={image} alt='travel'/>
          </div>
        );
        
      })}
      
    </div>
  )
  
}