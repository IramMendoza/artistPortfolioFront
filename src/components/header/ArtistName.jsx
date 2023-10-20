import { useWindowWidth } from '../../hooks/useWindowWidth'
import { useSimpleAnimation } from '../../hooks/useSimpleAnimation'
import { motion } from 'framer-motion'

const ArtistName = ({ name }) => {

    const device = useWindowWidth()

    const opacityValues = {
        "Mobile": [[0, 0.320, 0.400 ,1], [1, 1, 0, 0]],
        "Tablet": [[0, 0.990, 1], [1, 1.7, 0]],
        "Laptop": [[0, 0.990, 1], [1, 1.7, 0]],
        "Desktop": [[0, 0.990, 1], [1, 1.7, 0]],
    }

    const movementValues = {
        "Mobile": [[0, 1], [0, 3400]],
        "Tablet": [[0, 1], [0, 3000]],
        "Laptop": [[0, 1], [0, 1800]],
        "Desktop": [[0, 1], [0, 1800]],
    }

    const colorValues = {
        "Mobile": [[0, 0.30, 0.32, 1], ["#ffffff", "#ffffff", "#FF2015", "#FF2015"]],
        "Tablet": [[0, 0.62, 1], ["#ffffff", "#ffffff", "#FF2015"]],
        "Laptop": [[0, 0.62, 1], ["#ffffff", "#ffffff", "#FF2015"]],
        "Desktop": [[0, 0.62, 1], ["#ffffff", "#ffffff", "#FF2015"]],
    }

    const opacity = useSimpleAnimation(device, opacityValues)

    const movement = useSimpleAnimation(device, movementValues)

    const color = useSimpleAnimation(device, colorValues)

    return (
        <div>
            <motion.h1
                id="titleContainer"
                className={`lg:text-[8rem] maxPh:text-[4rem] max-w[100%] text-[3rem] font-semibold text-slate-100 text-center pt-[13rem] relative z-50`}
                style={{ opacity: opacity, y: movement, color: color }}>
                {name}
            </motion.h1>
        </div>
    )
}

export default ArtistName