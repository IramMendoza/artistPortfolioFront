import { useScroll, useTransform } from 'framer-motion'

export const useRefAnimation = (device, objectAnimationValue, ref) => {

  const animationValue = objectAnimationValue[device]

  const { scrollYProgress } = useScroll(
    { target: ref, offset : ['start end', 'end start']}
  )

  const animation = useTransform(scrollYProgress, animationValue[0], animationValue[1])

  return animation
}