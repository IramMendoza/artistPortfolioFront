import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect } from "react"

function Arrow ({ arrowPng, directionArrow, reference }){

  const { scrollXProgress } = useScroll(
    { target : reference, offset : ['start end', 'end start'] }
  )

  const rightArrowAnimation = useTransform(scrollXProgress, [0, 1],[2,0])

  const leftArrowAnimation = useTransform(scrollXProgress, [0, 0.2, 1],[1, 1, 0])

  useEffect(() => {
    console.log(`movementX: ${scrollXProgress}`);
  }, [scrollXProgress]);

    return (
      <motion.img
        style={{ style : directionArrow === 'left' ? leftArrowAnimation : rightArrowAnimation }}
        animate={{ opacity: [1, 0, 1], transition: { duration: 3, repeat: Infinity } }}
        className="w-[5vh]" 
        src={arrowPng}/>
      )
    }

export default Arrow