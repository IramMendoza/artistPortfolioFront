import { artistPictures } from "../../apiConfig"
import ListRenderer from "../components/generics/ListRenderer"
import { useGetData } from "../hooks/useGetData"

function Picture ({item}) {
  return (
    <div>
      
    </div>
  )
}

const Gallery = () => {

  const { data, error } =  useGetData(artistPictures)

  return (
    <div>
      <ListRenderer list={data && data} CardComponent={Picture} display={'flex'}/>
    </div>
  )
}

export default Gallery
