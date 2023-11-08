import { motion, useScroll, useTransform } from "framer-motion"
import { useRandomNumber } from "../../hooks/useRandomNumber"
import EventNameCard from "./EventNameCard"
import { useRef } from "react"

const EventCard = ({ item }) => {

  const card = useRef(null)

  const { scrollYProgress } = useScroll({
    target: card,
    offset: ['start end', 'end start']
  })

  const movement = useTransform(scrollYProgress, [0, 1], [0, -1000])

  const randomNumber = useRandomNumber(0, item.pictures.length - 1)
  //Elige un numero al azar entre 0 y el numero de la longitud del array
  //de eventos que llega en la peticion.

  const picture = item.pictures[randomNumber].picture
  //Elige una picture al azar utilizando el randomNumber segun su posicion en el array

  return (
    <div
      ref={card}
      className=" w-full px-10 lg:px-[15rem] lg:py-10 py-7">
      <div
        className=" overflow-hidden"
        style={
          {
            backgroundImage: `url(${picture})`,
            backgroundSize: "cover", // Ajusta la imagen al tamaño del contenedor
            backgroundRepeat: "no-repeat", // Evita la repetición de la imagen de fondo
            backgroundPosition: "center center", // Centra la imagen horizontal y verticalmente
          }
        }>

        <div className=" lg:py-[8rem] py-[5rem]" />

        <motion.div style={{ x: movement }}>
          <EventNameCard eventName={item.venue} />
        </motion.div>

        <div className=" py-[5rem]" />

      </div>
    </div>
  )
}

export default EventCard
