import SectionHeader from "../generics/SectionHeader"
import Form from "./Form"
import Email from "./Email"
import ImageContact from "./ImageContactUs"

const ContactUs = () => {

  return (
    <section className=' bg-neutral-900 sticky top-0 z-10 h-screen overflow-y-hidden overflow-x-auto'>
      <div className=" lg:p-[15vh] px-[4vh]">
        <SectionHeader color="White" header={"CONTACTO"} />
        <Email email={"Contacto@theredlights.com"} />
      <Form />
      </div>
      <ImageContact/>
    </section>
  )
}

export default ContactUs
