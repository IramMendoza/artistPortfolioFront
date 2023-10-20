import { motion } from "framer-motion"

const TeamCard = ({ id, item }) => {

    return (
        <div id={id} className=" w-full px-7 py-7">

            <motion.div data-style="photo" style={
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

            </motion.div>
        </div>
    )
}

export default TeamCard
