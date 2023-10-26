import MovingContainer from "../generics/MovingContainer"
import SectionHeader from "../generics/SectionHeader"
import Form from "../contactUs/Form"
import Email from "../contactUs/Email"
import ImageContact from "../contactUs/ImageContactUs"


const ContactUs = () => {

  const movementValuesY = {
    "Mobile" : [[0,0.6,1],[0, -2000, 0]],
    "Tablet" : [[0,0.6,1],[0, -2000, 0]],
    "Laptop" : [[0,0.6,1],[0, -2000, 0]],
    "Desktop" : [[0,0.6,1],[0, -2000, 0]]
}

  return (
    <div className=' bg-neutral-900 h-screen overflow-y-hidden'>
        <MovingContainer movementValues={movementValuesY}>

          <div className=" pt-10">
            <SectionHeader color="White" header={"CONTACTO"}/>
          </div>

          <Email email={"Contacto@theredlights.com"}/>

          <Form/>

          <ImageContact/>

        </MovingContainer>
    </div>
  )
}

export default ContactUs
