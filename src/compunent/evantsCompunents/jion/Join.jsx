import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoExitOutline } from "react-icons/io5";
import QRCodeGenerator from "../../qr/Qr";

const Join = ({ hide, id, name, img, userid }) => {
    const [result, setResult] = useState(null);
    const [user, setUser] = useState({
        name: "",
        phone: "",
        date: {
            day: "",
            month: "",
            year: "",
        },
        q: 1,
        img: img,
        evant: name,
        evantid: id,
        userid: userid,
    });
    const [formErr, setFormErr] = useState({ name: false, phone: false, date: false });
    const [done, setDone] = useState(false);
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);

    const generateDays = (count) => {
        return Array.from({ length: count }, (_, i) => (
            <option value={i + 1} key={i}>{(i + 1).toString().padStart(2, "0")}</option>
        ));
    };

    const joinUser = async () => {
        setLoading(true);
        try {
            const response = await axios.post(`https://dz-tour-api.vercel.app/join/${id}`, user);
            setResult(response.data.result);
            setDone(true);
        } catch (error) {
            console.error(error);
            setErr(true);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const hasErrors = {
            name: user.name.trim() === "",
            phone: user.phone.trim() === "",
            date: user.date.day === "" || user.date.month === "" || user.date.year === "",
        };

        setFormErr(hasErrors);

        if (Object.values(hasErrors).some((error) => error)) {
            return;
        }
        joinUser();
    };

    return (
        <>
            <div
                onClick={hide}
                className="fixed bg-black bg-opacity-40 top-0 left-0 w-full h-screen z-[101]"
            ></div>
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="fixed w-full md:w-8/12 right-0 top-0 h-screen bg-white shadow-lg z-[102]"
            >
                <div
                    onClick={hide}
                    className="absolute top-5 right-5 cursor-pointer md:hidden text-gray-600 hover:text-gray-800"
                >
                    <IoExitOutline size={24} />
                </div>
                {err ? (
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="bg-red-100 text-red-600 p-6 rounded-lg shadow-lg">
                            Une erreur s'est produite. Veuillez réessayer !
                        </div>
                    </div>
                ) : done ? (
                    <div className="w-full h-full flex flex-col items-center justify-center">
                        <QRCodeGenerator result={result} />
                    </div>
                ) : (
                    <form
                        className="w-full h-full flex flex-col justify-center px-8"
                        onSubmit={handleSubmit}
                    >
                        <label className="mb-2 font-semibold text-gray-700" htmlFor="name">
                            Nom et prénom : <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className={`border-2 py-2 px-4 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 ${formErr.name ? "border-red-500" : "border-gray-300"}`}
                            placeholder="Votre nom"
                            value={user.name}
                            onChange={(e) => setUser({ ...user, name: e.target.value })}
                        />

                        <label className="mb-2 font-semibold text-gray-700" htmlFor="phone">
                            Numéro de téléphone : <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            className={`border-2 py-2 px-4 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 ${formErr.phone ? "border-red-500" : "border-gray-300"}`}
                            placeholder="Votre numéro de téléphone"
                            value={user.phone}
                            onChange={(e) => setUser({ ...user, phone: e.target.value })}
                        />

                        <label className="mb-2 font-semibold text-gray-700">Date de réservation :</label>
                        <div className="flex space-x-2 mb-4">
                            <select
                                name="day"
                                className={`border-2 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 ${formErr.date ? "border-red-500" : "border-gray-300"}`}
                                onChange={(e) => setUser({ ...user, date: { ...user.date, day: e.target.value } })}
                            >
                                <option value="">Jour</option>
                                {generateDays(31)}
                            </select>
                            <select
                                name="month"
                                className={`border-2 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 ${formErr.date ? "border-red-500" : "border-gray-300"}`}
                                onChange={(e) => setUser({ ...user, date: { ...user.date, month: e.target.value } })}
                            >
                                <option value="">Mois</option>
                                {generateDays(12)}
                            </select>
                            <select
                                name="year"
                                className={`border-2 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 ${formErr.date ? "border-red-500" : "border-gray-300"}`}
                                onChange={(e) => setUser({ ...user, date: { ...user.date, year: e.target.value } })}
                            >
                                <option value="">Année</option>
                                <option value="2025">2025</option>
                            </select>
                        </div>

                        <label className="mb-2 font-semibold text-gray-700" htmlFor="quantity">
                            Nombre de personnes :
                        </label>
                        <input
                            id="quantity"
                            name="quantity"
                            type="number"
                            className="border-2 py-2 px-4 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            value={user.q}
                            min={1}
                            onChange={(e) => setUser({ ...user, q: Math.max(1, e.target.value) })}
                        />

                        <button
                            type="submit"
                            className={`w-full py-3 text-white font-semibold rounded-lg transition-all duration-300 ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-cyan-600 hover:bg-cyan-700"}`}
                            disabled={loading}
                        >
                            {loading ? "Chargement..." : "Réserver"}
                        </button>
                    </form>
                )}
            </motion.div>
        </>
    );
};

export default Join;
