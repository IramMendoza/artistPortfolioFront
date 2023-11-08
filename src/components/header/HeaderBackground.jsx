import Image from "../../assets/media/background_impressions_compressed.jpeg"
import ImageBackground from "../generics/ImageBackground"
import { motion } from "framer-motion"

const HeaderBackground = ({children}) => {
  return (
    <motion.div animate={{ opacity : 1 }} initial={{ opacity : 0 }}>
      <ImageBackground children={children} image={Image}/>
    </motion.div>
  )
}

export default HeaderBackground
