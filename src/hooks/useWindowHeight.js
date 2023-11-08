import { useState, useEffect } from "react"

export const useWindowHeight = () => {
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
      function handleResize() {
        setHeight(window.innerHeight);
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    if ( height <= 600 ){ return "Very Small Device" }
    if ( height <= 800 ){ return "Small Device" }
    if ( height <= 900 ){ return "Medium Device" }
    if ( height <= 1000 ){ return "Large Device" }
    if ( height <= 1200 ){ return "Very Large Device" }
    if ( height <= 1300 ){ return "Tablet Device" }
}