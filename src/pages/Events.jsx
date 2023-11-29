import { artistEventsPages, eventDetail } from "../../apiConfig"
import { Link } from "react-router-dom"
import { useRandomNumber } from "../hooks/useRandomNumber"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import SectionHeader from "../components/generics/SectionHeader"
import Loading from "../components/generics/Loading"

function CardButton({ eventId }) {
  return (
    <Link to={'event/' + eventId }>
      <button className=" flex items-center bg-gradient-to-r from-rose-900 to-rose-600 text-white font-semibold px-[3vh] py-[1vh] rounded-2xl">Ver Detalles</button>
    </Link>
  )
}

function PictureCard({ picture, venue, eventId }) {

  return (
    <div className=" w-full sm:w-[65vh] md:w-[65vh] lg:w-[50vh] lg:px-[2vh] lg:py-[5vh] px-[5vh] py-[5vh]">
      <motion.div
        transition={{ duration: 0.2 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }}
        style={
          {
            backgroundImage: `url(${picture})`,
            backgroundSize: "cover", // Ajusta la imagen al tamaño del contenedor
            backgroundRepeat: "no-repeat", // Evita la repetición de la imagen de fondo
            backgroundPosition: "center center",
            filter: "grayscale(0%)" // Centra la imagen horizontal y verticalmente
          }
        }>

        <div className=" py-[12vh] px-[20vh]" />

        <div style={{ whiteSpace: "nowrap" }} className=" backdrop-blur-xl bg-black/50 py-[3px] text-center text-3xl text-white">{venue}</div>

        <div className=" py-[6vh] px-[10vh]" />

        <div className=" flex justify-center">
          <CardButton eventId={eventId} />
        </div>

        <div className=" py-[6vh] px-[10vh]" />

      </motion.div>
    </div>
  )
}

function PrevNextButton({ handleFunction, text }) {
  return (
    <button className=" text-white px-[3vh] text-xl md:text-2xl" onClick={handleFunction}>
      {text}
    </button>
  )
}

const Gallery = () => {

  const [error, setError] = useState(null)

  const [currentPage, setCurrentPage] = useState(
    { results: [], previous: null, next: null }
  )

  function handleButton(link) {
    axios.get(link)
      .then(response => {
        setCurrentPage(response.data);
        const container = document.getElementById('containerCards')
        container.scrollTo({ left: 0, behavior: 'smooth'})
      })
      .catch(error => setError(error))
  }

  useEffect(() => {
    axios.get(artistEventsPages)
      .then(response => setCurrentPage(response.data))
      .catch(error => setError(error))
  }, [])

  return (
    <motion.section transition={{ duration: 0.5 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }}
      className=" bg-black h-screen overflow-y-hidden">

      <div className=" pt-[10vh] text-center">
        <SectionHeader header='Eventos' />
      </div>

      {!currentPage.results && <Loading />}

      <div className="flex overflow-x-scroll">
        {currentPage.results && currentPage.results.map((item) => {
          const randomNumber = useRandomNumber(0, item.pictures.length - 1)
          return (
            <PictureCard key={item.id} eventId={item.id} venue={item.venue} picture={item.pictures[randomNumber].picture} />
          )
        })}

      </div>
      <div className=" h-[10vh] w-full flex justify-center">
        {
          currentPage && currentPage.previous !== null ? <PrevNextButton text="Regresar" handleFunction={() => handleButton(currentPage.previous)} />
            : null
        }
        {
          currentPage && currentPage.next !== null ? <PrevNextButton text="Siguiente" handleFunction={() => handleButton(currentPage.next)} />
            : null
        }
      </div>
    </motion.section>
  )
}

export default Gallery
