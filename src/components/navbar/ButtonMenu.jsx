import { Link } from "react-router-dom"

const ButtonMenu = ({section, to}) => {
  return (
    <Link to={to}>
      <div className="flex justify-end">
        <div className=" pr-3 pt-1 text-white">{section}</div>
      </div>
    </Link>
  )
}

export default ButtonMenu
