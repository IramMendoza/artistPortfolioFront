import ArtistName from '../header/ArtistName.jsx'
import Slogan from '../header/Slogan.jsx'
import HeaderBackground from '../header/HeaderBackground.jsx'
import GalleryContainer from '../header/GalleryContainer.jsx'
import DownArrow from "../header/DownArrow.jsx"
import { motion } from 'framer-motion'

const Header = ({ name, photos, slogan }) => {

  return (

    <motion.section transition={{ duration : 1 }} animate={{ opacity : 1 }} initial={{ opacity : 0 }}>
      <HeaderBackground>
        <ArtistName name={name} />
        <Slogan slogan={slogan} />
        <DownArrow/>
      </HeaderBackground>
      <GalleryContainer photos={photos} />
    </motion.section>

  )
}

export default Header
