import { useState } from "react";
import { motion } from "framer-motion";

const HomeAdd = () => {
    const [user] = useState(
        JSON.parse(window.localStorage.getItem("user")) || null
    );
    const [show, setshow] = useState(true)
    if (user || !show) return null;

    return (
        <div
            onClick={() => setshow(false)}
            className="fixed bg-black bg-opacity-50 flex justify-center left-0 top-0 items-center w-full h-screen z-50">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="w-10/12 md:w-8/12 lg:w-6/12 bg-white rounded-xl shadow-lg p-8 text-center"
            >
                <img
                    src="/image/home-1.jpg"
                    alt="Welcome Illustration"
                    className="w-full h-36 object-cover rounded-xl mb-6"
                />
                <h1 className="text-xl font-bold text-cyan-600 mb-4">
                    Rejoignez <span className="text-rose-500">Dz</span>
                    <span className="text-gray-700">.</span>
                    <span className="text-cyan-600">Tour</span>
                </h1>
                <p className="text-gray-700 mb-6">
                    Créez un compte pour accéder à nos services et profiter des meilleures offres pour vos aventures.
                </p>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-cyan-600 text-white py-3 px-8 rounded-full hover:bg-cyan-700 transition duration-200"
                    onClick={() => (window.location.href = "/signup")}
                >
                    Créer un compte
                </motion.button>
                <p className="mt-6 text-sm text-gray-600">
                    Déjà un compte ? <a href="/login" className="text-cyan-600 underline">Connectez-vous ici</a>.
                </p>
            </motion.div>
        </div>
    );
};

export default HomeAdd;
