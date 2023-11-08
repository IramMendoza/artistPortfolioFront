import { useRef } from "react"
import MovingPicture from "./MovingPicture"

const CustomListRenderer = ({ list, CardComponent, display, reference }) => {

  if (!list){
    return <div>Loading...</div>
  }
  return (
    <div className=" py-10" style={{ display : display }}>
      {list.map((item) => (
        <CardComponent reference={reference} key={item.id} item={item} />
      ))}
    </div>
  )
}

const GalleryContainer = ({ pictures }) => {

  const container = useRef(null)

  return (
    <section className="pt-[]" ref={container}>
      <CustomListRenderer list={pictures[0]} CardComponent={MovingPicture} display="flex" reference={container}/>
      <CustomListRenderer list={pictures[1]} CardComponent={MovingPicture} display="flex" reference={container}/>
      <CustomListRenderer list={pictures[2]} CardComponent={MovingPicture} display="flex" reference={container}/>
    </section>
  )
}

export default GalleryContainer