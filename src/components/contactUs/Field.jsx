const Field = ({label, inputColor, textInputColor}) => {
  return (
    <div className=" w-full flex py-2 px-10">
        <label className=" w-[50%] text-sm">{label}</label>
        <input style={{ backgroundColor : inputColor, color : textInputColor }} className=" rounded-full py-1 pr-10"/>
    </div>
  )
}

export default Field