import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useWindowWidth } from '../../hooks/useWindowWidth'
import { useRandomNumber } from '../../hooks/useRandomNumber'
import { useSimpleAnimation } from '../../hooks/useSimpleAnimation'

const MovingPicture = ({ id, item }) => {

  const [scale, setScale] = useState('')
  const [padding, setPadding] = useState('')
  const [randomMovement, setRandomMovement] = useState('')

  const device = useWindowWidth()

  const movementValues = {
    "Mobile": [[0, 1], [0, +randomMovement]],
    "Tablet": [[0, 1], [0, +randomMovement]],
    "Laptop": [[0, 1], [0, +randomMovement]],
    "Desktop": [[0, 1], [0, +randomMovement]]
  }

  const opacityValues = {
    "Mobile": [[0, 0.8], [1, 0]],
    "Tablet": [[0, 0.8], [1, 0]],
    "Laptop": [[0, 0.8], [1, 0]],
    "Desktop": [[0, 0.8], [1, 0]],
  }

  const movement = useSimpleAnimation(device, movementValues)

  const opacity = useSimpleAnimation(device, opacityValues)


  useEffect(() => {
    // Generar un número aleatorio entre 75-120
    const randomScale = useRandomNumber(75, 120)
    // Convertirlo en una cadena con "%" al final
    setScale(`${randomScale}%`)

    const randomPadding = useRandomNumber(3, 10) - 3
    setPadding(randomPadding)

    const randomMovement = useRandomNumber(3000, 5000) - 7000
    setRandomMovement(randomMovement)
  }, [])



  return (

    <motion.div className={` w-[100%] h-auto rounded-xl p-2`} style={{ paddingLeft: padding }}>
      <motion.img
        data-style="photo"
        id={id}
        className=" rounded-s-2xl"
        style={{ y: movement, opacity: opacity, scale: scale }}
        src={item.photo}
      />
    </motion.div>


  )
}

export default MovingPicture