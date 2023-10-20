import SectionHeader from "../generics/SectionHeader"
import SocialMedia from "../followUs/SocialMedia" 

const FollowUs = () => {
  return (
    <section className=" py-10" id="titleContainer">
        <SectionHeader header={"SIGUENOS"}/>
        <SocialMedia socialMedia={"Facebook"}/>
        <SocialMedia socialMedia={"Instagram"}/>
        <SocialMedia socialMedia={"Twitter"}/>
        <SocialMedia socialMedia={"Youtube"}/>
    </section>
  )
}

export default FollowUs
