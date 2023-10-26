import { artistUrl } from "../../../apiConfig"
import { useGetData } from "../../hooks/useGetData"
import Menu from "./Menu"


const NavbarTest = () => {

    const { data } = useGetData(artistUrl)

  return (
    <section className=' w-full flex bg-neutral-900'>

      <div className=" w-[50%]">
        <img className=" w-[4rem] p-3" src={ data && data.image ? data.image : null }/>
      </div>

      <div className=" w-[50%] flex justify-end">
        <Menu/>
      </div>

    </section>
  )
}

export default NavbarTest
