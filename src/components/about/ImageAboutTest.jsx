import ImageAboutPng from "../../assets/media/PNGtheNewAbnormal.png"
import { motion, useTransform, useScroll } from "framer-motion"


const ImageAbout = ({ref}) => {

    const { scrollYProgress } = useScroll({
        target : ref,
        offset : ['start end', 'end start']
        }
    )

    const movementX = useTransform(scrollYProgress, [0, 0.3, 0.5, 1],[200,200, -500, -500])
    console.log(movementX)

  return (
      <motion.div
      style={{ x : movementX }}
      className=" w-full flex justify-end pb-10">
          <img src={ImageAboutPng} />
      </motion.div>
  )
}

export default ImageAbout
