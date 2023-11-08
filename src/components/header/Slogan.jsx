import { motion } from "framer-motion"
import { useWindowHeight } from "../../hooks/useWindowHeight"
import { useSimpleAnimation } from "../../hooks/useSimpleAnimation"
import { sloganAnimation } from "./animations/sloganAnimation"

const Slogan = ({slogan}) => {

  const device = useWindowHeight()

  const opacity = useSimpleAnimation(device, sloganAnimation.opacityValues)

  return (
      <motion.h1
          className={`text-[11px] md:text-[15px] lg:text-[20px] text-slate-100 text-center`}
          style={{ opacity: opacity }}>
        {slogan}
      </motion.h1>
  )
}

export default Slogan
