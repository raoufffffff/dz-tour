import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const LogIn = () => {
    const [searchparams] = useSearchParams()
    const navigate = useNavigate()
    const [user, setUser] = useState({ name: "", phone: "" });
    const [errors, setErrors] = useState({ name: false, phone: false });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {
            name: user.name.trim() === "",
            phone: user.phone.trim() === ""
        };
        setErrors(newErrors);

        if (!newErrors.name && !newErrors.phone) {
            setLoading(true);
            try {
                const response = await axios.post("https://dz-tour-api.vercel.app/join", user);
                console.log("Response:", response.data.result);
                window.localStorage.setItem("user", JSON.stringify(response.data.result));
                navigate(searchparams.get("from") ? `/evant/${searchparams.get("from")}` : '/acount')
            } catch (error) {
                console.error("Erreur lors de l'enregistrement:", error);
                alert("Une erreur est survenue. Veuillez réessayer.");
            } finally {
                setLoading(false);
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: false }));
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-cyan-100 to-white">

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="w-11/12 md:w-6/12 lg:w-4/12 bg-white shadow-xl rounded-2xl p-8"
            >
                <h1 className="text-center text-3xl font-bold text-cyan-600 mb-6">
                    Connectez-vous à <span className="text-rose-500">Dz</span>
                    <span className="text-gray-600">.</span>
                    <span className="text-cyan-600">Tour</span>
                </h1>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Nom
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={user.name}
                            onChange={handleChange}
                            placeholder="Entrez votre nom"
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">Le nom est obligatoire</p>}
                    </div>

                    <div>
                        <label
                            htmlFor="phone"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Numéro de téléphone
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={user.phone}
                            onChange={handleChange}
                            placeholder="Entrez votre numéro de téléphone"
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">Le numéro de téléphone est obligatoire</p>}
                    </div>
                    <p className="mt-6 text-sm text-gray-600 text-center">
                        <Link to={`/signup/?from=${searchparams.get("from")}`} className="text-cyan-600 underline"> Créer un compte</Link>.
                    </p>
                    <button
                        type="submit"
                        className="w-full bg-cyan-600 text-white py-2 px-4 rounded-lg hover:bg-cyan-700 transition duration-200 flex justify-center items-center"
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <svg
                                    className="animate-spin h-5 w-5 mr-3 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v8H4z"
                                    ></path>
                                </svg>
                                Chargement...
                            </>
                        ) : (
                            "Connexion"
                        )}
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default LogIn;
