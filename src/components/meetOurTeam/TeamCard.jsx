const TeamCard = ({ item, refContainer }) => {

    return (
        <div className=" w-full px-7 py-7">

            <div data-style="photo" className="w-[25vh] h-[25vh] tablet:h-[35vh] tablet:w-[35vh]" style={
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


                <div className="flex justify-end h-full items-end">
                    <p className=' text-slate-100 px-6 pt-1 bg-gradient-to-l from-black from-80% text-sm'>
                        {item.role}
                    </p>
                </div>

            </div>
        </div>
    )
}

export default TeamCard
