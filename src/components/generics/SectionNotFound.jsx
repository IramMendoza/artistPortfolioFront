import TitleNotFound from './TitleNotFound'

const SectionNotFound = ({message, image }) => {
  return (
    <section>
      <div className=' flex justify-center'>
        <TitleNotFound message={message}/>
      </div>
        <div className=' flex justify-center'>
            <div className=" w-[20%] p-10 bg-fixed rounded-full" style={
                {
                    backgroundImage: `url(${image})`,
                    backgroundSize: "contain", // Ajusta la imagen al tamaño del contenedor
                    backgroundRepeat: "repeat", // Evita la repetición de la imagen de fondo
                    backgroundPosition: "center center", // Centra la imagen horizontal y verticalmente
                }} />
        </div>
    </section>
  )
}

export default SectionNotFound
