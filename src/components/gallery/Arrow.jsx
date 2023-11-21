import { motion, useScroll } from "framer-motion"

function Arrow({ arrowPng, directionArrow, reference }) {

  const { scrollXProgress } = useScroll(
    { target: reference }
  )

  if ( scrollXProgress ){
    
  }

  return (
    <motion.img
      style={{ scale: 1 }}
      animate={{ opacity: [1, 0, 1], transition: { duration: 3, repeat: Infinity } }}
      className="w-[5vh]"
      src={arrowPng} />
  )
}

export default Arrow