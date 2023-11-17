import { motion } from "framer-motion"

function PictureCard ({item}) {
    return (
      <div className=" w-full sm:w-[65vh] md:w-[65vh] lg:w-[50vh] lg:px-[2vh] lg:py-[5vh] px-[4vh] py-[4vh]">
        <motion.div
          transition={{ duration : 0.2 }} animate={{ opacity : 1 }} initial={{ opacity : 0 }}
          className=""
          style={
            {
              backgroundImage: `url(${item.picture})`,
              backgroundSize: "cover", // Ajusta la imagen al tamaño del contenedor
              backgroundRepeat: "no-repeat", // Evita la repetición de la imagen de fondo
              backgroundPosition: "center center",
              filter: "grayscale(0%)" // Centra la imagen horizontal y verticalmente
            }
          }>
  
          <div className="px-[30vh] py-[30vh]" />
  
        </motion.div>
      </div> 
    )
  }

  export default PictureCard