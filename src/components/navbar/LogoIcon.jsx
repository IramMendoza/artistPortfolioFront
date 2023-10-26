import { artistUrl } from "../../../apiConfig"
import { useGetData } from "../../hooks/useGetData"

const LogoIcon = () => {

    const { data } = useGetData(artistUrl)

    return (
        <div className=" w-[50%]">
            <img className=" w-[4rem] p-3" src={data && data.image ? data.image : null} />
        </div>
    )
}

export default LogoIcon
