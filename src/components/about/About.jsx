import ImageAboutTest from "./ImageAboutTest"
import SectionHeader from "../generics/SectionHeader"
import AboutBackground from "./AboutBackground"
import TextAbout from "./TextAbout"
import { useRef, useState, useEffect } from "react"

const CustomSectionHeader = ({ header }) => {
  return (
    <div className=" flex justify-start md:flex md:justify-center">
      <SectionHeader header={header} />
    </div>
  )
}

const About = ({ about }) => {

  const aboutContainer = useRef(null)
  const [height, setHeight] = useState(0)

  function handleResize (){
    setHeight(window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className={`relative z-0 ${height < 1000 ? 'h-[70vh]' : 'h-[70vh]'} overflow-x-visible`} ref={aboutContainer}>
      <AboutBackground>

        <CustomSectionHeader header={"NOSOTROS"} />

        <TextAbout about={about} />

        <ImageAboutTest refContainer={aboutContainer} />

      </AboutBackground>
    </div>
  )
}

export default About

