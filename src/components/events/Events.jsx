import { artistEvents } from "../../../apiConfig"
import SectionHeader from "../generics/SectionHeader"
import RightArrow from "./RightArrow"
import { useGetData } from '../../hooks/useGetData'
import EventCard from './EventCard'
import { useState, useEffect } from "react"

function ListRenderer ({CardComponent, list, display}){
  return(
    <div style={{display : display}}>
      {list.map((item) => (
        <CardComponent key={item.id} item={item} />
      ))}
    </div>
  )
}


const Events = () => {

  const [width, setWidth] = useState(0)
  
  function handleResize (){
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const { data, error } = useGetData(artistEvents + 3)

  return (
    <section className=' overflow-x-visible w-full'>

      <div className=" flex justify-center">
        <SectionHeader header='EVENTOS'/>
      </div>

      <div className=" w-full lg:flex lg:justify-center overflow-x-scroll">
        <ListRenderer list={data ? data : []} CardComponent={EventCard} display={ width > 640 ? 'flex' : '' } />
      </div>

      <RightArrow/>

    </section>
  )
}

export default Events
