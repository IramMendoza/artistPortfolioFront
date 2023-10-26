import MenuSvg from "../../assets/media/menu-svgrepo-com.svg"

const MenuIcon = ({onClick}) => {

  return (
    <div className=" w-[50%] flex justify-end">
      <img className=" w-[4rem] p-2" src={MenuSvg} onClick={onClick}/>
    </div>
  )
}

export default MenuIcon
