import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
const Header = () => {
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
            <Link
                className='bg-cyan-600 text-white px-4 py-2 rounded-xl hover:-rotate-2 transition-all hover:scale-105'
                to={'/'}>
                <motion.span

                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Publier dz.tour

                </motion.span>
            </Link>
        </header>
    )
}

export default Header