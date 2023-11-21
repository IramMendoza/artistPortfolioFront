import ImageAboutTest from "./ImageAboutTest"
import SectionHeader from "../generics/SectionHeader"
import AboutBackground from "./AboutBackground"
import TextAbout from "./TextAbout"
import { useRef, useState, useEffect } from "react"

const CustomSectionHeader = ({ header }) => {
  return (
    <div className=" flex px-[5vh] md:flex md:justify-center">
      <SectionHeader header={header} />
    </div>
  )
}

const About = ({ about }) => {

  const aboutContainer = useRef(null)

  return (
    <section className='' ref={aboutContainer}>
      <AboutBackground>

        <CustomSectionHeader header={"NOSOTROS"} />

        <TextAbout about={about} />

        <ImageAboutTest refContainer={aboutContainer} />

      </AboutBackground>
    </section>
  )
}

export default About

