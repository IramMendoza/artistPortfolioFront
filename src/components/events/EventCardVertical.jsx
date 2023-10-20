import { motion } from "framer-motion"
import { useRandomNumber } from "../../hooks/useRandomNumber"

const EventCardVertical = ({ id, item }) => {

  const randomNumber = useRandomNumber(0, item.pictures.length -1)

  const picture = item.pictures[randomNumber].picture

  return (

    <div id={id} className=" w-full px-10 py-7">
      <motion.div className=' bg-fixed' style={
        {
          backgroundImage: `url(${picture})`,
          backgroundSize: "cover", // Ajusta la imagen al tamaño del contenedor
          backgroundRepeat: "no-repeat", // Evita la repetición de la imagen de fondo
          backgroundPosition: "center center", // Centra la imagen horizontal y verticalmente
        }
        }>
        <div className=" py-[10rem]"/>
        <div className="flex">
          <p className=' text-slate-100 px-6 pt-1 bg-gradient-to-r from-black from-80%'>{item.venue}</p>
          <div/>
        </div>
      </motion.div>
    </div>
  )
}

export default EventCardVertical