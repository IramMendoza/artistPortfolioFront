import ListRenderer from "../generics/ListRenderer"
import MovingPicture from "./MovingPicture"
import { useWindowWidth } from "../../hooks/useWindowWidth"
import { useArraySplit } from "../../hooks/useArraySplit"
import { useDeviceValue } from "../../hooks/useDeviceValue"
import { useArrayShuffle } from "../../hooks/useArrayShuffle"

const CustomListRenderer = ({ list, CardComponent, display }) => {
  return (
    <div className=" p-10">
      <ListRenderer list={list} CardComponent={CardComponent} display={display}/>
    </div>
  )
}

const GalleryContainer = ({ photos }) => {

  const howMuchGalleryContainerToRenderValues = {
    "Mobile" : 3,
    "Tablet" : 2,
    "Laptop" : 2,
    "Desktop" : 2
  }

  const device = useWindowWidth()

  const shuffledPhotos = useArrayShuffle(photos)

  const howMuchGalleryContainerToRender = useDeviceValue(device, howMuchGalleryContainerToRenderValues)

  const dividedList = useArraySplit(shuffledPhotos, howMuchGalleryContainerToRender)

  return (
    <section>
      <CustomListRenderer list={dividedList[0]} CardComponent={MovingPicture} display={"flex"} />
      <CustomListRenderer list={dividedList[1]} CardComponent={MovingPicture} display={"flex"}/>

      {
        howMuchGalleryContainerToRender === 3 &&
        <div>
          <CustomListRenderer list={dividedList[2]} CardComponent={MovingPicture} display={"flex"}/>
          <CustomListRenderer list={dividedList[0]} CardComponent={MovingPicture} display={"flex"}/>
        </div>
      }
    </section>
  )
}

export default GalleryContainer