import ImageAboutPng from "../../assets/media/PNGtheNewAbnormal.png"
import { motion, useScroll, useTransform } from "framer-motion"


const ImageAbout = ({refContainer}) => {

    const { scrollYProgress } = useScroll(
        { target : refContainer, offset : ['start end', 'end start'] }
    )

    const movementX = useTransform(scrollYProgress, [0, 0.1, 0.4, 1],['200%','200%', '37%', '37%'])

  return (
      <div className=" w-full flex justify-end overflow-visible">
        <motion.img
        className=" absolute z-50"
        style={{ x : movementX }} 
        src={ImageAboutPng} />
      </div>
  )
}

export default ImageAbout
