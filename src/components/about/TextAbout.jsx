const TextAbout = ({ about }) => {
    return (
        <p className=" text-white pb-[3rem] lg:text-2xl xl:text-3xl text-xl">
            {about && about}
        </p>
    )
}

export default TextAbout
