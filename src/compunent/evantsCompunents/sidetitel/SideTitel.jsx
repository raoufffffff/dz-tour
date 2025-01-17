
const SideTitel = ({ titel, icon }) => {
    return (
        <span
            className='text-2xl font-bold mb-3 flex items-center'
        >
            {icon}
            {titel}
        </span>
    )
}

export default SideTitel