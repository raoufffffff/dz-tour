import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { FaLocationArrow } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const TousCard = ({ tour, from }) => {
    return (
        <Link
            to={`/evant/${tour._id}`}
            className={`${from ? "w-[43%] md:w-3/12" : "min-w-[200px] md:min-w-[250px]"} mx-1 my-4 shadow-lg bg-white rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl`}
        >
            {/* Image Section */}
            <div className="relative">
                <img
                    src={tour.imgs[0]}
                    alt={tour.titel}
                    className="h-[150px] md:h-[180px] w-full object-cover"
                />
                {tour.type === "sorties" && (
                    <span className="absolute top-2 left-2 bg-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-lg">
                        Sortie
                    </span>
                )}
            </div>

            {/* Content Section */}
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 truncate">
                    {tour.titel}
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                    <span className="font-medium">Départ:</span> {tour.state}
                </p>
                {tour.type === "sorties" && (
                    <p className="text-sm text-gray-800 font-bold flex items-center mt-2">
                        <FaLocationArrow className="text-cyan-600 mr-2" /> {tour.to}
                    </p>
                )}
                <p className="text-lg text-gray-800 font-bold flex items-center mt-3">
                    <FaRegMoneyBillAlt className="text-green-600 mr-2" />
                    {tour.price} DA
                </p>
            </div>
        </Link>
    );
};

export default TousCard;
