import MovingContainer from "../generics/MovingContainer"
import SectionHeader from "../generics/SectionHeader"
import Form from "../contactUs/Form"
import Email from "../contactUs/Email"
import ImageContact from "../contactUs/ImageContactUs"
import { useRef } from "react"
import { contactUsAnimation } from "./animations/contactUsAnimation"


const ContactUs = () => {

  const contactUsContainer = useRef(null)

  return (
    <div ref={contactUsContainer} className=' bg-neutral-900 h-screen overflow-y-hidden overflow-x-auto'>
        <MovingContainer movementValues={contactUsAnimation.movementValues} refContainer={contactUsContainer}>

          <div className=" pt-[5rem]">
            <SectionHeader color="White" header={"CONTACTO"}/>
          </div>

          <Email email={"Contacto@theredlights.com"}/>

          <Form/>

          <ImageContact refContainer={contactUsContainer}/>

        </MovingContainer>
    </div>
  )
}

export default ContactUs
