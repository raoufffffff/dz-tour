import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
import Nav from './Nav'
const Header = () => {
    const [show, setshow] = useState(false)
    const hide = () => setshow(false)
    return (
        <header

            className='flex justify-between items-center px-6 lg:px-10 py-5 shadow-xl '
        >
            <Link
                className='flex items-center text-xl lg:text-3xl hover:-rotate-2 transition-all hover:scale-105'
                to={'/'}>

                <motion.span
                    initial={{ x: -100 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    animate={{ x: 0 }}

                    className='text-rose-500'
                >Dz</motion.span>
                <motion.span
                    initial={{ x: -100 }}
                    transition={{ duration: 0.5, type: "spring", delay: 0.2 }}
                    animate={{ x: 0 }}
                    className=''
                >.</motion.span>
                <motion.span
                    initial={{ x: -100 }}
                    transition={{ duration: 0.5, type: "spring", delay: 0.4 }}
                    animate={{ x: 0 }} className='text-cyan-600'
                >Tour</motion.span>
            </Link>

            <button
                onClick={() => setshow(true)}
            >
                <FaBars
                    size={28}
                    className='text-cyan-600'
                />
            </button>
            {show && <Nav hide={hide} />}
        </header>
    )
}

export default Header