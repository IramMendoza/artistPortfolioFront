import { useWindowHeight } from "../../hooks/useWindowHeight"
import { useRefAnimation } from '../../hooks/useRefAnimation'
import { motion } from 'framer-motion'
import { artistNameAnimation } from './animations/artistNameAnimation'

const ArtistName = ({ name, reference }) => {

    const device = useWindowHeight()
    console.log(device)

    const opacity = useRefAnimation(device, artistNameAnimation.opacityValues, reference)

    const movement = useRefAnimation(device, artistNameAnimation.movementValues, reference)

    const color = useRefAnimation(device, artistNameAnimation.colorValues, reference)

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