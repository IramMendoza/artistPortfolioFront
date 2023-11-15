import SectionHeader from "../generics/SectionHeader"
import TeamCard from "./TeamCard"
import { useGetData } from "../../hooks/useGetData"
import { artistMembers } from "../../../apiConfig"
import { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"
import ListRenderer from "../generics/ListRenderer"

const MeetOurTeam = () => {

  const meetOurTeamContainerRef = useRef(null)

  const { scrollYProgress } = useScroll(
    {
      target : meetOurTeamContainerRef
    }
  )
  const movementValues = useTransform(scrollYProgress, [0,1],['1%','-195%'])

  const { data, error } = useGetData(artistMembers)

  return (
    <section className=" relative h-[300vh] bg-black" ref={meetOurTeamContainerRef}>
      <div className={`sticky top-[22vh] h-[80vh] items-center overflow-hidden`}>
        <div className=" pl-[4vh]">
          <SectionHeader header='INTEGRANTES'/>
        </div>
          <motion.div style={{ x : movementValues}}>
            <ListRenderer list={data ? data : []} CardComponent={TeamCard} display={'flex'}/>
          </motion.div>
      </div>
    </section>
  )
}

export default MeetOurTeam