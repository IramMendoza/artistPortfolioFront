import DownArrowSvg from '../../assets/media/down-svgrepo-com.svg'
import { motion } from 'framer-motion'
import { useWindowHeight } from '../../hooks/useWindowHeight'
import { useSimpleAnimation } from '../../hooks/useSimpleAnimation'
import { downArrowAnimation } from './animations/downArrowAnimation'

const DownArrow = () => {

    const device = useWindowHeight()

    const opacity = useSimpleAnimation(device, downArrowAnimation.opacityValues)

    return (
        <div className=" flex justify-center pt-[15rem]">
            <motion.img
                style={{ opacity: opacity }}
                className=" w-[3rem]"
                src={DownArrowSvg} />
        </div>
    )
}

export default DownArrow
