import { useParams } from "react-router-dom"
import { useGetData } from "../hooks/useGetData"
import { useRandomNumber } from "../hooks/useRandomNumber"
import { EventDetail } from "../../apiConfig"
import { motion } from "framer-motion"

const EventDetailPage = () => {

    const { id } = useParams()

    const { data, error } = useGetData(EventDetail + id)

    const randomNumber = useRandomNumber(0, data && data.pictures.length - 1)

    return (
        <motion.section transition={{ duration: 0.5 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} className=" h-screen overflow-y-hidden">
            <div className=" flex justify-center pt-[10vh]">
                <div className=" w-full sm:w-[65vh] md:w-[65vh] lg:w-[50vh] lg:px-[2vh] lg:py-[5vh] px-[5vh] py-[5vh]">
                    <motion.div
                        transition={{ duration: 0.2 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }}
                        style={
                            {
                                backgroundImage: `url(${data && data.pictures[randomNumber].picture})`,
                                backgroundSize: "cover", // Ajusta la imagen al tamaño del contenedor
                                backgroundRepeat: "no-repeat", // Evita la repetición de la imagen de fondo
                                backgroundPosition: "center center",
                                filter: "grayscale(0%)" // Centra la imagen horizontal y verticalmente
                            }
                        }>

                        <div className=" py-[12vh] px-[20vh]" />

                        <div className=" py-[6vh] px-[10vh]" />

                        <div className=" py-[6vh] px-[10vh]" />

                    </motion.div>
                </div>

            </div>

            <section>
                <div className=" text-center text-white text-5xl font-google">{data && data.venue}</div>
                <div className=" text-center text-white text-2xl">{data && data.location}</div>
                <div className=" text-center text-white text-base">{data && data.date}</div>
                <div className=" text-center text-white text-sm">{data && data.description}</div>
                <div className=" text-center text-white text-sm">Precio de Entrada : ${data && data.ticket_price}</div>
            </section>

        </motion.section>
    )
}

export default EventDetailPage
