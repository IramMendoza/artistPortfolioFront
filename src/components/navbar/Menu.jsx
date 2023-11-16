import ButtonMenu from "./ButtonMenu"
import { motion } from "framer-motion"

const Menu = ({onClick}) => {
  return (
    <motion.div className=" w-full backdrop-blur-md bg-black/30 py-2 fixed top-0"
      initial={{ y: +65 }}
      animate={{ y: +60 }}
      transition={{ bounceDamping: 10 }}
      exit={{ y: -150 }}>

      <ButtonMenu onClick={onClick} to="/" section="Home" />
      <ButtonMenu onClick={onClick} to="/gallery" section="Galeria" />
      <ButtonMenu onClick={onClick} to="/events" section="Eventos" />
      <ButtonMenu onClick={onClick} to="/events/next_events" section="Proximos" />
      <ButtonMenu onClick={onClick} to="/contact" section="Contacto" />

    </motion.div>
  )
}

export default Menu
