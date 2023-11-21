const Button = ({text, onclick}) => {
  return (
    <button className="font-bold pr-[5vh] lg:text-lg text-sm underline text-white" onClick={onclick}>{text}</button>
  )
}

export default Button
