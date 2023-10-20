import TeamCardsContainer from "../meetOurTeam/TeamCardsContainer"
import SectionHeader from "../generics/SectionHeader"

const MeetOurTeam = ({members}) => {
  return (
    <div>

      <SectionHeader header={"INTEGRANTES"}/>

      <TeamCardsContainer members={members && members}/>
      
    </div>
  )
}

export default MeetOurTeam