import { artistEvents } from "../../../apiConfig"
import ListRenderer from "../generics/ListRenderer"
import SectionHeader from "../generics/SectionHeader"
import RightArrow from "./RightArrow"
import { useGetData } from '../../hooks/useGetData'
import EventCard from './EventCard'
import { useState, useEffect } from "react"


const Events = () => {

  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(window.innerWidth)
    console.log(width)
  }, []);

  const { data, error } = useGetData(artistEvents)

  return (
    <section className=' overflow-x-visible w-full'>

      <div className=" flex justify-center">
        <SectionHeader header='EVENTOS'/>
      </div>

      <div className=" w-full lg:flex lg:justify-center overflow-x-scroll">
        <ListRenderer list={data && data} CardComponent={EventCard} display={ width > 640 ? 'flex' : '' } />
      </div>

      <RightArrow/>

    </section>
  )
}

export default Events
