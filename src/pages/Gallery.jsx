import ListRenderer from "../components/generics/ListRenderer"
import { artistEvents } from "../../apiConfig"
import { useGetData } from "../hooks/useGetData"

const Gallery = () => {

  const { data } = useGetData(artistEvents)

  return (
    <div className=" bg-black w-full h-screen">
      <ListRenderer/>
    </div>
  )
}

export default Gallery
