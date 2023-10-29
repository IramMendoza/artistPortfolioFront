import MenuIcon from "./MenuIcon"
import LogoIcon from "./LogoIcon"
import Menu from "./Menu"
import { AnimatePresence } from "framer-motion"
import { useState } from "react"

const Navbar = () => {

  const [menuState, setMenuState] = useState(false)

  function handleMenu () {
    menuState ? setMenuState(false) : setMenuState(true)
  }

  return (
    <section data-style="navbar" className=" w-full sticky top-0 sm:sticky-top-0">

      <nav data-style="navbar" className=' w-full flex sticky top-0 sm:sticky-top-0 bg-neutral-900'>
        <LogoIcon/>
        <MenuIcon menuState={menuState} onClick={handleMenu}/>
      </nav>

      <AnimatePresence>
        {
          menuState ? <Menu onClick={handleMenu} /> : null
        }
      </AnimatePresence>

    </section>
  )
}

export default Navbar
