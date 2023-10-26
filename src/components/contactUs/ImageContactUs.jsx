import Image from "../../assets/media/reptiliaPngComp.png"
import MovingContainer from "../generics/MovingContainer"

const ImageContactUs = () => {

    const movementValuesY = {
        'Mobile' : [[0, 0.55, 1],[0, +300, +100]],
        'Tablet' : [[0, 0.95, 1],[0, +200, +300]],
        'Laptop' : [[0, 0.95, 1],[0, +200, +300]],
        'Desktop' : [[0, 0.95, 1],[0, +200, +300]]
    }


  return (
    <MovingContainer movementValues={movementValuesY}>
      <div className=" flex justify-end">
        <img className=" w-[15rem]" src={Image}/>
      </div>
    </MovingContainer>
  )
}

export default ImageContactUs
