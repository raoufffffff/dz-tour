import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaBars } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import Nav from './Nav'
import UserNav from './UserNav'
const Header = () => {
    const [user, setUser] = useState(
        JSON.parse(window.localStorage.getItem("user")) || null
    );
    const [show, setshow] = useState(false)
    const [showuser, setshowuser] = useState(false)
    useEffect(() => {
        const interval = setInterval(() => {
            setUser(JSON.parse(window.localStorage.getItem("user")));
        }, 5000);

        return () => clearInterval(interval); // Cleanup the interval on unmount
    }, []);


    const hide = () => setshow(false)
    const hideuser = () => setshowuser(false)
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


            <div
                className='flex items-center'
            >
                {!user && <Link
                    to={'login'}
                    className=" w-full mr-4  bg-rose-500  flex transition duration-200 justify-center text-white capitalize font-bold py-1 rounded-xl px-2"
                >
                    Connexion
                </Link>}
                <button
                    onClick={() => setshow(true)}
                >
                    <FaBars
                        size={28}
                        className='text-cyan-600'
                    />
                </button>
                {user &&
                    <button
                        className='capitalize ml-4 text-white  bg-cyan-600  py-2 px-3.5 rounded-full'
                        onClick={() => setshowuser(true)}
                    >
                        <span>{user.name[0]}</span>
                    </button>

                }

            </div>

            {show && <Nav hide={hide} />}
            {showuser && <UserNav hide={hideuser} />}
        </header>
    )
}

export default Header