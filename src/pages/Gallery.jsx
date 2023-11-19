import { artistPictures } from "../../apiConfig"
import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import SectionHeader from "../components/generics/SectionHeader"
import RightArrowPng from "../assets/media/right-arrow.png"
import LeftArrowPng from "../assets/media/left-arrow.png"
import Button from "../components/gallery/Button"
import Arrow from "../components/gallery/Arrow"
import PictureCard from "../components/gallery/PictureCard"
import Loading from "../components/generics/Loading"

const Gallery = () => {

  const [currentPage, setCurrentPage] = useState(
    {results:[], previous:null, next:null }
    )
  const [error, setError] = useState(null)
  const refContainer = useRef(null)

  function handleButton (link){
    axios.get(link)
    .then(response => {
      setCurrentPage(response.data);
      window.scrollTo({ left: 0, behavior: 'smooth' });
    })
    .catch(error => setError(error))
  }

  useEffect(() => {
    axios.get(artistPictures)
    .then(response => setCurrentPage(response.data))
    .catch(error => setError(error))
  },[])

  return (
    <motion.section transition={{ duration : 0.2 }} animate={{ opacity : 1 }} initial={{ opacity : 0 }}
      className=" bg-black h-screen">

      <div className=" pt-[10vh] text-center">
        <SectionHeader header='Galeria' />
      </div>

      {
        !currentPage ? <Loading/> :
        <section className="flex overflow-x-scroll">
        {currentPage.results && currentPage.results.map((item) => (
          <PictureCard key={item.id} item={item} />
        ))}
        <div className=" absolute right-0 top-[45vh]">
          <Arrow arrowPng={RightArrowPng} directionArrow='right' reference={refContainer}/>
        </div>
        <div className=" absolute left-0 top-[45vh]">
          <Arrow arrowPng={LeftArrowPng} directionArrow='left' reference={refContainer}/>
        </div>
      </section>
      }

      <div className=" h-[10vh] pb-[10vh] w-full flex justify-center">
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
