import Image from "../../assets/media/background_impressions_compressed.jpeg"
import ImageBackground from "../generics/ImageBackground"

const HeaderBackground = ({children, image}) => {
  return (
    <ImageBackground children={children} image={Image}/>
  )
}

export default HeaderBackground
