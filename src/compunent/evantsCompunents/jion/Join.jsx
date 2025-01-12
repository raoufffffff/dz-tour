import axios from "axios"
import { motion } from "framer-motion"
import { useState } from "react"
import { IoExitOutline } from "react-icons/io5"

const Join = ({ hide, id }) => {
    const [user, setuser] = useState({
        name: "",
        phone: "",
        date: {
            day: "",
            manth: "",
            yaer: ""
        },
        q: 1
    })
    const [formerr, setformerr] = useState(false)
    const [done, setfdone] = useState(false)
    const [err, setferr] = useState(false)
    const [loading, setloading] = useState(false)

    const days = (b) => {
        let a = []
        for (let i = 0; i < b; i++) {
            a.push(i + 1)
        }
        a = a.map(e => {
            return <option value={e} key={e}>{e < 10 && 0}{e}</option>
        })
        return a
    }
    const joinuser = async () => {
        setloading(true)
        try {
            await axios.post(`https://dz-tour-api.vercel.app/tour/join/${id}`, { user })
                .then((res) => {
                    console.log(res);

                    setfdone(true)
                })
        } catch (error) {
            console.log(error);
            setferr(true)
        } finally {
            setloading(false)
        }
    }
    return (
        <>
            <div

                onClick={hide}
                className="fixed bg-[#3333] top-0 left-0 w-full h-screen z-40 "
            ></div>
            <motion.div
                initial={{ x: 1000 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                exit={{ x: 1000 }}
                className="fixed w-full  z-50 md:w-8/12 right-0 top-0 h-screen bg-white"
            >
                <div
                    onClick={hide}
                    className="absolute top-5 right-5 md:hidden"
                >
                    <IoExitOutline size={20} />
                </div>
                {err ?
                    <div
                        className="w-full h-full flex items-center"
                    >
                        <div
                            className="bg-[#ffc7c7] w-10/12 py-5 mx-auto px-8 font-semibold border "
                        >something went wrong !</div>
                    </div>
                    :
                    done
                        ?
                        <div
                            className="w-full h-full flex items-center"
                        >
                            <div
                                className="bg-[#e0ffc7] w-10/12 py-5 mx-auto px-8 font-semibold border "
                            >Réservation bien reçu, Merci !</div>
                        </div> :
                        <form
                            className="w-full h-full flex flex-col  justify-center"
                            onSubmit={(e) => {
                                e.preventDefault()
                                if (user.name == "" || user.phone == "") {
                                    setformerr(true)
                                    return
                                }
                                joinuser()
                            }}
                        >
                            <label
                                className="w-10/12 mx-auto"
                                htmlFor="name"
                            >
                                Nom et prénom : <span className="text-red-700 font-bold"> *</span>
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                className={`border-2 py-1 w-10/12 mx-auto  px-1.5 my-3 rounded-lg border-[#333a]" ${formerr && "border-rose-600"}`}
                                placeholder="voter name"
                                value={user.name}
                                onChange={(e) => setuser({ ...user, name: e.target.value })}
                            />
                            <label
                                className="w-10/12 mx-auto"
                                htmlFor="name"
                            >
                                Numéro de téléphone : <span className="text-red-700 font-bold"> *</span>
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                className={`border-2 py-1 w-10/12 mx-auto  px-1.5 my-3 rounded-lg border-[#333a]" ${formerr && "border-rose-600"}`}
                                placeholder="voter Numéro de téléphone"
                                value={user.phone}
                                onChange={(e) => setuser({ ...user, phone: e.target.value })}
                            />
                            <label
                                className="w-10/12 mx-auto"
                                htmlFor="name"
                            >
                                Date de réservation :
                            </label>
                            <div
                                className="pl-12"
                            >
                                <select name="day" id="day"
                                    className="border-2 border-[#333a] rounded-md mx-2 mt-2"
                                    onChange={(e) => setuser({ ...user, date: { ...user.date, day: e.target.value } })}
                                >
                                    <option value="jj">jj</option>
                                    {days(30)}
                                </select>
                                <select name="manth" id="manth"
                                    className="border-2 border-[#333a] rounded-md mx-2 mt-2"
                                    onChange={(e) => setuser({ ...user, date: { ...user.date, manth: e.target.value } })}
                                >
                                    <option value="mm">mm</option>
                                    {days(12)}
                                </select>
                                <select name="yaer" id="yaer"
                                    className="border-2 border-[#333a] rounded-md mx-2 mt-2"
                                    onChange={(e) => setuser({ ...user, date: { ...user.date, yaer: e.target.value } })}
                                >
                                    <option value="yyyy">yyyy</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>

                                </select>
                            </div>
                            <label
                                className="w-10/12 mx-auto"
                                htmlFor="name"
                            >
                                Nombres de personnes
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="number"
                                className="border-2 py-1 w-10/12 mx-auto  px-1.5 my-3 rounded-lg border-[#333a]"
                                placeholder="voter Numéro de téléphone"
                                value={user.q}
                                onChange={(e) => setuser({ ...user, q: e.target.value < 1 ? 1 : e.target.value })}
                            />
                            <button
                                className={`bg-[#eee] py-4 mt-3 rounded-lg hover:text-white hover:bg-cyan-600 px-5  w-fit ml-12`}
                            >{loading ? "loading" : "Réserver"}</button>
                        </form>}
            </motion.div>
        </>
    )
}

export default Join