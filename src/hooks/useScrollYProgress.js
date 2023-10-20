import { useScroll, useTransform } from "framer-motion"

export const useScrollYProgress = (array1, array2) => {
    const { scrollYProgress } = useScroll()
    return useTransform(scrollYProgress, array1, array2)

}