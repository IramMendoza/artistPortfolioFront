import EventsContainer from "../components/events/Events"
import { motion } from "framer-motion"

const Events = () => {

  return (
    <motion.div transition={{ duration : 1 }} animate={{ opacity : 1 }} initial={{ opacity : 0 }} 
    className=" bg-black">
        <EventsContainer amountToRender={6} />
    </motion.div>
  )
}

export default Events
