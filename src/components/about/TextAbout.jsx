const TextAbout = ({ about }) => {
    return (
        <p className=" text-white px-10 lg:px-[10rem] pb-[3rem] text-xl">
            {about && about}
        </p>
    )
}

export default TextAbout
