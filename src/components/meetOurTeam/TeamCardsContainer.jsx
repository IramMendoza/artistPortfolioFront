import ListRenderer from "../generics/ListRenderer"
import TeamCard from "./TeamCard"
import { useArrayShuffle } from "../../hooks/useArrayShuffle"

const CustomListRenderer = ({members, CardComponent, display, animation}) => {

  const listMembersShuffled = useArrayShuffle(members)

  return (

    <div className=" pl-2 overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <ListRenderer
        list={listMembersShuffled}
        CardComponent={CardComponent}
        display={display}
      />
    </div>
  )
}

const TeamCardsContainer = ({members}) => {

  return (
    <div>
      <CustomListRenderer
        members={ members && members }
        CardComponent={TeamCard}
        display={"flex"}
      />
    </div>
  )
}

export default TeamCardsContainer
