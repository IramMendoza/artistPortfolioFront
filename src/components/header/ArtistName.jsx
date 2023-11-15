import { motion, useScroll, useTransform } from 'framer-motion'

const ArtistName = ({ name, homeReference, galleryReference }) => {

    const { scrollYProgress } = useScroll(
        { target : homeReference }
    )

    const opacity = useTransform(scrollYProgress, [0, 0.5, 0.6, 1],[1, 1, 0, 0])

    const color = useTransform(scrollYProgress,[0, 0.3, 0.5, 1],["#ffffff", "#ffffff", "#FF2015", "#FF2015"])
    

    return (
        <>
            {   galleryReference ?
                    <div className=" flex justify-center">
                        <motion.h1
                        style={{ opacity: opacity, color: color }}
                        id="titleContainer"
                        className={`lg:text-[15vh] md:text-[6rem] maxPh:text-[4rem] max-w[100%] text-[3rem] font-semibold text-slate-100 text-center`}>
                        {name}
                        </motion.h1>
                    </div>
                    : null
            }
        </>

    )
}

export default ArtistName