import ImageAboutPng from "../../assets/media/PNGtheNewAbnormal.png"
import { motion } from "framer-motion"
import { useRefAnimation } from "../../hooks/useRefAnimation"
import { useWindowWidth } from "../../hooks/useWindowWidth"
import { imageAboutAnimation } from "./animations/imageAboutAnimation"


const ImageAbout = ({refContainer}) => {

    const device = useWindowWidth()

    const movementX = useRefAnimation(device, imageAboutAnimation.movementValues, refContainer)

  return (
      <motion.div
      style={{ x : movementX }}
      className=" w-full flex justify-end pb-10">
          <img src={ImageAboutPng} />
      </motion.div>
  )
}

export default ImageAbout
