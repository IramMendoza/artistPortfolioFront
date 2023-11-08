import { useRef, useEffect, useState } from "react"
import MovingPicture from "./MovingPicture"

const CustomListRenderer = ({ list, CardComponent, display, ref }) => {

  if (!list){
    return <div>Loading...</div>
  }
  return (
    <div className=" py-10" style={{ display : display }}>
      {list.map((item) => (
        <CardComponent ref={ref} id={item.id} item={item} />
      ))}
    </div>
  )
}

const GalleryContainer = ({ pictures }) => {

  const container = useRef(null)

  return (
    <section className=" pt-[25rem]" ref={container}>
      <CustomListRenderer list={pictures[0]} CardComponent={MovingPicture} display="flex" ref={container}/>
      <CustomListRenderer list={pictures[1]} CardComponent={MovingPicture} display="flex" ref={container}/>
      <CustomListRenderer list={pictures[2]} CardComponent={MovingPicture} display="flex" ref={container}/>
    </section>
  )
}

export default GalleryContainer