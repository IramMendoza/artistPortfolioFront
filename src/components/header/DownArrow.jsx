import DownArrowSvg from '../../assets/media/down-svgrepo-com.svg'
import { motion } from 'framer-motion'
import { useWindowWidth } from '../../hooks/useWindowWidth'
import { useSimpleAnimation } from '../../hooks/useSimpleAnimation'

const DownArrow = () => {

    const device = useWindowWidth()

    const opacityValues = {
        "Mobile" : [[0, 0.05], [1, 0]],
        "Tablet" : [[0, 0.05], [1, 0]],
        "Laptop" : [[0, 0.05], [1, 0]],
        "Desktop" : [[0, 0.05], [1, 0]]
    }

    const opacity = useSimpleAnimation(device, opacityValues)

  return (
      <div className=" flex justify-center pt-[16rem]">
          <motion.img
              style={{ opacity: opacity }}
              className=" w-[3rem]"
              src={DownArrowSvg} />
      </div>
  )
}

export default DownArrow
