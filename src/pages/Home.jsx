import { useGetData } from "../hooks/useGetData"
import { artistUrl } from "../../apiConfig"
import { useRef } from "react"
import Header from "../components/header/Header"
import About from "../components/about/About"
import Events from "../components/events/Events"
import NextEvents from "../components/nextEvents/NextEvents"
import MeetOurTeam from "../components/meetOurTeam/MeetOurTeam"
import FollowUs from "../components/followUs/FollowUs"
import ContactUs from "../components/contactUs/ContactUs"

const Home = () => {

  const { data, error } = useGetData(artistUrl)
  const homeRef = useRef(null)

  return (
    <div className=" bg-black w-full">

      <div ref={homeRef} className=" lg:px-[15vh] px-[4vh] overflow-x-hidden">
        <Header
          slogan={ data && data.slogan ? data.slogan : "" }
          name={ data && data.name ? data.name : "" }
          homeRef={homeRef}
        />
        <About
          about={ data && data.about ? data.about : "" }
        />
      </div>

      <Events amountToRender={3}/>

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