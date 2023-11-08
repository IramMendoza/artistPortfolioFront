import { useState, useEffect } from 'react'

export function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [device, setDevice] = useState(getDeviceFromWidth(windowWidth))

  const handleResize = () => {
    const newWidth = window.innerWidth
    setWindowWidth(newWidth)
    setDevice(getDeviceFromWidth(newWidth))
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  function getDeviceFromWidth(width) {
    if ( width <= 320 ){ return 'Very Small Device' }
    if ( width <= 360 && width >= 321 ){ return 'Small Device' }
    if ( width <= 400 && width >= 361 ){ return 'Medium Device' }
    if ( width <= 430 && width >= 401 ){ return 'Large Device' }
    if ( width <= 800 && width >= 431 ){ return 'Tablet Device' }
    if ( width <= 900 && width >= 801 ){ return 'Large Tablet Device' }
    if ( width <= 1080 && width >= 901 ){ return 'Small Laptop Device' }
    if ( width <= 1200 && width >= 1001 ){ return 'Medium Laptop' }
    if ( width <= 1440 && width >= 1201 ){ return 'Large Laptop' }
    if ( width <= 1728 && width >= 1441 ){ return 'Very Large Laptop' }
    if ( width <= 1920 && width >= 1729 ){ return 'Desktop' }
    if ( width <= 2048 && width >= 1921 ){ return 'Large Desktop' }
  }
  
  return device
}

