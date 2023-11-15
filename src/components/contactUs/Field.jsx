const Field = ({label, inputColor, textInputColor}) => {
  return (
    <div className=" w-full flex py-[1vh]">
        <label className=" text-white w-[50%] lg:text-lg text-sm">{label}</label>
        <input style={{ backgroundColor : inputColor, color : textInputColor }} className=" rounded-full py-[0.5vh] pr-[vh8]"/>
    </div>
  )
}

export default Field