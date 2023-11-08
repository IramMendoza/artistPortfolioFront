import SectionHeader from "../generics/SectionHeader"
import TeamCard from "../meetOurTeam/TeamCard"
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

  const movementValues = useTransform(scrollYProgress, [0,1],['1%','-95%'])

  const { data, error } = useGetData(artistMembers)

  const members = data ? data : []

  return (
    <div className=" relative h-[200vh] bg-black" ref={meetOurTeamContainerRef}>
      <div className={`h-screen items-center overflow-hidden`}>
      <SectionHeader header='INTEGRANTES'/>
          <motion.div className="" style={{ x : movementValues}}>

            <div className=" flex">
              {members.map((item) => (
                <TeamCard key={item.id} item={item} />
             ))}
            </div>
          </motion.div>

      </div>
    </div>
  )
}

export default MeetOurTeam