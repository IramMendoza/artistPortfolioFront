import ImageAbout from "../about/ImageAbout"
import SectionHeader from "../generics/SectionHeader"
import AboutBackground from "../about/AboutBackground"
import TextAbout from "../about/TextAbout"

const CustomSectionHeader = ({header}) => {
  return (
    <div className=" flex justify-start">
      <SectionHeader header={header}/>
    </div>
  )
}

const About = ({about}) => {

  return (
    <AboutBackground>

      <CustomSectionHeader header={"NOSOTROS"}/>

      <TextAbout about={about}/>

      <ImageAbout/>

    </AboutBackground>
  )
}

export default About

