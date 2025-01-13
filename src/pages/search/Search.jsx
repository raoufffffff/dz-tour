import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import axios from "axios";
import TousCard from "../../compunent/tourCard/TousCard";
import Loading from "../../compunent/loading/Loading";
import SearchInput from "../../compunent/search/Search";

const Search = () => {
    const [searchParams] = useSearchParams()
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);
    useEffect(() => {
        const getTours = async () => {
            try {
                const response = await axios.get('https://dz-tour-api.vercel.app/tour');
                const mysearch = response.data.result.filter(tour =>
                    tour.titel.toUpperCase().replace(/\s/g, "").includes(searchParams.get('search').toUpperCase()))
                setTours(mysearch);
            } catch (error) {
                console.error("Error fetching tours:", error);
            } finally {
                setLoading(false);
            }
        };
        getTours();
    }, []);
    return (
        <div
            className="w-full px-5"
        >
            <h1
                className="text-2xl my-5"
            >Résultats de recherche pour "{searchParams.get("search")}"</h1>
            <div
                className='flex flex-wrap   a b w-full px-3'
            >
                {loading ? <Loading /> : tours.length > 0 ? tours.map(e => {
                    return <TousCard from={true} tour={e} key={e} />
                }) : <h1
                    className='text-3xl text-gray-800 capitalize mt-20 text-center'
                >no result</h1>}
            </div>
        </div>
    )
}

export default Search