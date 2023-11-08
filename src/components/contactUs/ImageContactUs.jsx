import Image from "../../assets/media/reptiliaPngComp.png"
import MovingContainer from "../generics/MovingContainer"
import { imageContactUsAnimation } from "./animations/imageContactUsAnimation"

const ImageContactUs = ({refContainer}) => {

  return (
    <MovingContainer movementValues={imageContactUsAnimation.movementValues} refContainer={refContainer}>
      <div className=" flex justify-end">
        <img className=" w-[15rem]" src={Image} />
      </div>
    </MovingContainer>
  )
}

export default ImageContactUs
