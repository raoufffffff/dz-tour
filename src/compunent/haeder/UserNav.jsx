import { motion } from "framer-motion";
import userlinks from "../../constanst/links/userlinks";
import { Link, useNavigate } from "react-router-dom";
const UserNav = ({ hide }) => {
    const navigate = useNavigate()
    const logOut = () => {
        window.localStorage.removeItem("user");
        navigate('/')
    };
    return (
        <div
            onClick={hide}
            className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex items-end justify-center md:items-center  z-[1000000000]">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="w-full  md:w-6/12 lg:w-4/12 bg-white shadow-xl rounded-t-2xl md:rounded-2xl py-6 px-8"
            >
                <h1 className="flex justify-center text-2xl font-bold mb-6">
                    <motion.span
                        initial={{ x: -100 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        animate={{ x: 0 }}
                        className="text-rose-500"
                    >
                        Dz
                    </motion.span>
                    <motion.span
                        initial={{ x: -100 }}
                        transition={{ duration: 0.5, type: "spring", delay: 0.2 }}
                        animate={{ x: 0 }}
                        className="text-gray-600"
                    >
                        .
                    </motion.span>
                    <motion.span
                        initial={{ x: -100 }}
                        transition={{ duration: 0.5, type: "spring", delay: 0.4 }}
                        animate={{ x: 0 }}
                        className="text-cyan-600"
                    >
                        Tour
                    </motion.span>
                </h1>
                <nav className="flex flex-col space-y-4">
                    {userlinks.map((link, index) => (
                        <motion.div
                            key={link}
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <Link
                                to={`/${link.link}`}
                                className="block text-lg font-medium text-gray-700 hover:text-cyan-600 transition duration-200 capitalize"
                                onClick={hide}
                            >
                                {link.name}
                            </Link>
                        </motion.div>
                    ))}
                </nav>
                <button
                    onClick={logOut}
                    className="mt-6 w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200"
                >
                    Déconnexion
                </button>
            </motion.div>
        </div>
    )
}

export default UserNav