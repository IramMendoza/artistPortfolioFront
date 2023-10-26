import TeamCardsContainer from "../meetOurTeam/TeamCardsContainer"
import SectionHeader from "../generics/SectionHeader"
import MovingContainer from "../generics/MovingContainer"

const MeetOurTeam = ({members}) => {

  const movementValuesY = {
    "Mobile" : [[0,0.78, 0.83, 1],[0, 0, +390, 300]],
    "Tablet" : [[0,0.75, 0.83, 1],[0, 0, +450, 300]],
    "Laptop" : [[0,0.6,1],[0, -2000, 0]],
    "Desktop" : [[0,0.6,1],[0, -2000, 0]]
}

  return (
    <div className=" pb-[30rem]">
      <MovingContainer axis="y" movementValues={movementValuesY}>

        <SectionHeader header={"INTEGRANTES"} />

        <TeamCardsContainer members={members && members} />

      </MovingContainer>
    </div>
  )
}

export default MeetOurTeam