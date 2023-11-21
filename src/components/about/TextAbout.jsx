const TextAbout = ({ about }) => {
    return (
        <p className=" text-white pb-[3rem] px-[5vh] md:px-[8vh] max-w-[1280px] lg:text-2xl xl:text-3xl text-xl">
            {about && about}
        </p>
    )
}

export default TextAbout
