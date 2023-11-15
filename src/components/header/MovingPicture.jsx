import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useRandomNumber } from '../../hooks/useRandomNumber'

const MovingPicture = ({ item, reference }) => {

  const [scale, setScale] = useState(0)
  const [padding, setPadding] = useState(0)
  const [randomMovement, setRandomMovement] = useState(0)

  useEffect(() => {
    // Generar un número aleatorio entre 75-120
    const randomScale = useRandomNumber(75, 200)
    // Convertirlo en una cadena con "%" al final
    setScale(`${randomScale}%`)

    const randomPadding = useRandomNumber(0, 5) - 3
    setPadding(randomPadding)

    const randomMovement = useRandomNumber(3000, 7000) - 13000
    setRandomMovement(randomMovement)
  }, [])

  const { scrollYProgress } = useScroll()

  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0])

  const y = useTransform(scrollYProgress,[0,1],[0,+randomMovement])

  return (

    <motion.div className=' lg:max-w-[20vh]' style={{ padding: padding }}>
      <motion.img
        data-style="photo"
        style={{ y: y, opacity: opacity, scale : scale }}
        src={item.picture}
      />
    </motion.div>


  )
}

export default MovingPicture