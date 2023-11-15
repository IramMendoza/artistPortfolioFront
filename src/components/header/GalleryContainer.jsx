import { useRef } from "react"
import MovingPicture from "./MovingPicture"

const CustomListRenderer = ({ list, CardComponent, display, reference }) => {

  if (!list){
    return <div>Loading...</div>
  }
  return (
    <div className=" w-full flex justify-around py-[10vh]" style={{ display : display }}>
      {
        list.map((item) => {
          return (
            <CardComponent reference={reference} key={item.id} item={item} />
            )
          }
        )
      }
    </div>
  )
}

const GalleryContainer = ({ pictures }) => {

  const container = useRef(null)

  return (
    <section ref={container}>
      <CustomListRenderer list={pictures[0]} CardComponent={MovingPicture} display="flex" reference={container}/>
      <CustomListRenderer list={pictures[1]} CardComponent={MovingPicture} display="flex" reference={container}/>
      <CustomListRenderer list={pictures[2]} CardComponent={MovingPicture} display="flex" reference={container}/>
    </section>
  )
}

export default GalleryContainer