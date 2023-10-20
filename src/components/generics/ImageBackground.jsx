const ImageBackground = ({children, image}) => {
    return (
        <div className="w-full h-screen"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%, rgba(0,0,0,0) 100%), url(${image})`,
          backgroundPosition: 'right top',
        }}>
          {children}
        </div>
    )
  }
  
  export default ImageBackground
