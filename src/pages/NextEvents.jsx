import SectionHeader from "../components/generics/SectionHeader"
import NextEventsContainer from "../components/nextEvents/NextEventsContainer"
import SectionNotFound from "../components/generics/SectionNotFound"
import { useGetData } from "../hooks/useGetData"
import { motion } from "framer-motion"
import { artistNextEvents } from "../../apiConfig"

const NextEvents = () => {

  const { data, error } = useGetData(artistNextEvents)

  return (
    <motion.div transition={{ duration: 0.5 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} className=" bg-black h-screen overflow-y-hidden">
      <div className=" flex justify-center">
        <div className=" flex justify-center pt-[8vh]">
          <SectionHeader header={"PROXIMOS"} />
        </div>
      </div>
      {data && data.length === 0 ? <SectionNotFound message={"No hay proximos eventos"} image={ImageCustomNotFound} /> : null}
      {data && data.length > 0 ? <NextEventsContainer events={data} /> : null}
    </motion.div>
  )
}

export default NextEvents
