import IconCloseMenu from "../../assets/media/menu-svgrepo-com.svg"
import IconOpenMenu from "../../assets/media/close-sm-svgrepo-com.svg"
import { motion, AnimatePresence, useAnimation } from "framer-motion"

const MenuIcon = ({onClick, menuState}) => {

  const variants = {
    start : { scale : [1,0.7,1], rotate : [0,180,0] }
  }

  const animation = useAnimation()

  function handleOnClickAndAnimation () {
    animation.start('start')
    onClick()
  }

  return (
    <div className=" w-[50%] flex justify-end">
      <AnimatePresence>
      {
        <motion.img
          transition={{ duration : 0.1 }}
          animate={animation}
          variants={variants}
          className=" w-[4rem] p-2" 
          src={ menuState ? IconOpenMenu : IconCloseMenu} 
          onClick={handleOnClickAndAnimation}/>
      }
      </AnimatePresence>
    </div>
  )
}

export default MenuIcon
