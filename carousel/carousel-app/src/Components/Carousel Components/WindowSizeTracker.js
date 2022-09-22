import { useState, useEffect } from "react";


/**
 * function tracks window size (used in ImageCarousel.js) with useState and useEffect hooks
 */
export const useCurrWindow = () => {
  const [
    windowWidth,
    setWindowWidth
  ] = useState(window.innerWidth);

  const [
    windowHeight,
    setWindowHeight
  ] = useState(window.innerHeight);

  useEffect(() => {
    const updateWindow = () => {
      setWindowWidth(window.innerWidth)
      setWindowHeight(window.innerHeight)
    };
    
    window.addEventListener('resize', updateWindow);

    return () => {
      window.removeEventListener('resize', updateWindow);
    };
  }, []);

  return [windowWidth, windowHeight];
}