import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import TousCard from "../../compunent/tourCard/TousCard";
import Loading from "../../compunent/loading/Loading";

const Search = () => {
    const [searchParams] = useSearchParams();
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);
    const query = searchParams.get("search") || "";

    useEffect(() => {
        const getTours = async () => {
            try {
                const response = await axios.get("https://dz-tour-api.vercel.app/tour");
                const filteredTours = response.data.result.filter((tour) =>
                    tour.titel.toUpperCase().replace(/\s/g, "").includes(query.toUpperCase())
                );
                setTours(filteredTours);
            } catch (error) {
                console.error("Error fetching tours:", error);
            } finally {
                setLoading(false);
            }
        };
        getTours();
    }, [query]);

    return (
        <div className="w-full px-5 py-10 min-h-screen">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                Résultats de recherche pour <span className="text-cyan-600">"{query}"</span>
            </h1>
            <div className="flex flex-wrap justify-center gap-6">
                {loading ? (
                    <Loading />
                ) : tours.length > 0 ? (
                    tours.map((tour) => <TousCard from={true} tour={tour} key={tour._id} />)
                ) : (
                    <h2 className="text-2xl text-gray-700 mt-20 text-center">
                        Aucun résultat trouvé
                    </h2>
                )}
            </div>
        </div>
    );
};

export default Search;
