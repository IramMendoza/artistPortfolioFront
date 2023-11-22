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

  function handleResize (){
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const { scrollYProgress } = useScroll(
    {
      target : meetOurTeamContainerRef
    }
  )

  const movementValues = useTransform(scrollYProgress, [0,1],['1%','-230%'])

  const { data, error } = useGetData(artistMembers)

  return (
    <>
      {

      width < 450 ?

      <section className='relative h-[300vh] bg-black' ref={meetOurTeamContainerRef}>
        <div className='sticky top-[22vh] h-[80vh] z-20 items-center overflow-hidden'>
          <div className=" pl-[4vh]">
            <SectionHeader header='INTEGRANTES'/>
          </div>
            <motion.div style={{ x : movementValues }}>
              <ListRenderer list={data && data} CardComponent={TeamCard} display='flex'/>
            </motion.div>
        </div>
      </section>

      : 

      <section className="h-[50vh]">
        <div className=" pl-[4vh]">
          <SectionHeader header='INTEGRANTES'/>
        </div>
        <div className=" px-[4vh] flex justify-center">
          <div className="flex overflow-x-scroll">
            {data && data.map((item) => (
            <TeamCard key={item.id} item={item} />
            ))}
          </div>
        </div>

      </section>

      }
    </>
  )
}

export default MeetOurTeam