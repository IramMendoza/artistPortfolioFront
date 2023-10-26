import ListRenderer from "../generics/ListRenderer"
import EventCard from "./EventCard"

const EventsRender = ({events}) => {

    return (
        <ListRenderer list={events && events} CardComponent={EventCard} />
    )
}

export default EventsRender
