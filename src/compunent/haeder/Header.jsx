import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
import Nav from './Nav'
import UserNav from './UserNav'
const Header = () => {
    const [user, setUser] = useState(
        JSON.parse(window.localStorage.getItem("user")) || null
    );
    const [show, setshow] = useState(false)
    const hide = () => setshow(false)
    return (
        <header

            className='flex justify-between items-center px-6 lg:px-10 py-4 shadow-xl '
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

            {user ?
                <button
                    className='capitalize text-white  bg-cyan-600  py-2 px-3.5 rounded-full'
                    onClick={() => setshow(true)}
                >
                    <span>{user.name[0]}</span>
                </button>
                :
                <button
                    onClick={() => setshow(true)}
                >
                    <FaBars
                        size={28}
                        className='text-cyan-600'
                    />
                </button>}
            {show && (user ? <UserNav hide={hide} /> : <Nav hide={hide} />)}
        </header>
    )
}

export default Header