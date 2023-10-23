import SectionHeader from "../generics/SectionHeader"
import { useGetData } from "../../hooks/useGetData"
import { artistNextEvents } from "../../../apiConfig"
import NextEventsContainer from "../nextEvents/NextEventsContainer"
import ImageCustomNotFound from "../../assets/media/anglesBack.jpeg"
import SectionNotFound from "../generics/SectionNotFound"

const NextEvents = () => {

  const {data, error } = useGetData(artistNextEvents)

  return (
    <div className=" py-[10rem]">
      <SectionHeader header={"PROXIMOS"}/>
      { data && data.length === 0 ? <SectionNotFound message={"No hay proximos eventos"} image={ImageCustomNotFound}/> : null }
      { data && data.length > 0 ? <NextEventsContainer events={data}/> : null }
    </div>
  )
}

export default NextEvents
