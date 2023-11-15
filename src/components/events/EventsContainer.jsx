import ListRenderer from "../generics/ListRenderer"
import EventCard from "./EventCard"

const EventsRender = ({events}) => {

    return (
        <ListRenderer list={events && events} CardComponent={EventCard}display='flex' />
    )
}

export default EventsRender
