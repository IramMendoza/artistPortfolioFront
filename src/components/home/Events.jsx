import { artistEvents } from "../../../apiConfig"
import EventsContainer from "../events/EventsContainer"
import SectionHeader from "../generics/SectionHeader"
import RightArrow from "../events/RightArrow"
import { useGetData } from '../../hooks/useGetData'

const Events = () => {

  const { data, error } = useGetData(artistEvents)

  return (
    <section className=' w-full'>

      <div className=" flex justify-center pr-10">
        <SectionHeader header='EVENTOS'/>
      </div>

      <EventsContainer events={data && data}/>

      <RightArrow/>

    </section>
  )
}

export default Events
