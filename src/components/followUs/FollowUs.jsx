import SectionHeader from "../generics/SectionHeader"
import SocialMedia from "./SocialMedia" 

const FollowUs = () => {
  return (
    <section className=" bg-black w-full absolute z-20 lg:pb-[30vh] pb-[15vh] lg:px-[15vh] px-[4vh]" id="titleContainer">
        <SectionHeader header={"SIGUENOS"}/>
        <SocialMedia socialMedia={"Facebook"}/>
        <SocialMedia socialMedia={"Instagram"}/>
        <SocialMedia socialMedia={"Twitter"}/>
        <SocialMedia socialMedia={"Youtube"}/>
    </section>
  )
}

export default FollowUs
