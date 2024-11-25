import React from 'react'

const SideTitel = ({ titel, icon }) => {
    return (
        <span
            className='text-xl flex items-center'
        >
            {icon}
            {titel}
        </span>
    )
}

export default SideTitel