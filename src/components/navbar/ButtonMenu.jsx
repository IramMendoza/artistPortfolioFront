import { Link } from "react-router-dom"

const ButtonMenu = ({section, to}) => {
  return (
    <Link to={to}>
          <ul className=" bg-neutral-800">
              <li className=" text-white">{section}</li>
          </ul>
    </Link>
  )
}

export default ButtonMenu
