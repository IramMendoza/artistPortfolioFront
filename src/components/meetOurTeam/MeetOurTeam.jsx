import SectionHeader from "../generics/SectionHeader"
import TeamCard from "./TeamCard"
import { useGetData } from "../../hooks/useGetData"
import { artistMembers } from "../../../apiConfig"
import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"
import ListRenderer from "../generics/ListRenderer"

const MeetOurTeam = () => {

  const [width, setWidth] = useState(0)
  const meetOurTeamContainerRef = useRef(null)

  useEffect(() => {
    setWidth(window.innerWidth)
  }, []);

  const { scrollYProgress } = useScroll(
    {
      target : meetOurTeamContainerRef
    }
  )
  
  const stickyMediaQuerie = width < 425 ? 'sticky' : ''

  const movementValues = useTransform(scrollYProgress, [0,1],['1%','-195%'])

  const MovementMediaQuerie = width < 425 ? movementValues : 0

  const { data, error } = useGetData(artistMembers)

  return (
    <section className={`relative md:h-screen h-[300vh] bg-black`} ref={meetOurTeamContainerRef}>
      <div className={`${stickyMediaQuerie} top-[22vh] md:relative h-[80vh] z-20 items-center overflow-hidden`}>
        <div className=" pl-[4vh] md:text-center">
          <SectionHeader header='INTEGRANTES'/>
        </div>
          <motion.div style={{ x : MovementMediaQuerie }}>
            <ListRenderer list={data ? data : []} CardComponent={TeamCard} display={'flex'}/>
          </motion.div>
      </div>
    </section>
  )
}

export default MeetOurTeam