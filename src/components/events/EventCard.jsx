import { animate, motion, useAnimation } from "framer-motion"
import { useRandomNumber } from "../../hooks/useRandomNumber"
import EventNameCard from "./EventNameCard"
import { useRef } from "react"

const EventCard = ({ item }) => {

  const card = useRef(null)

  const cardVariants = {
    hover : {
      scale : 1.1,
      filter : 'grayscale(0%)',
      transition : {
        duration : 0.05
      }
    }
  }

  const animate = {
    x : [-100, -600, -100], 
    transition: { duration: 30, repeat: Infinity } 
  }

  const randomNumber = useRandomNumber(0, item.pictures.length - 1)
  //Elige un numero al azar entre 0 y el numero de la longitud del array
  //de eventos que llega en la peticion.

  const picture = item.pictures[randomNumber].picture
  //Elige una picture al azar utilizando el randomNumber segun su posicion en el array

  return (
    <div
      ref={card}
      className=" w-full sm:w-[40vh] md:h-[40vh] md:w-[50vh] px-[4vh] py-[4vh] md:py-[1px]">
      <motion.div
        variants={cardVariants}
        whileHover='hover'
        className=" overflow-hidden"
        style={
          {
            backgroundImage: `url(${picture})`,
            backgroundSize: "cover", // Ajusta la imagen al tamaño del contenedor
            backgroundRepeat: "no-repeat", // Evita la repetición de la imagen de fondo
            backgroundPosition: "center center",
            filter: "grayscale(100%)" // Centra la imagen horizontal y verticalmente
          }
        }>

        <div className=" py-[5rem]" />

        <motion.div animate={animate}>
          <EventNameCard eventName={item.venue} />
        </motion.div>

        <div className=" py-[5rem]" />

      </motion.div>
    </div>
  )
}

export default EventCard
