import ListRenderer from "../generics/ListRenderer"
import EventCardVertical from "./EventCardVertical"

const EventsRender = ({events}) => {

    return (
        <ListRenderer list={events} CardComponent={EventCardVertical} />
    )
}

export default EventsRender
