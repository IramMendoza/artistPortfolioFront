import { useScroll, useTransform } from 'framer-motion'

export const useSimpleAnimation = (device, objectAnimationValue) => {

  const animationValue = objectAnimationValue[device]

  const { scrollYProgress } = useScroll()

  const animation = useTransform(scrollYProgress, animationValue[0], animationValue[1])

  return animation
}