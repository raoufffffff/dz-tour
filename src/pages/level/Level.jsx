import { motion } from "framer-motion";

const Level = () => {
    const levels = [
        {
            level: 1,
            description: "Recevez des coupons mensuels pour vos prochaines réservations.",
            color: "bg-rose-100",
        },
        {
            level: 2,
            description: "Obtenez 10% de réduction sur toutes vos réservations.",
            color: "bg-cyan-100",
        },
        {
            level: 3,
            description: "Accédez à des offres exclusives et des événements VIP.",
            color: "bg-rose-200",
        },
        {
            level: 4,
            description: "Profitez de 20% de réduction et d'un support prioritaire.",
            color: "bg-cyan-200",
        },
        {
            level: 5,
            description: "Obtenez un accès gratuit à certains événements et des récompenses spéciales.",
            color: "bg-rose-300",
        },
    ];

    return (
        <motion.div
            className="min-h-screen bg-gradient-to-br from-cyan-100 to-rose-100 py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg p-8">
                <h1 className="text-4xl font-bold text-cyan-600 mb-6 text-center">
                    Nos Niveaux
                </h1>
                <p className="text-lg text-gray-700 text-center mb-10">
                    Montez en niveau en complétant des événements. Chaque 10 événements, vous passez au niveau suivant jusqu'au niveau 5.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {levels.map((level) => (
                        <motion.div
                            key={level.level}
                            className={`p-6 rounded-lg shadow-lg ${level.color}`}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="text-center">
                                <h2 className="text-3xl font-bold text-gray-800">Niveau {level.level}</h2>
                                <p className="text-gray-700 mt-4">{level.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <motion.button
                        className="bg-cyan-600 text-white py-3 px-6 rounded-full hover:bg-cyan-700 transition duration-200 shadow-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        En savoir plus
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

export default Level;
