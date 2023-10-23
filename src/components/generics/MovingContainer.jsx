import { motion } from 'framer-motion'
import { useWindowWidth } from "../../hooks/useWindowWidth"
import { useSimpleAnimation } from "../../hooks/useSimpleAnimation"

const MovingContainer = ({children, movementValues, axis="y"}) => {

    const device = useWindowWidth()

    const movement = useSimpleAnimation(device, movementValues)

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