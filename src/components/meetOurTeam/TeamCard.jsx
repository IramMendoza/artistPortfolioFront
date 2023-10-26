import { motion } from "framer-motion"
import MovingContainer from "../generics/MovingContainer"

const TeamCard = ({ id, item }) => {

    //Cada TeamCard tendra una animacion igual y se hace de esta manera para
    //independizar su movimiento del container

    const movementValuesX = {
        "Mobile" : [[0,0.77, 0.83, 1],[0, 0, -450, -450]],
        "Tablet" : [[0,0.77, 0.83, 1],[0, 0, -450, -450]],
        "Laptop" : [[0,0.6,1],[0, -2000, 0]],
        "Desktop" : [[0,0.6,1],[0, -2000, 0]]
      }

    return (
        <MovingContainer axis="x" movementValues={movementValuesX}>
            <div id={id} className=" w-full px-7 py-7">

                <div data-style="photo" style={
                    {
                        backgroundImage: `url(${item.photo})`,
                        backgroundSize: "cover", // Ajusta la imagen al tamaño del contenedor
                        backgroundRepeat: "no-repeat", // Evita la repetición de la imagen de fondo
                        backgroundPosition: "center center", // Centra la imagen horizontal y verticalmente
                    }}>

                    <div className=" flex">
                        <p className="text-slate-100 px-6 pt-1 bg-gradient-to-r from-black from-80% text-sm">
                        {item.name}
                        </p>
                    </div>

                    <div className="w-[10rem] h-[10rem]" />

                    <div className="flex justify-end">
                        <p className=' text-slate-100 px-6 pt-1 bg-gradient-to-l from-black from-80% text-sm'>
                        {item.role}
                        </p>
                    </div>

                </div>
            </div>
        </MovingContainer>
    )
}

export default TeamCard
