import ArtistName from '../header/ArtistName.jsx'
import Slogan from '../header/Slogan.jsx'
import HeaderBackground from '../header/HeaderBackground.jsx'
import GalleryContainer from '../header/GalleryContainer.jsx'

const Header = ({ name, photos, slogan }) => {

  return (

    <section>
      <HeaderBackground>
        <ArtistName name={name} />
        <Slogan slogan={slogan} />
      </HeaderBackground>
      <GalleryContainer photos={photos} />
    </section>

  )
}

export default Header
