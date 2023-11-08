import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useWindowHeight } from '../../hooks/useWindowHeight'
import { useRandomNumber } from '../../hooks/useRandomNumber'
import { useRefAnimation } from '../../hooks/useRefAnimation'
import { movingPictureAnimation } from './animations/movingPictureAnimation'

const MovingPicture = ({ id, item, ref }) => {

  const [scale, setScale] = useState(0)
  const [padding, setPadding] = useState(0)
  const [randomMovement, setRandomMovement] = useState(0)

  useEffect(() => {
    // Generar un número aleatorio entre 75-120
    const randomScale = useRandomNumber(75, 150)
    // Convertirlo en una cadena con "%" al final
    setScale(`${randomScale}%`)

    const randomPadding = useRandomNumber(3, 10) - 3
    setPadding(randomPadding)

    const randomMovement = useRandomNumber(3000, 5000) - 7000
    setRandomMovement(randomMovement)
  }, [])

  const device = useWindowHeight()

  const movementValues = {
    "Very Small Device": [[0, 1], [0, +randomMovement]],
    "Small Device": [[0, 1], [0, +randomMovement]],
    "Medium Device": [[0, 1], [0, +randomMovement]],
    "Large Device": [[0, 1], [0, +randomMovement]],
    "Very Large Device" : [[0, 1], [0, +randomMovement]],
    "Tablet Device" : [[0, 1], [0, +randomMovement]],
  }

  //conservo esta animacion aqui para poder tener el valor random disponible

  const movement = useRefAnimation(device, movementValues, ref)

  const opacity = useRefAnimation(device, movingPictureAnimation.opacityValues, ref)

  return (

    <motion.div className={` w-[100%] h-auto rounded-xl p-2`} style={{ paddingLeft: padding }}>
      <motion.img
        data-style="photo"
        id={id}
        className=" rounded-s-2xl"
        style={{ y: movement, opacity: opacity, scale: scale }}
        src={item.picture}
      />
    </motion.div>


  )
}

export default MovingPicture