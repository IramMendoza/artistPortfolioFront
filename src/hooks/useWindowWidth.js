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
  
  return device
}

