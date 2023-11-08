import TeamCardsContainer from "../meetOurTeam/TeamCardsContainer"
import SectionHeader from "../generics/SectionHeader"
import MovingContainer from "../generics/MovingContainer"
import { useGetData } from "../../hooks/useGetData"
import { artistMembers } from "../../../apiConfig"
import { useRef } from 'react'
import { meetOurTeamAnimation } from "./animations/meetOurTeamAnimation"

const MeetOurTeam = () => {

  const { data, error } = useGetData(artistMembers)

  const meetOurTeamContainer = useRef(null)

  return (
    <div className=" overflow-x-hidden pb-[35rem]" ref={meetOurTeamContainer}>
      <MovingContainer axis="y" movementValues={meetOurTeamAnimation.movementValues} refContainer={meetOurTeamContainer}>

        <SectionHeader header={"INTEGRANTES"} />

        <TeamCardsContainer members={data ? data : []} refContainer={meetOurTeamContainer} />

      </MovingContainer>
    </div>
  )
}

export default MeetOurTeam