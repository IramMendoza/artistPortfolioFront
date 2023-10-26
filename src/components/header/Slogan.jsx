import { motion } from "framer-motion"
import { useWindowWidth } from "../../hooks/useWindowWidth"
import { useSimpleAnimation } from "../../hooks/useSimpleAnimation"

const Slogan = ({slogan}) => {

  const device = useWindowWidth()

  const opacityValues = {
    "Mobile" : [[0, 0.01], [1, 0]],
    "Tablet" : [[0, 0.01], [1, 0]],
    "Laptop" : [[0, 0.01], [1, 0]],
    "Desktop" : [[0, 0.01], [1, 0]],

  }

  const movementValues = {
    "Mobile" : [[0, 1], [0, 1000]],
    "Tablet" : [[0, 1], [0, 1000]],
    "Laptop" : [[0, 1], [0, 1000]],
    "Desktop" : [[0, 1], [0, 1000]]
  }

  const opacity = useSimpleAnimation(device, opacityValues)

  const movement = useSimpleAnimation(device, movementValues)

  return (
      <motion.h1
          className={`text-[11px] md:text-[15px] lg:text-[20px] text-slate-100 text-center`}
          style={{ opacity: opacity, y: movement }}>
        {slogan}
      </motion.h1>
  )
}

export default Slogan
