const Image = ({image}) => {
    return (
        <div className=" bg-fixed h-[13rem]" style={
            {
                backgroundImage: `url(${image})`,
                backgroundSize: "cover", // Ajusta la imagen al tamaño del contenedor
                backgroundRepeat: "no-repeat", // Evita la repetición de la imagen de fondo
                backgroundPosition: "center center", // Centra la imagen horizontal y verticalmente
            }}/>
    )
}

export default Image
