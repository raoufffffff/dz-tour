import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <motion.div
            className="min-h-screen bg-gradient-to-br from-cyan-100 to-rose-100 py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg p-8">
                <h1 className="text-4xl font-bold text-cyan-600 mb-6 text-center">
                    Contactez-nous
                </h1>
                <p className="text-lg text-gray-700 text-center mb-10">
                    Nous sommes là pour vous aider ! Contactez-nous via l'une des méthodes ci-dessous.
                </p>

                {/* Contact Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <motion.div
                        className="text-center bg-cyan-50 p-6 rounded-lg shadow-md"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <FaPhoneAlt className="text-cyan-600 text-3xl mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800">Téléphone</h3>
                        <p className="text-gray-600 mt-2">+213 123 456 789</p>
                    </motion.div>

                    <motion.div
                        className="text-center bg-rose-50 p-6 rounded-lg shadow-md"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <FaEnvelope className="text-rose-500 text-3xl mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                        <p className="text-gray-600 mt-2">
                            <a href="mailto:support@dz-tour.com" className="text-cyan-600 underline">
                                support@dz-tour.com
                            </a>
                        </p>
                    </motion.div>

                    <motion.div
                        className="text-center bg-cyan-50 p-6 rounded-lg shadow-md"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <FaMapMarkerAlt className="text-cyan-600 text-3xl mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800">Adresse</h3>
                        <p className="text-gray-600 mt-2">123 Rue de la Liberté, Alger</p>
                    </motion.div>
                </div>

                {/* Contact Form */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Envoyez-nous un message</h2>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                Nom
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
                                placeholder="Votre nom"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
                                placeholder="Votre email"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
                                placeholder="Votre message"
                                rows="5"
                            ></textarea>
                        </div>

                        <div className="text-center">
                            <motion.button
                                className="bg-rose-500 text-white py-3 px-6 rounded-full hover:bg-rose-600 transition duration-200 shadow-lg"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                Envoyer
                            </motion.button>
                        </div>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
