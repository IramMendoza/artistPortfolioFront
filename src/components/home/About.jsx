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

  const aboutContainer = useRef(null)

  return (
    <div ref={aboutContainer}>
      <AboutBackground>

        <CustomSectionHeader header={"NOSOTROS"} />

        <TextAbout about={about} />

        <ImageAboutTest refContainer={aboutContainer} />

      </AboutBackground>
    </div>
  )
}

export default About

