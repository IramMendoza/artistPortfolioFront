import { artistUrl } from "../../apiConfig"
import { useGetData } from "../hooks/useGetData"

const Gallery = () => {

  const { data, error } =  useGetData(artistUrl)

  return (
    <div>
        <div className=" w-full relative">
          <div className=" absolute z-10 bg-yellow-900 h-screen w-full text-slate-50 text-5xl pt-20"> integrantes </div>
          <div className=" sticky top-0 z-0 bg-lime-700 h-screen text-white text-5xl pt-20">ROTO roto</div>
        <div className=" h-screen"/>
      </div>
    </div>
  )
}

export default Gallery
