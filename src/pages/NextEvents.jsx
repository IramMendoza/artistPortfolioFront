import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Arrow from "../assets/media/left-arrow.png"
import Loading from "../components/generics/Loading"

const NextEvents = () => {

  const ref = useRef(null)

  const { scrollXProgress } = useScroll()
  
  const { scrollYProgress} = useScroll()

  const y = useTransform(scrollYProgress, [0,1],[0,100])

  const x = useTransform(scrollXProgress, [0,1],[0,100])

  return (
    <div className=" bg-black h-screen w-screen overflow-x-hidden">

      <div ref={ref} className=" w-full flex h-[45vh] overflow-x-scroll">

        <motion.img src={Arrow} className=" px-[5vh] pt-[50vh] w-[25vh]"/>
        <div className=" absolute pt-[30vh]">
        <Loading/>
        </div>

        <div className="text-7xl px-[5vh] pt-[20vh] text-white">Letras 1</div>
        <div className="text-7xl px-[5vh] pt-[20vh] text-white">Letras 2</div>
        <div className="text-7xl px-[5vh] pt-[20vh] text-white">Letras 3</div>
        <div className="text-7xl px-[5vh] pt-[20vh] text-white">Letras 4</div>
      </div>

      <div className=" bg-slate-800">
        <div className="text-7xl px-[5vh] pt-[20vh] text-white">Letras</div>
        <div className="text-7xl px-[5vh] pt-[20vh] text-white">Letras</div>
        <div className="text-7xl px-[5vh] pt-[20vh] text-white">Letras</div>
        <div className="text-7xl px-[5vh] pt-[20vh] text-white">Letras</div>
      </div>
    </div>
  )
}

export default NextEvents
