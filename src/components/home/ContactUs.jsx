import MovingContainer from "../generics/MovingContainer"
import SectionHeader from "../generics/SectionHeader"
import Form from "../contactUs/Form"
import Email from "../contactUs/Email"


const ContactUs = () => {

  const movementValues = {
    "Mobile" : [[0,0.6,1],[0, -2000, 0]],
    "Tablet" : [[0,0.6,1],[0, -2000, 0]],
    "Laptop" : [[0,0.6,1],[0, -2000, 0]],
    "Desktop" : [[0,0.6,1],[0, -2000, 0]]
}

  return (
    <div className=' bg-[#f8ebc6] h-screen overflow-y-hidden'>
        <MovingContainer movementValues={movementValues}>

          <SectionHeader color="Black" header={"CONTACTO"}/>

          <Email email={"Contacto@theredlights.com"}/>

          <Form/>

        </MovingContainer>
    </div>
  )
}

export default ContactUs
