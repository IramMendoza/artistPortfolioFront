import { motion } from 'framer-motion'
import { useWindowWidth } from "../../hooks/useWindowWidth"
import { useSimpleAnimation } from "../../hooks/useSimpleAnimation"

const MovingContainer = ({children, movementValues}) => {

    const device = useWindowWidth()

    const movement = useSimpleAnimation(device, movementValues)

    return (
        <motion.div
            style={{ y : movement }}
        >
            {children}
        </motion.div>
    )
}

export default MovingContainer