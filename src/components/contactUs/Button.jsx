const Button = ({text, onclick}) => {
  return (
    <button className="font-bold lg:text-lg text-sm underline text-white" onClick={onclick}>{text}</button>
  )
}

export default Button
