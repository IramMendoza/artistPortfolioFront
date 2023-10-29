import ImageAboutTest from "../about/ImageAboutTest"
import SectionHeader from "../generics/SectionHeader"
import AboutBackground from "../about/AboutBackground"
import TextAbout from "../about/TextAbout"
import { useRef } from "react"

const CustomSectionHeader = ({ header }) => {
  return (
    <div className=" flex justify-start">
      <SectionHeader header={header} />
    </div>
  )
}

const About = ({ about }) => {

  const container = useRef(null)

  return (
    <div ref={container}>
      <AboutBackground>

        <CustomSectionHeader header={"NOSOTROS"} />

        <TextAbout about={about} />

        <ImageAboutTest ref={container} />

      </AboutBackground>
    </div>
  )
}

export default About

