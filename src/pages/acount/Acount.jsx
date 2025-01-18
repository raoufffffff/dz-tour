import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBookOpen, FaWallet } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaTicketSimple } from "react-icons/fa6";
import axios from "axios";

const Account = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(
        JSON.parse(window.localStorage.getItem("user")) || null
    );
    const [copy, setcopy] = useState(0)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getUser = async () => {


            try {
                const response = await axios.get(`https://dz-tour-api.vercel.app/join/user/${user._id}`);
                setUser(response.data.result);
            } catch {
                setError("Une erreur est survenue lors de la récupération des données utilisateur.");
            } finally {
                setLoading(false);
            }
        };

        getUser();
    }, []);

    const logOut = () => {
        setUser(null);
        window.localStorage.removeItem("user");
        navigate('/');
    };

    if (loading) {
        return (
            <motion.div
                className="bg-gray-100 flex justify-center items-center min-h-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <p className="text-xl font-semibold">Chargement...</p>
            </motion.div>
        );
    }

    if (error) {
        return (
            <motion.div
                className="bg-gray-100 flex justify-center items-center min-h-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="text-center">
                    <p className="text-red-500 text-lg">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        Réessayer
                    </button>
                </div>
            </motion.div>
        );
    }

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
                        <h1>Niveau <span className="text-yellow-400">{user.level}</span></h1>
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

                </motion.div>
                <motion.div
                    className="bg-white w-10/12 mt-5 mx-auto rounded-xl shadow-lg pt-3 pb-7 px-4"
                    whileHover={{ scale: 1.02 }}
                >
                    <div className="flex items-start">
                        <FaTicketSimple className="text-cyan-600 mr-2" size={30} />
                        <p className="mt-1 text-center">Vos coupons</p>
                    </div>
                    {user.compo.length === 0 ? (
                        <p className="text-[#0007] text-center mt-5">Vous n'avez pas de coupons.</p>
                    ) : (
                        user.compo.map((e, index) => (
                            <div
                                key={index}
                                className={` ${copy == e.name ? "bg-rose-500" : "bg-cyan-600"} text-white rounded-lg p-4 mt-3 shadow-md cursor-pointer hover:scale-105 relative`}
                                onClick={() => {
                                    setcopy(e.name)
                                    navigator.clipboard.writeText(e.code).then(() => {
                                        console.log("Code copied to clipboard:", e.code);
                                    }).catch(err => {
                                        console.error("Failed to copy code:", err);
                                    });
                                }}
                            >
                                <h3 className="text-lg font-bold">{e.name}</h3>
                                <p>Code: <span className="font-mono">{e.code}</span></p>
                                <p

                                >Valeur: <span className="font-semibold">{e.value}%</span></p>
                                {copy == e.name && <p
                                    className="absolute top-[50%] translate-y-[-50%] right-3 rotate-90 capitalize"
                                >copy</p>}
                            </div>
                        ))
                    )}
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
