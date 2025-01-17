import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";

const SignIn = () => {
    const [searchparams] = useSearchParams()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        dateOfBirth: "",
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: false });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {
            name: formData.name.trim() === "",
            phone: formData.phone.trim() === "",
            email: formData.email.trim() === "" || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email),
            dateOfBirth: formData.dateOfBirth.trim() === "",
        };

        setErrors(newErrors);

        if (Object.values(newErrors).some((error) => error)) {
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post("https://dz-tour-api.vercel.app/join", formData);

            window.localStorage.setItem("user", JSON.stringify(response.data.result));
            navigate(searchparams.get("from") ? `/evant/${searchparams.get("from")}` : '/acount')
        } catch (error) {
            console.error("Erreur lors de l'inscription:", error);
            alert("Une erreur est survenue. Veuillez réessayer.");
        } finally {
            setLoading(false);
        }
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
                    Inscrivez-vous à <span className="text-rose-500">Dz</span>
                    <span className="text-gray-700">.</span>
                    <span className="text-cyan-600">Tour</span>
                </h1>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                            Nom
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Entrez votre nom"
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 ${errors.name ? "border-red-500" : "border-gray-300"}`}
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">Le nom est obligatoire</p>}
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                            Numéro de téléphone
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Entrez votre numéro de téléphone"
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 ${errors.phone ? "border-red-500" : "border-gray-300"}`}
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">Le numéro de téléphone est obligatoire</p>}
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Entrez votre email"
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 ${errors.email ? "border-red-500" : "border-gray-300"}`}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">Un email valide est obligatoire</p>}
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="dateOfBirth">
                            Date de naissance
                        </label>
                        <input
                            id="dateOfBirth"
                            name="dateOfBirth"
                            type="date"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 ${errors.dateOfBirth ? "border-red-500" : "border-gray-300"}`}
                        />
                        {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">La date de naissance est obligatoire</p>}
                    </div>

                    <button
                        type="submit"
                        className={`w-full py-2 px-4 rounded-lg text-white ${loading ? "bg-gray-400" : "bg-cyan-600 hover:bg-cyan-700"} transition duration-200`}
                        disabled={loading}
                    >
                        {loading ? "Chargement..." : "S'inscrire"}
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default SignIn;
