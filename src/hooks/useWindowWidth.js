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
    if (width <= 426) return "Mobile"
    if (width > 426 && width <= 768) return "Tablet"
    if (width > 768 && width <= 1024 ) return "Laptop"
    if (width > 1024) return "Desktop"
  }
  
  

  return device
}

