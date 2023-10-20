import ListRenderer from "../generics/ListRenderer"
import TeamCard from "./TeamCard"
import MovingContainer from "../generics/MovingContainer"
import { useArrayShuffle } from "../../hooks/useArrayShuffle"
import { useWindowWidth } from "../../hooks/useWindowWidth"
import { useSimpleAnimation } from "../../hooks/useSimpleAnimation"

const CustomListRenderer = ({list, CardComponent, display}) => {

  const listMembersShuffled = useArrayShuffle(list)
  
  return (

    <div className=" pl-2 overflow-x-auto">
      <ListRenderer
        list={listMembersShuffled}
        CardComponent={CardComponent}
        display={display}
      />
    </div>
  )
}

const TeamCardsContainer = ({members}) => {


  const movementValues = {
    "Mobile" : [[0,1],[0,1]],
    "Tablet" : [[0],[0]],
    "Laptop" : [[0],[0]],
    "Desktop" : [[0],[0]]
  }

  return (
    <MovingContainer movementValues={movementValues}>
      <CustomListRenderer
        list={ members && members }
        CardComponent={TeamCard}
        display={"flex"}
      />
    </MovingContainer>
  )
}

export default TeamCardsContainer
