const Button = ({text, onclick}) => {
  return (
    <button className=" pl-10 font-bold text-sm underline text-white" onClick={onclick}>{text}</button>
  )
}

export default Button
