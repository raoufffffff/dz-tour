import axios from "axios";
import { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Search = () => {
    const [search, setsearch] = useState("")
    const [Loading, setLoading] = useState(true)
    const width = window.innerWidth
    const [tours, settours] = useState([])
    useEffect(() => {
        const gettoyrs = async () => {
            await axios.get('https://dz-tour-api.vercel.app/tour')
                .then(res => {
                    setLoading(false)
                    settours(res.data.result)
                })
        }
        gettoyrs()
    }, [])
    return (
        <div
            className={`flex w-full md:w-10/12 mx-auto mt-5 md:mt-10 ${width > 768 && "search"} px-5 rounded-xl md:h-56  justify-center items-center`}

        >
            <form className="flex w-full justify-center  md:w-8/12 bg-white px-5 md:px-1 py-1 rounded-xl h-16 ">
                <input
                    value={search}
                    onChange={(e) => setsearch(e.target.value)}
                    className="w-10/12 md:w-9/12 rounded-xl px-2 placeholder:pl-1 border border-[#aaa] focus:outline-none placeholder:text-black"
                    placeholder="Rechercher Tahwissa ..."
                />
                <button
                    className="ml-2 md:w-3/12 justify-center flex items-center rounded-xl text-white bg-[#2E3A59] md:text-xl px-3 py-1.5"
                    type="submit">
                    <IoSearchSharp size={24} className="md:mr-2" />
                    <span className="hidden md:flex">Recherche</span></button>

            </form>
            {search.length > 0 && <div
                className="absolute top-40 shadow-2xl border overflow-y-scroll w-11/12 md:w-6/12 max-h-64 md:top-64 md:left-56 bg-white py-1 a rounded-xl "
            >
                {tours.filter(e => e.titel.toUpperCase().replace(" ", "").includes(search.toUpperCase())).map(e => (
                    <Link
                        to={`/evant/${e._id}`}
                        key={e._id}
                        className="flex mb-2 px-3 w-full"
                    >
                        <img
                            src={e.imgs[0]}
                            className="min-w-[20%] max-w-[20%] mr-2 rounded-xl h-16"
                            alt="img"
                        />
                        <div>
                            <strong>{e.titel}</strong>
                            <p
                                className="one-line"
                            >{e.des}</p>
                        </div>
                    </Link>
                ))}
                {tours.filter(e => e.titel.toUpperCase().replace(" ", "").includes(search.toUpperCase())).length == 0 && <h1
                    className=' text-gray-800 capitalize my-10 text-center'
                >il n'y a pas d'évènement actuellement</h1>}
            </div>}
        </div>
    )
}

export default Search