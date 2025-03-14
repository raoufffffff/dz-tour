import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const MyTicket = () => {
    const navigate = useNavigate();
    const [user] = useState(
        JSON.parse(window.localStorage.getItem("user")) || null
    );
    const [myTickets, setMyTickets] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) {
            navigate("/");
            return;
        }
        const getTickets = async () => {
            try {
                const response = await axios.get(`https://dz-tour-api.vercel.app/join/user/ticket/${user._id}`);
                setMyTickets(response.data.result);
            } catch (error) {
                console.error("Error fetching tickets:", error);
            } finally {
                setLoading(false);
            }
        };
        getTickets();
    }, [user, navigate]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-100 to-rose-100">
                <div className="text-cyan-600 text-xl font-bold animate-pulse">
                    Chargement...
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-100 to-rose-100 py-10 px-6">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 border-t-4 border-cyan-600">
                <h1 className="text-3xl font-bold text-cyan-600 text-center mb-6">
                    Mes Tickets
                </h1>

                {myTickets.length === 0 ? (
                    <p className="text-center text-gray-600 text-lg">
                        Vous n'avez aucun ticket pour le moment.
                    </p>
                ) : (
                    <div className="flex flex-col space-y-4">
                        {myTickets.map((ticket) => (
                            <Link
                                key={ticket._id}
                                to={`/ticket/${ticket._id}`}
                                className="flex items-center bg-white shadow-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden border border-cyan-200"
                            >
                                <img
                                    src={ticket.img}
                                    alt={ticket.evant}
                                    className="w-1/3 h-32 object-cover"
                                />
                                <div className="w-2/3 p-4 flex flex-col justify-center">
                                    <h2 className="text-xl font-semibold text-rose-600">
                                        {ticket.evant}
                                    </h2>
                                    <p className="text-gray-600 text-sm">
                                        Date: {ticket.date}
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                        prix: {ticket.price} DA
                                    </p>
                                    <p className="text-gray-600 text-sm capitalize">
                                        Statut: {ticket.status}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyTicket;
