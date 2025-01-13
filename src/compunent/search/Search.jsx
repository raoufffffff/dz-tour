import axios from "axios";
import { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const SearchInput = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

    useEffect(() => {
        const getTours = async () => {
            try {
                const response = await axios.get('https://dz-tour-api.vercel.app/tour');
                setTours(response.data.result);
            } catch (error) {
                console.error("Error fetching tours:", error);
            } finally {
                setLoading(false);
            }
        };
        getTours();
    }, []);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (search.trim().length === 0) return;
        navigate(`/search/?search=${search}`);
    };

    const filteredTours = tours.filter(tour =>
        tour.titel.toUpperCase().replace(/\s/g, "").includes(search.toUpperCase())
    );

    return (
        <div
            className={`flex w-full md:w-10/12 mx-auto mt-5 md:mt-10 ${window.innerWidth > 768 && "search"
                } px-5 rounded-xl md:h-56 justify-center items-center`}
        >
            <form
                onSubmit={handleSearchSubmit}
                className="flex w-full justify-center md:w-8/12 bg-white px-5 md:px-1 py-1 rounded-xl h-16"
            >
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-10/12 md:w-9/12 rounded-xl px-2 placeholder:pl-1 border border-[#aaa] focus:outline-none placeholder:text-black"
                    placeholder="Rechercher Tahwissa ..."
                />
                <button
                    className="ml-2 md:w-3/12 justify-center flex items-center rounded-xl text-white bg-[#2E3A59] md:text-xl px-3 py-1.5"
                    type="submit"
                >
                    <IoSearchSharp size={24} className="md:mr-2" />
                    <span className="hidden md:flex">Recherche</span>
                </button>
            </form>
            {search.length > 0 && (
                <div
                    className="absolute a top-40 shadow-2xl border overflow-y-scroll w-11/12 md:w-6/12 max-h-64 md:top-64 left-[50%] -translate-x-[50%] bg-white py-1 rounded-xl"
                >
                    {loading ? (
                        <strong className="mx-auto w-full flex justify-center">Loading
                            <span
                                className="animate-spin flex border border-r-2 border-cyan-600 w-5 h-5 rounded-full mx-2"
                            ></span>
                        </strong>
                    ) : filteredTours.length > 0 ? (
                        filteredTours.map((tour) => (
                            <Link
                                to={`/evant/${tour._id}`}
                                key={tour._id}
                                className="flex mb-2 px-3 w-full"
                            >
                                <img
                                    src={tour.imgs[0]}
                                    className="min-w-[20%] max-w-[20%] mr-2 rounded-xl h-16"
                                    alt={tour.titel}
                                />
                                <div>
                                    <strong>{tour.titel}</strong>
                                    <p className="one-line">{tour.des}</p>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <h1 className="text-gray-800 capitalize my-10 text-center">
                            Il n{"'"}y a pas d{"'"}évènement actuellement
                        </h1>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchInput;
