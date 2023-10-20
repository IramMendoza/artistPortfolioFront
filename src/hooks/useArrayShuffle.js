import { useState, useEffect } from 'react'

export const useArrayShuffle = (array) => {

  const [shuffledArray, setShuffledArray] = useState([])

  useEffect(() => {
    // Inicializar el array aleatorio
    setShuffledArray(array)

    // Shuffle el array
    const shuffleArray = () => {
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
      }
    }

    // Shuffle el array cada vez que el componente se renderiza
    shuffleArray()

    // Limpiar el array aleatorio cuando el componente se desmonta
    return () => setShuffledArray([])

  }, [array])

  return shuffledArray

}
