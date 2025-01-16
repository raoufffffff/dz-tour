import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <motion.div
            className="min-h-screen bg-white "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Header Section */}
            <motion.div
                className="text-center py-10 bg-gradient-to-r from-cyan-600 to-rose-500 text-white"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, type: "spring" }}
            >
                <h1 className="text-4xl font-bold mb-4">À propos de Dz.Tour</h1>
                <p className="text-lg">Votre plateforme ultime pour réserver des événements et des activités</p>
            </motion.div>

            {/* Section 1: How It Works */}
            <motion.section
                className="px-6 md:px-16 py-10 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <h2 className="text-2xl font-bold text-cyan-600 mb-4">Comment ça marche ?</h2>
                <p className="text-gray-700 text-lg mb-6">
                    Réservez vos événements préférés en quelques clics. Que ce soit pour des sorties, des concerts, ou des activités de loisirs,
                    Dz.Tour simplifie tout le processus pour vous offrir une expérience fluide et agréable.
                </p>

            </motion.section>

            {/* Section 2: Levels and Benefits */}
            <motion.section
                className="px-6 md:px-16 py-10 text-center bg-gray-100"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <h2 className="text-2xl font-bold text-rose-500 mb-4">Les niveaux et avantages</h2>
                <p className="text-gray-700 text-lg mb-6">
                    Plus vous réservez, plus vous gagnez ! Chaque réservation vous rapproche d'un niveau supérieur, débloquant ainsi des
                    offres exclusives et des réductions incroyables.
                </p>

            </motion.section>

            {/* Section 3: Join Us */}
            <motion.section
                className="px-6 md:px-16 py-10 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <h2 className="text-2xl font-bold text-cyan-600 mb-4">Rejoignez-nous dès aujourd'hui</h2>
                <p className="text-gray-700 text-lg mb-6">
                    Créez un compte gratuitement et commencez à explorer les meilleures offres pour vos événements préférés.
                </p>
                <Link
                    to={'/acount'}
                    className="bg-cyan-600 text-white py-3 px-6 rounded-full hover:bg-cyan-700 transition duration-200 shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Inscrivez-vous maintenant
                </Link>
            </motion.section>
        </motion.div>
    );
};

export default About;
