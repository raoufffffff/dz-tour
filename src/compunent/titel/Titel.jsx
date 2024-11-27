
const Titel = ({ name }) => {
    return (
        <strong
            className={`${name == "tours similaires" ? "text-2xl" : "text-3xl"}  text-gray-800 block my-2 px-5`}
        >{name}</strong>
    )
}

export default Titel