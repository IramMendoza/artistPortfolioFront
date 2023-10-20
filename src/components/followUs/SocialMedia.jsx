import Arrow from "../../assets/media/arrow_up_right.svg"

const SocialMedia = ({socialMedia}) => {

  return (
    <div className=" w-full border-gray-500 py-2 flex">
        <a className=" text-xl text-white pl-10">{socialMedia}</a>
        <div className=" flex justify-end w-full pr-10">
          <img src={Arrow} className=" w-7"/>
        </div>
    </div>
  )
}

export default SocialMedia
