import NextEventCard from "./NextEventCard"
import ListRenderer from "../generics/ListRenderer"
import Wallpaper from "../../assets/media/wallpaper.jpeg"
import Collage from "../../assets/media/collageweb.webp"
import Magazine from "../../assets/media/revista.jpeg"
import Test from "./Test"

const NextEventsContainer = ({events}) => {
  return (
    <div
    
    style={
      {
        backgroundImage: `url(${Collage})`,
        backgroundSize: "cover", // Ajusta la imagen al tamaño del contenedor
        backgroundRepeat: "no-repeat", // Evita la repetición de la imagen de fondo
        backgroundPosition: "center center", // Centra la imagen horizontal y verticalmente
      }
      } 
      className=" bg-fixed overflow-y-auto">
        <ListRenderer list={events} CardComponent={NextEventCard}/>
    </div>
  )
}

export default NextEventsContainer
