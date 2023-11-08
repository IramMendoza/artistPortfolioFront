import TeamCard from "./TeamCard"
import ListRenderer from "../generics/ListRenderer"

const TeamCardsContainer = ({ members }) => {

  return (
    <div className="overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <ListRenderer list={members} CardComponent={TeamCard} display={'flex'}/>
    </div>
  )
}

export default TeamCardsContainer
