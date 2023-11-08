import { motion } from 'framer-motion'
import { useWindowWidth } from "../../hooks/useWindowWidth"
import { useWindowHeight } from '../../hooks/useWindowHeight'
import { useRefAnimation } from '../../hooks/useRefAnimation'

const MovingContainer = ({children, movementValues, axis="y", refContainer}) => {

    const device = axis === 'y' ? useWindowHeight() : useWindowWidth()

    const movement = useRefAnimation(device, movementValues, refContainer)

    const style = axis === 'y' ? { y: movement } : { x: movement }

    return (
        <motion.div
            style={style}
        >
            {children}
        </motion.div>
    )
}

export default MovingContainer