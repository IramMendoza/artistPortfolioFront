import { useState, useEffect } from 'react'

export const useHowMuchToRender = (array, numberToRender) => {
  const [renderedArray, setRenderedArray] = useState([])

  useEffect(() => {
    if (Array.isArray(array)) {
      // Comprueba si el número de elementos a renderizar es menor o igual al tamaño del array.
      const slicedArray = array.slice(0, numberToRender)
      setRenderedArray(slicedArray)
    }
  }, [array, numberToRender])

  return renderedArray
}

