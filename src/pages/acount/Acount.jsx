import { useState, useEffect } from "react";
import LogIn from "./LogIn";

const Account = () => {
    const [user, setUser] = useState(
        JSON.parse(window.localStorage.getItem("user")) || null
    );
    const [tours, setTours] = useState([]);

    useEffect(() => {
        if (user) {
            window.localStorage.setItem("user", JSON.stringify(user));

            // Fetch user's tour history
            const fetchTours = async () => {
                try {
                    const response = await fetch(`http://localhost:3010/tours?userId=${user.id}`);
                    const data = await response.json();
                    setTours(data);
                } catch (error) {
                    console.error("Erreur lors du chargement de l'historique des tours:", error);
                }
            };

            fetchTours();
        }
    }, [user]);

    const logOut = () => {
        setUser(null);
        window.localStorage.removeItem("user");
    };

    if (!user) return <LogIn hide={setUser} />;

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="w-10/12 md:w-8/12 lg:w-6/12 bg-white shadow-md rounded-lg overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-600 to-rose-500 text-white p-6 text-center">
                    <h1 className="text-2xl font-bold">Bienvenue!</h1>
                    <p className="mt-2">Ravi de vous revoir, {user.name}</p>
                </div>
                <div className="p-6">
                    <p className="text-gray-700 text-lg mb-4">
                        <span className="font-medium">Nom:</span> {user.name}
                    </p>
                    <p className="text-gray-700 text-lg mb-6">
                        <span className="font-medium">Téléphone:</span> {user.phone}
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Historique des Tours</h2>
                    {tours.length > 0 ? (
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-bold text-gray-800 mb-2">Confirmés</h3>
                                <ul className="space-y-4">
                                    {tours.filter(tour => tour.status === "confirmed").map((tour) => (
                                        <li
                                            key={tour.id}
                                            className="p-4 border rounded-lg shadow-sm bg-gray-50 hover:bg-gray-100 transition"
                                        >
                                            <h3 className="text-lg font-bold text-cyan-600">{tour.title}</h3>
                                            <p className="text-gray-600">Date: {new Date(tour.date).toLocaleDateString()}</p>
                                            <p className="text-gray-600">Lieu: {tour.location}</p>
                                            <p className="text-gray-600">Prix: {tour.price} DA</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-800 mb-2">En attente</h3>
                                <ul className="space-y-4">
                                    {tours.filter(tour => tour.status === "waiting").map((tour) => (
                                        <li
                                            key={tour.id}
                                            className="p-4 border rounded-lg shadow-sm bg-gray-50 hover:bg-gray-100 transition"
                                        >
                                            <h3 className="text-lg font-bold text-yellow-600">{tour.title}</h3>
                                            <p className="text-gray-600">Date: {new Date(tour.date).toLocaleDateString()}</p>
                                            <p className="text-gray-600">Lieu: {tour.location}</p>
                                            <p className="text-gray-600">Prix: {tour.price} DA</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-800 mb-2">Annulés</h3>
                                <ul className="space-y-4">
                                    {tours.filter(tour => tour.status === "cancelled").map((tour) => (
                                        <li
                                            key={tour.id}
                                            className="p-4 border rounded-lg shadow-sm bg-gray-50 hover:bg-gray-100 transition"
                                        >
                                            <h3 className="text-lg font-bold text-red-600">{tour.title}</h3>
                                            <p className="text-gray-600">Date: {new Date(tour.date).toLocaleDateString()}</p>
                                            <p className="text-gray-600">Lieu: {tour.location}</p>
                                            <p className="text-gray-600">Prix: {tour.price} DA</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <p className="text-gray-600">Aucun historique de tours trouvé.</p>
                    )}

                    <button
                        onClick={logOut}
                        className="mt-6 w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200"
                    >
                        Déconnexion
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Account;
