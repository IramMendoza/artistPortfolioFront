import ImageAboutTest from "./ImageAboutTest"
import SectionHeader from "../generics/SectionHeader"
import AboutBackground from "./AboutBackground"
import TextAbout from "./TextAbout"
import { useRef, useState, useEffect } from "react"

const CustomSectionHeader = ({ header }) => {
  return (
    <div className=" flex justify-start">
      <SectionHeader header={header} />
    </div>
  )
}

const About = ({ about }) => {

  const aboutContainer = useRef(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    setHeight(window.innerHeight)
  },[])

  return (
    <div className={`relative z-0 ${height < 1000 ? 'h-screen' : 'h-[60vh]'} overflow-x-visible`} ref={aboutContainer}>
      <AboutBackground>

        <CustomSectionHeader header={"NOSOTROS"} />

        <TextAbout about={about} />

        <ImageAboutTest refContainer={aboutContainer} />

      </AboutBackground>
    </div>
  )
}

export default About

