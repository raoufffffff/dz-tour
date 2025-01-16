import { useState } from "react";
import { motion } from "framer-motion";
import LogIn from "./LogIn";
import { FaBookOpen, FaWallet } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaTicketSimple } from "react-icons/fa6";

const Account = () => {
    const [user, setUser] = useState(
        JSON.parse(window.localStorage.getItem("user")) || null
    );



    const logOut = () => {
        setUser(null);
        window.localStorage.removeItem("user");
    };

    if (!user) return <LogIn hide={setUser} />;

    return (
        <motion.div
            className="bg-gray-100 flex justify-center min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="w-full bg-white pb-2 rounded-lg overflow-hidden"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="bg-gradient-to-r from-cyan-600 to-rose-500 flex pt-6 pb-28 px-5 capitalize text-white">
                    <div
                        className="rounded-full bg-white mr-2 py-3 px-4 text-cyan-600"
                    >
                        <span>{user.name[0]}</span>
                    </div>
                    <div>
                        <h1>Bienvenue, {user.name}</h1>
                        <h1>Niveau <span className="text-yellow-400">1</span></h1>
                    </div>
                </div>
                <motion.div
                    className="bg-white w-10/12 -mt-24 mx-auto rounded-xl shadow-lg pt-3 pb-7 px-4"
                    whileHover={{ scale: 1.02 }}
                >
                    <div className="flex items-start">
                        <FaBookOpen className="text-cyan-600 mr-2" size={30} />
                        <p className="mt-1 text-center">Vous êtes à 10 réservations du niveau 2 Dz.Tour</p>
                    </div>
                    <Link
                        to={'/level'}
                        className="flex font-bold mt-5 w-full justify-center text-rose-500"
                    >
                        En savoir plus sur les niveaux Dz.Tour
                    </Link>
                </motion.div>
                <motion.div
                    className="bg-white w-10/12 mt-5 mx-auto rounded-xl shadow-lg pt-3 pb-7 px-4"
                    whileHover={{ scale: 1.02 }}
                >
                    <div className="flex items-start">
                        <FaWallet className="text-cyan-600 mr-2" size={30} />
                        <p className="mt-1 text-center">Vos aventures avec nous</p>
                    </div>
                    <p className="text-[#0007] text-center mt-5">Vous n'en avez pas encore.</p>
                    <Link
                        className="flex font-bold mt-5 w-full justify-center text-rose-500"
                    >
                        Voir tout
                    </Link>
                </motion.div>
                <motion.div
                    className="bg-white w-10/12 mt-5 mx-auto rounded-xl shadow-lg pt-3 pb-7 px-4"
                    whileHover={{ scale: 1.02 }}
                >
                    <div className="flex items-start">
                        <FaTicketSimple className="text-cyan-600 mr-2" size={30} />
                        <p className="mt-1 text-center">Vos coupons</p>
                    </div>
                    <p className="text-[#0007] text-center mt-5">Vous n'avez pas de coupons.</p>
                    <Link
                        className="flex font-bold mt-5 w-full justify-center text-rose-500"
                    >
                        Comment les obtenir ?
                    </Link>
                </motion.div>
                <div
                    className="flex w-full justify-center"
                >

                    <button
                        onClick={logOut}
                        className="mt-6 w-8/12 md:w-4/12 mx-auto bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200"
                    >
                        Déconnexion
                    </button>
                </div>
            </motion.div>

        </motion.div>
    );
};

export default Account;
