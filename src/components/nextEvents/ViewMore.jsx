import Arrow from "../../assets/media/arrow_right.svg"

const ViewMore = () => {
    return (

        <div className=' flex justify-center'>
            <a className=' text-slate-300 text-3xl'>
                Ver más
            </a>
            <img src={Arrow} className=" w-10"/>
        </div>

    )
}

export default ViewMore