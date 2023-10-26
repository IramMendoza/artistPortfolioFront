import InfoNextEvent from "./InfoNextEvent"
import BuyTicketButton from "./BuyTicketButton"

const NextEventCard = ({id, item}) => {

  return (

    <div className=" flex justify-center w-full p-10">
      <div id={id} className=" w-[20rem] shadow-2xl bg-white ">

        <img className=" p-3" src={item.flyer}/>

        <BuyTicketButton/>

        <InfoNextEvent item={item}/>

      </div>
    </div>
  
  )
}

export default NextEventCard
