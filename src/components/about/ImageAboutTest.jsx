import ImageAboutPng from "../../assets/media/PNGtheNewAbnormal.png"
import { motion, useScroll, useTransform } from "framer-motion"


const ImageAbout = ({refContainer}) => {

    const { scrollYProgress } = useScroll(
        { target : refContainer, offset : ['start end', 'end start'] }
    )

    const movementX = useTransform(scrollYProgress, [0, 0.2, 0.4, 1],['100%','100%','20%','20%'])

  return (
    <div className=" flex justify-end">
      <motion.img
      style={{ x : movementX }} 
      src={ImageAboutPng} />
    </div>
  )
}

export default ImageAbout
