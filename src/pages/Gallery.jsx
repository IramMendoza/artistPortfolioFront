import ListRenderer from "../components/generics/ListRenderer"
import MeetOurTeam from "../components/home/MeetOurTeam"
import { artistUrl } from "../../apiConfig"
import { useGetData } from "../hooks/useGetData"

const Gallery = () => {

  const { data, error } =  useGetData(artistUrl)

  return (
    <div className=" bg-black w-full h-screen">
      <MeetOurTeam members={data && data.members ? data.members : []}/>
      <ListRenderer/>
    </div>
  )
}

export default Gallery
