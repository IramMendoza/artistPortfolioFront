import { useGetData } from "../hooks/useGetData"
import { artistUrl } from "../../apiConfig"
import Header from "../components/home/Header"
import About from "../components/home/About"
import Events from "../components/home/Events"
import NextEvents from "../components/home/NextEvents"
import MeetOurTeam from "../components/home/MeetOurTeam"
import FollowUs from "../components/home/FollowUs"
import ContactUs from "../components/home/ContactUs"

const Home = () => {

  const { data, error } = useGetData(artistUrl)

  return (
    <div className="bg-black w-full">
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

      <FollowUs/>

      <ContactUs/>

    </div>

  )
}

export default Home