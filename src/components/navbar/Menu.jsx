import ButtonMenu from "./ButtonMenu"
import { motion } from "framer-motion"

const Menu = () => {
  return (
      <motion.div className=" w-full backdrop-blur-sm bg-black/30 py-2 fixed top-0"
        initial={{ y: +65 }}
        animate={{ y : +60 }}
        transition={{ bounceDamping : 10 }}
        exit={{ y: -150 }}>

        <ButtonMenu section="Home"/>
        <ButtonMenu section="Galeria"/>
        <ButtonMenu section="Eventos"/>
        <ButtonMenu section="Proximos"/>
        <ButtonMenu section="Contacto"/>

      </motion.div>
  )
}

export default Menu
