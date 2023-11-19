import { artistEventsPages } from "../../apiConfig"
import { useRandomNumber } from "../hooks/useRandomNumber"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import SectionHeader from "../components/generics/SectionHeader"
import Loading from "../components/generics/Loading"

function PictureCard ({item, listLength}) {

  const [randomPicture, setRandomPicture] = useState(0)

  useEffect(() => {
    const randomNumber = useRandomNumber(0, listLength -1)
    setRandomPicture(randomNumber)
  },[])

  return (
    <div className=" w-full sm:w-[65vh] md:w-[65vh] lg:w-[50vh] lg:px-[2vh] lg:py-[5vh] px-[4vh] py-[4vh]">
      <motion.div
        transition={{ duration : 0.2 }} animate={{ opacity : 1 }} initial={{ opacity : 0 }}
        style={
          {
            backgroundImage: `url(${item.pictures[randomPicture].picture})`,
            backgroundSize: "cover", // Ajusta la imagen al tamaño del contenedor
            backgroundRepeat: "no-repeat", // Evita la repetición de la imagen de fondo
            backgroundPosition: "center center",
            filter: "grayscale(0%)" // Centra la imagen horizontal y verticalmente
          }
        }>

        <div className="px-[30vh] py-[30vh]" />

      </motion.div>
    </div> 
  )
}

function Button ({ handleFunction, text }) {
  return (
    <button className=" text-white px-[3vh] text-xl md:text-2xl" onClick={handleFunction}>
      { text }
    </button>
  )
}

const Gallery = () => {

  const [error, setError] = useState(null)
  
  const [currentPage, setCurrentPage] = useState(
    {results:[], previous:null, next:null }
    )

  function handleButton (link){
    axios.get(link)
    .then(response => {
      setCurrentPage(response.data);
      window.scrollTo({ left: 0, behavior: 'smooth' });
    })
    .catch(error => setError(error))
  }

  useEffect(() => {
    axios.get(artistEventsPages)
    .then(response => setCurrentPage(response.data))
    .catch(error => setError(error))
  },[])

  return (
    <motion.section transition={{ duration : 0.5 }} animate={{ opacity : 1 }} initial={{ opacity : 0 }}
      className=" bg-black h-screen">

      <div className=" pt-[10vh] text-center">
        <SectionHeader header='Eventos' />
      </div>

      {!currentPage.results && <Loading />}

      <div className="flex overflow-x-scroll">
        {currentPage.results && currentPage.results.map((item) => (
          <PictureCard key={item.id} item={item} listLength={item.pictures.length} />
        ))}
      </div>
      <div className=" h-[10vh] w-full flex justify-center">
      { 
        currentPage && currentPage.previous !== null ? <Button text="Regresar" handleFunction={() => handleButton(currentPage.previous)} /> 
        : null
      }
      { 
        currentPage && currentPage.next !== null ? <Button text="Siguiente" handleFunction={() => handleButton(currentPage.next)} /> 
        : null
      }
      </div>
    </motion.section>
  )
}

export default Gallery