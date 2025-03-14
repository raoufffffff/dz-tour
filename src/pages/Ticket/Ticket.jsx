import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const Ticket = () => {
    const { id } = useParams();
    const [ticket, setTicket] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTicket = async () => {
            try {
                const response = await axios.get(`https://dz-tour-api.vercel.app/join/ticket/${id}`);
                setTicket(response.data.result);
            } catch (error) {
                console.error("Erreur lors de la récupération du ticket:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchTicket();
    }, [id]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl font-bold text-cyan-600"
                >
                    Chargement...
                </motion.div>
            </div>
        );
    }

    if (!ticket) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl font-bold text-rose-500"
                >
                    Aucun ticket trouvé.
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-50 to-cyan-50 py-10 px-6">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="max-w-2xl mx-auto bg-white shadow-xl rounded-lg p-8 border-t-4 border-cyan-600"
            >

                <h1 className="text-4xl font-bold text-cyan-600 text-center mb-8">
                    Détails du Ticket
                </h1>
                {ticket.img && (
                    <div className="mt-8 text-center">
                        <img
                            src={ticket.img}
                            alt="Ticket"
                            className="rounded-lg shadow-lg mx-auto w-11/12 h-60 object-cover border-1 border-rose-500 mb-10"
                        />
                    </div>
                )}
                <div className="space-y-6">
                    <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-700">Nom :</span>
                        <span className="text-gray-800">{ticket.name}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-700">Téléphone :</span>
                        <span className="text-gray-800">{ticket.phone}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-700">Événement :</span>
                        <span className="text-gray-800">{ticket.evant}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-700">Date :</span>
                        <span className="text-gray-800">
                            {ticket.date}
                        </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-700">Nombre de personnes :</span>
                        <span className="text-gray-800">{ticket.q}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-700">Prix :</span>
                        <span className="text-gray-800">{ticket.price} DA</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-700">Statut :</span>
                        <span className="text-gray-800 capitalize">{ticket.status}</span>
                    </div>
                </div>


            </motion.div>
        </div>
    );
};

export default Ticket;
