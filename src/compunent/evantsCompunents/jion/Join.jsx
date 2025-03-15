import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoExitOutline } from "react-icons/io5";
import QRCodeGenerator from "../../qr/Qr";

const Join = ({ hide, price, id, name, img, userid }) => {
    const localuser = JSON.parse(window.localStorage.getItem("user")) || null;

    const [result, setResult] = useState(null);
    const [user, setUser] = useState({
        name: localuser?.name || "",
        phone: localuser?.phone || "",
        date: { day: "", month: "", year: "" },
        q: 1,
        img,
        evant: name,
        evantid: id,
        userid,
        price,
    });
    const [formErr, setFormErr] = useState({ name: false, phone: false, date: false });
    const [done, setDone] = useState(false);
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    const [promoCode, setPromoCode] = useState("");
    const [discount, setDiscount] = useState(0);

    const generateOptions = (count, start = 1) => {
        return Array.from({ length: count }, (_, i) => (
            <option value={start + i} key={i}>{`${start + i}`.padStart(2, "0")}</option>
        ));
    };

    const joinUser = async () => {
        setLoading(true);
        const finalPrice = price * user.q * (1 - discount / 100);
        try {
            const response = await axios.post(`https://dz-tour-api.vercel.app/join/${id}`, {
                ...user,
                price: finalPrice,
                date: `${user.date.year}-${user.date.month}-${user.date.day}`
            });
            setResult(response.data.result);
            console.log(response.data);

            setDone(true);
        } catch (error) {
            console.error(error);
            setErr(true);
        } finally {
            setLoading(false);
        }
    };

    const handlePromoCode = async () => {
        try {
            const response = await axios.put(`https://dz-tour-api.vercel.app/join/compo/${userid}`, { code: promoCode });
            if (response.data.result) {
                setDiscount(response.data.result);
            } else {
                alert("Code promo invalide");
                setDiscount(0);
            }
        } catch (error) {
            alert("Erreur lors de l'application du code promo");
            setDiscount(0);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {
            name: !user.name.trim(),
            phone: !user.phone.trim(),
            date: !user.date.day || !user.date.month || !user.date.year,
        };

        setFormErr(errors);
        if (Object.values(errors).some(Boolean)) return;
        joinUser();
    };

    const totalPrice = price * user.q * (1 - discount / 100);

    return (
        <>
            <div onClick={hide} className="fixed bg-black bg-opacity-40 top-0 left-0 w-full h-screen z-[101]"></div>
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="fixed w-full md:w-8/12 right-0 top-0 h-screen bg-white shadow-lg z-[102]"
            >
                <div onClick={hide} className="absolute top-5 right-5 cursor-pointer md:hidden text-gray-600 hover:text-gray-800">
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
                    <form className="w-full h-full flex flex-col justify-center px-8" onSubmit={handleSubmit}>
                        <label htmlFor="name" className="mb-2 font-semibold text-gray-700">
                            Nom et prénom : <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="name"
                            type="text"
                            className={`border-2 py-2 px-4 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 ${formErr.name ? "border-red-500" : "border-gray-300"}`}
                            placeholder="Votre nom"
                            value={user.name}
                            onChange={(e) => setUser({ ...user, name: e.target.value })}
                        />

                        <label htmlFor="phone" className="mb-2 font-semibold text-gray-700">
                            Numéro de téléphone : <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            className={`border-2 py-2 px-4 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 ${formErr.phone ? "border-red-500" : "border-gray-300"}`}
                            placeholder="Votre numéro de téléphone"
                            value={user.phone}
                            onChange={(e) => setUser({ ...user, phone: e.target.value })}
                        />

                        <label className="mb-2 font-semibold text-gray-700">Date de réservation :</label>
                        <div className="flex space-x-2 mb-4">
                            <select
                                className={`border-2 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 ${formErr.date ? "border-red-500" : "border-gray-300"}`}
                                onChange={(e) => setUser({ ...user, date: { ...user.date, day: e.target.value } })}
                            >
                                <option value="">Jour</option>
                                {generateOptions(31)}
                            </select>
                            <select
                                className={`border-2 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 ${formErr.date ? "border-red-500" : "border-gray-300"}`}
                                onChange={(e) => setUser({ ...user, date: { ...user.date, month: e.target.value } })}
                            >
                                <option value="">Mois</option>
                                {generateOptions(12)}
                            </select>
                            <select
                                className={`border-2 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 ${formErr.date ? "border-red-500" : "border-gray-300"}`}
                                onChange={(e) => setUser({ ...user, date: { ...user.date, year: e.target.value } })}
                            >
                                <option value="">Année</option>
                                <option value="2025">2025</option>
                            </select>
                        </div>

                        <label htmlFor="quantity" className="mb-2 font-semibold text-gray-700">
                            Nombre de personnes :
                        </label>
                        <input
                            id="quantity"
                            type="number"
                            className="border-2 py-2 px-4 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            value={user.q}
                            min={1}
                            onChange={(e) => setUser({ ...user, q: Math.max(1, e.target.value) })}
                        />

                        {discount === 0 && (
                            <div className="mb-4">
                                <label htmlFor="promoCode" className="mb-2 font-semibold text-gray-700">
                                    Code Promo :
                                </label>
                                <div className="flex space-x-2">
                                    <input
                                        id="promoCode"
                                        type="text"
                                        className="border-2 py-2 px-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                        placeholder="Entrez votre code promo"
                                        value={promoCode}
                                        onChange={(e) => setPromoCode(e.target.value)}
                                    />
                                    <button
                                        type="button"
                                        className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700"
                                        onClick={handlePromoCode}
                                    >
                                        Appliquer
                                    </button>
                                </div>
                            </div>
                        )}

                        <div className="mb-3 text-lg font-semibold text-gray-700">
                            Total : <span className="text-cyan-600">{price * user.q} DA</span>
                        </div>
                        <div className="mb-6 text-lg font-semibold text-gray-700">
                            Finale Total : <span className="text-cyan-600">{totalPrice} DA</span>
                        </div>

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
