import InfoNextEvent from "./InfoNextEvent"
import BuyTicketButton from "./BuyTicketButton"

const NextEventCard = () => {

  return (

    <div className=" flex justify-center w-full p-5">
      <div id="33" className=" w-[20rem] bg-white rounded-3xl">

        <img className=" p-3" src={item.flyer}/>

        <BuyTicketButton/>

        <InfoNextEvent item={item}/>

      </div>
    </div>
  
  )
}

export default NextEventCard