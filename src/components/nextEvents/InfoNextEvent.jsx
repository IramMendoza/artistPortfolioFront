const InfoNextEvent = ({item }) => {

  const fontBold = item.ticket_price === 0 ? 'font-bold' : ''
  return (
    <div className=" px-5 py-5">
        <span className=" text-black text-xs">{item.location}</span>
        <p className=" text-black text-xs">{item.description}</p>
        <div className=" flex">
            <span className=" text-black text-xs pr-1">Fecha:</span>
            <span className=" text-black text-xs">{item.date}</span>
        </div>
        <div className=" flex">
            <span className=" text-black text-xs pr-1">Precio:</span>
            <span className={`text-black text-xs ${fontBold}`} >{item.ticket_price === 0 ? '¡No Cover!' : item.ticket_price}</span>
        </div>
    </div>
  )
}

export default InfoNextEvent
