function Button ({ handleFunction, text }) {
    return (
      <button className=" text-white px-[3vh] text-xl md:text-2xl" onClick={handleFunction}>
        { text }
      </button>
    )
  }

export default Button