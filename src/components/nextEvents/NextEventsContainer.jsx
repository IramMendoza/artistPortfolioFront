import ListRenderer from "../generics/ListRenderer"
import EventCardVertical from "../events/EventCardVertical"

const NextEventsContainer = ({events}) => {
  return (
    <div className="">
        <ListRenderer list={events} CardComponent={EventCardVertical}/>
    </div>
  )
}

export default NextEventsContainer
