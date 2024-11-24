import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { FaLocationArrow } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const TousCard = ({ tour }) => {
    return (
        <>
            <Link
                to={`/evant/${tour._id}`}
                className='w-[45%] md:w-3/12 my-2 shadow-2xl bg-[#eeea] capitalize'
            >
                <img src={tour.imgs[0]}
                    className='h-[150px] rounded-xl w-full'
                />
                <div
                    className='flex-col px-2 w-full pt-1 mt-1 pb-2'
                >
                    <strong>  {tour.titel}</strong>
                    <p
                        className='pl-1'
                    >Départ :   {tour.state}</p>

                    {tour.type === "sorties" && <p
                        className='font-bold flex items-center'
                    ><FaLocationArrow className='text-cyan-600 mr-1' /> london</p>}
                    <p
                        className='pl-1 flex items-center font-bold'
                    ><FaRegMoneyBillAlt className='mr-1 text-green-600' />
                        {tour.price} da</p>

                </div>
            </Link> <Link
                to={`/evant/${tour._id}`}
                className='w-[45%] md:w-3/12 my-2 shadow-2xl bg-[#eeea] capitalize'
            >
                <img src={tour.imgs[1]}
                    className='h-[150px] rounded-xl w-full'
                />
                <div
                    className='flex-col px-2 w-full pt-1 mt-1 pb-2'
                >
                    <strong>  {tour.titel}</strong>
                    <p
                        className='pl-1'
                    >Départ :   {tour.state}</p>

                    {tour.type === "sorties" && <p
                        className='font-bold flex items-center'
                    ><FaLocationArrow className='text-cyan-600 mr-1' /> london</p>}
                    <p
                        className='pl-1 flex items-center font-bold'
                    ><FaRegMoneyBillAlt className='mr-1 text-green-600' />
                        {tour.price} da</p>

                </div>
            </Link>

        </>
    )
}

export default TousCard