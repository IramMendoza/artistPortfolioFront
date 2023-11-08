import ArtistName from '../header/ArtistName.jsx'
import Slogan from '../header/Slogan.jsx'
import HeaderBackground from '../header/HeaderBackground.jsx'
import GalleryContainer from '../header/GalleryContainer.jsx'
import DownArrow from "../header/DownArrow.jsx"
import { useGetData } from "../../hooks/useGetData.js"
import { artistHeader } from '../../../apiConfig.js'
import { motion } from 'framer-motion'
import { useRef } from 'react'

const Header = ({ name, slogan }) => {

  const container = useRef(null)

  const { data, error } = useGetData(artistHeader)

  return (

    <motion.section
      className=' overflow-hidden' 
      ref={container} transition={{ duration : 1 }} animate={{ opacity : 1 }} initial={{ opacity : 0 }}>
      <HeaderBackground>
        <div className=' h-screen'>
          <ArtistName name={name} reference={container} />
          <Slogan slogan={slogan} />
          <DownArrow/>
        </div>
      </HeaderBackground>
      <GalleryContainer pictures={ data ? data : [] } />
    </motion.section>

  )
}

export default Header
