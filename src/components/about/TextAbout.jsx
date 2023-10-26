const TextAbout = ({ about }) => {
    return (
        <p className=" text-white px-10 pb-[3rem] text-xl">
            {about && about}
        </p>
    )
}

export default TextAbout
