import { useState } from "react"
import ButtonMenu from "./ButtonMenu"
import MenuIcon from "../../assets/media/menu-svgrepo-com.svg"

const OpenMenu = () => {

    return (
        <div>
            <ButtonMenu section={"Home"}/>
            <ButtonMenu/>
            <ButtonMenu/>
            <ButtonMenu/>
        </div>
    )
} 

const CloseMenu = () => {

    function close () {
        if (menuState){
            setMenuState(false)
            console.log(menuState)
        }
        else {
            setMenuState(true)
            console.log(menuState)
        }
    }
    return(
        <div onClick={close}>
            <img className=" w-[4rem] p-2" src={MenuIcon}/>
        </div>
    )
}

const Menu = () => {

    const [menuState, setMenuState] = useState(false)

  return (
    <div>
        {
            menuState ? <OpenMenu/> : <CloseMenu/>
        }
    </div>
  )
}

export default Menu
