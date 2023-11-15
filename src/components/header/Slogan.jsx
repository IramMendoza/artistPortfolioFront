import { motion, useScroll, useTransform } from "framer-motion"

const Slogan = ({ slogan, reference }) => {

  const { scrollYProgress } = useScroll(
    { target : reference }
  )

  const opacity = useTransform(scrollYProgress,[0, 0.03, 1],[1, 0, 0])

  return (
      <motion.h1
        className={`text-[11px] md:text-[15px] lg:text-[20px] text-slate-100 text-center`}
        style={{ opacity: opacity }}>
        {slogan}
      </motion.h1>
  )
}

export default Slogan
