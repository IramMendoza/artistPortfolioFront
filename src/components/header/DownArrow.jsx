import DownArrowSvg from '../../assets/media/down-svgrepo-com.svg'
import { motion, useScroll, useTransform } from 'framer-motion'

const DownArrow = ({ reference }) => {

    const { scrollYProgress } = useScroll(
        { target : reference }
    )

    const opacity = useTransform(scrollYProgress, [0, 0.03, 1],[1, 0, 0])

    return (
        <div className="flex justify-center">
            <motion.img
                style={{ opacity: opacity }}
                className=" absolute bottom-0 w-[3rem]"
                src={DownArrowSvg} />
        </div>
    )
}

export default DownArrow
