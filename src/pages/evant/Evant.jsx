import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ImageZoum from '../../compunent/evantsCompunents/evantzoumImage/ImageZoum'
import MinSCreenEvantImage from '../../compunent/evantsCompunents/minSCreenEvantImage/MinSCreenEvantImage'
import SideTitel from '../../compunent/evantsCompunents/sidetitel/SideTitel'
import { BsCalendarDate, BsChatRightText, BsCheck2 } from "react-icons/bs";
import { SiCashapp } from 'react-icons/si'


const Evant = () => {
    const [evant, setevant] = useState(null)
    const [loading, setloading] = useState(true)
    const [err, seterr] = useState(false)
    const { id } = useParams()
    useEffect(() => {
        const getevant = async () => {
            try {
                await axios.get(`https://dz-tour-api.vercel.app/tour/${id}`)
                    .then(res => {
                        setevant(res.data.result)

                    })
            } catch {
                seterr(true)
            } finally {
                setloading(false)
            }
        }
        const scroolTop = () => {
            window.scrollTo({
                behavior: "smooth",
                top: 0
            })
        }

        getevant()
        scroolTop()
    }, [id])
    if (loading) return <h1>louding</h1>
    if (err) return <h1>err</h1>
    return (
        <div
            className='w-full overflow-hidden px-5 capitalize pb-[60px]  py-3'
        >

            <h1
                className='text-3xl mb-3'
            >{evant.titel}</h1>


            <ImageZoum images={evant.imgs} />
            <MinSCreenEvantImage images={evant.imgs} />
            <div
                className='flex flex-col md:flex-row-reverse'
            >
                <div
                    className='w-full md:w-4/12 md:px-3 mb-5'
                >
                    <div
                        className='hidden md:flex'
                    >
                        <SideTitel titel={"Réservation"} />
                    </div>
                    <div
                        className='border-2 md:rounded-xl fixed bottom-0 left-0 py-1.5 md:py-3 font-bold border-cyan-600 bg-cyan-500 md:bg-[#16b6b41f] flex md:flex-col text-white md:text-[#2e3a59] w-full md:relative md:w-11/12 mx-auto md:mt-5 px-2   items-center lowercase'
                    >
                        <h2
                            className='md:text-xl'
                        >Prix à partir de :</h2>
                        <strong
                            className='md:text-xl ml-2 capitalize my-3'
                        >{evant.price} Da</strong>
                        <button
                            className='bg-cyan-600 text-white rounded-lg text-lg ml-auto md:mx-auto  px-5 py-2'
                        >
                            Réserver
                        </button>
                    </div>
                </div>
                <div
                    className='w-full md:w-8/12 md:px-3'
                >
                    <SideTitel titel={"Description :"} />
                    <p
                        className='my-2'
                    >{evant.des}</p>
                    <div
                        className='w-10/12 mx-auto h-[0.1px] bg-[#3337] my-3'
                    ></div>
                    <SideTitel
                        titel={"Détails du séjour"}
                        icon={<BsCalendarDate className='mr-2 text-gray-600' />}
                    />
                    <ul
                        className='list-disc pl-5'
                    >
                        <li
                            className='font-bold'
                        >Dates </li>

                        <ul
                            className='list-[circle] pl-5'
                        >
                            <li>Départ : {evant.date}</li>
                            <li>Retour : {evant.rotor}</li>
                        </ul>
                        <li
                        >
                            <strong>Durée</strong> : <span>{evant.days} jours  / {evant.days - 1} nuits</span>
                        </li>
                        <li
                        >
                            <strong>Hébergement</strong> : <span>{evant.hotel}</span>
                        </li>
                    </ul>
                    <div
                        className='w-10/12 mx-auto h-[0.1px] bg-[#3337] my-3'
                    ></div>
                    <SideTitel
                        titel={"Programme"}
                        icon={<BsChatRightText className='mr-2 text-amber-600' />}
                    />
                    <div>
                        {evant.program.map((e, i) => (
                            <div
                                key={i}
                            >
                                <strong
                                    className='text-xl'
                                >🗓 Jour {i + 1} :</strong>
                                <ul
                                    className='list-disc pl-10'
                                >
                                    {e.map((q, j) => (
                                        <li key={j}>{q}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div
                        className='w-10/12 mx-auto h-[0.1px] bg-[#3337] my-3'
                    ></div>
                    <SideTitel
                        titel={"Inclus dans l’offre :"}
                        icon={<BsCheck2 size={30} className='mr-2 text-red-600' />}
                    />
                    <ul
                        className='list-disc pl-10'
                    >
                        {evant.Inclus.map((e, i) => (
                            <li key={i}>{e}</li>
                        ))}
                    </ul>
                    <div
                        className='w-10/12 mx-auto h-[0.1px] bg-[#3337] my-3'
                    ></div>
                    <SideTitel
                        titel={"Tarifs :"}
                        icon={<SiCashapp className="mr-2 text-green-600" />}
                    />
                    <ul
                        className='list-disc pl-10'
                    >

                        <li>
                            <strong>Adulte (chambre double ou triple) : </strong> {evant.Tarifs[0].Adulte}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Evant