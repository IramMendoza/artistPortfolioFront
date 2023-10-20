const TextAbout = ({ about }) => {
    return (
        <p className=" text-white px-10 pb-10 text-xl">
            {about && about}
        </p>
    )
}

export default TextAbout
