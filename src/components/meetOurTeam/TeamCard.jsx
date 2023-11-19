import MovingContainer from "../generics/MovingContainer"

const TeamCard = ({ item, refContainer }) => {

    //Cada TeamCard tendra una animacion igual y se hace de esta manera para
    //independizar su movimiento del container

    return (
            <div className=" w-full px-7 py-7">

                <div data-style="photo" className=" tablet:h-[35vh] tablet:w-[35vh] md:h-[50vh] md:w-[40vh] lg:w-[40vh]" style={
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
    )
}

export default TeamCard
