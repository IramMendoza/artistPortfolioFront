import ArtistName from './ArtistName.jsx'
import Slogan from './Slogan.jsx'
import HeaderBackground from './HeaderBackground.jsx'
import GalleryContainer from './GalleryContainer.jsx'
import DownArrow from "./DownArrow.jsx"
import { useGetData } from "../../hooks/useGetData.js"
import { artistHeader } from '../../../apiConfig.js'
import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const Header = ({ name, slogan }) => {
    
    const [refInView, inView] = useInView(true)
    const galleryContainerReference = useRef(null)
    const container = useRef(null)
    const [width, setWidth] = useState(0)

    function handleResize() {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const { data, error } = useGetData(artistHeader)

    return (

        <motion.section className={`h-[180vh] overflow-hidden ${width > 1000 ? 'h-[170vh]' : ''}`}
            ref={container} transition={{ duration: 1 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }}>

            <div ref={refInView}>

                <HeaderBackground>
                    <div className=' h-screen flex justify-center'>
                        <div className=' top-[30vh] fixed z-50'>
                            <ArtistName name={name} reference={galleryContainerReference} galleryReference={inView} />
                            <Slogan slogan={slogan} reference={container} />
                        </div>
                        <DownArrow reference={container} />
                    </div>
                </HeaderBackground>

                <div ref={galleryContainerReference}>
                    <GalleryContainer pictures={data ? data : []} />
                </div>
           
            </div>

        </motion.section>

    )
}

export default Header