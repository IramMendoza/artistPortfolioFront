import { useGetData } from "../hooks/useGetData"
import { artistUrl } from "../../apiConfig"
import Header from "../components/header/HeaderTest"
import About from "../components/about/About"
import Events from "../components/events/Events"
import NextEvents from "../components/nextEvents/NextEvents"
import MeetOurTeam from "../components/meetOurTeam/MeetOurTeam"
import FollowUs from "../components/followUs/FollowUs"
import ContactUs from "../components/contactUs/ContactUs"

const Home = () => {

  const { data, error } = useGetData(artistUrl)

  return (
    <div className=" bg-black w-full">

        <Header
          slogan={ data && data.slogan ? data.slogan : "" }
          name={ data && data.name ? data.name : "" }
        />
        <About
          about={ data && data.about ? data.about : "" }
        />

      <Events/>

      <NextEvents/>

      <MeetOurTeam/>

      <div className=" w-full relative">
          <div className=" w-full absolute z-10">
            <FollowUs/>
          </div>
          <div className=" sticky top-0 z-0">
            <ContactUs/>
          </div>
        <div className=" h-screen"/>
      </div>


    </div>

  )
}

export default Home