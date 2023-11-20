import Arrow from "../../assets/media/arrow_right.svg"
import { Link } from "react-router-dom"

const RightArrow = () => {
    return (

        <div className=' flex justify-center md:py-[2vh] py-[5vh]'>
            <Link to='/events/'>
                <a className=' text-white text-3xl'>
                Ver más
                </a>
            </Link>
            <img src={Arrow} className=" w-10"/>
        </div>

    )
}

export default RightArrow
