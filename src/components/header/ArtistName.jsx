import { useWindowHeight } from "../../hooks/useWindowHeight"
import { useRefAnimation } from '../../hooks/useRefAnimation'
import { motion } from 'framer-motion'
import { artistNameAnimation } from './animations/artistNameAnimation'

const ArtistName = ({ name, reference }) => {

    const device = useWindowHeight()

    const opacity = useRefAnimation(device, artistNameAnimation.opacityValues, reference)

    const color = useRefAnimation(device, artistNameAnimation.colorValues, reference)

    return (
        <motion.div className=" flex justify-center" style={{ opacity: opacity, color: color }}>
            <h1
                id="titleContainer"
                className={`lg:text-[8rem] maxPh:text-[4rem] max-w[100%] text-[3rem] font-semibold text-slate-100 text-center`}>
                {name}
            </h1>
        </motion.div>
    )
}

export default ArtistName