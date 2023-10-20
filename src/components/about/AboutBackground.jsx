const AboutBackground = ({children}) => {
  return (
    <div 
      style={{ backgroundColor : "black" }}
      className=' bg-black w-full overflow-hidden pb-[8rem]'>
        {children}
    </div>
  )
}

export default AboutBackground
