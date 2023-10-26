const VenueName = ({venue}) => {
    return (
        <div
        className=" bg-black text-4xl text-white shadow-2xl font-medium px-3 py-1"
        style={{ whiteSpace: "nowrap" }}>{venue}</div>
    )
}

const EventNameCard = ({eventName}) => { 
  return (
    <div className=" flex justify-between overflow-visible">
        <VenueName venue={eventName}/>
        <VenueName venue={eventName}/>
        <VenueName venue={eventName}/>
        <VenueName venue={eventName}/>
        <VenueName venue={eventName}/>
        <VenueName venue={eventName}/>
        <VenueName venue={eventName}/>
    </div>
  )
}

export default EventNameCard
