import ImageAboutPng from "../../assets/media/PNGtheNewAbnormal.png"
import { motion } from "framer-motion"
import { useWindowWidth } from "../../hooks/useWindowWidth"
import { useSimpleAnimation } from "../../hooks/useSimpleAnimation"

const ImageAbout = () => {

  const device = useWindowWidth()
  
  const movementValues = {
    "Mobile" : [[0,0.25,0.28, 1],[+200,+200,0,0]],
    "Tablet" : [[0,0.20,0.23, 1],[+200,+200,0,0]],
    "Laptop" : [[0,0.39,0.46, 1],[0,0,200,200]],
    "Desktop" : [[0,0.39,0.46, 1],[0,0,200,200]]
  }

  const movement = useSimpleAnimation(device, movementValues)

  return (
      <motion.div
      style={{ x : movement }}
      className=" w-full flex justify-end pb-10">
          <img src={ImageAboutPng} />
      </motion.div>
  )
}

export default ImageAbout
