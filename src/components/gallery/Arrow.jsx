import { motion, useScroll, useTransform } from "framer-motion"

function Arrow ({ arrowPng, directionArrow }){

  const { scrollXProgress } = useScroll()

  const rightArrowAnimation = useTransform(scrollXProgress, [0, 0.95, 1],[1, 1, 0])

  const leftArrowAnimation = useTransform(scrollXProgress, [0, 0.5, 1],[0, 0, 1])

    return (
      <motion.img
        style={{ scale : directionArrow === 'left' ? leftArrowAnimation : rightArrowAnimation }}
        animate={{ opacity: [1, 0, 1], transition: { duration: 3, repeat: Infinity } }}
        className="w-[5vh]" 
        src={arrowPng}/>
      )
    }

export default Arrow