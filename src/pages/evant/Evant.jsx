import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ImageZoum from '../../compunent/evantsCompunents/evantzoumImage/ImageZoum'
import MinSCreenEvantImage from '../../compunent/evantsCompunents/minSCreenEvantImage/MinSCreenEvantImage'
import SideTitel from '../../compunent/evantsCompunents/sidetitel/SideTitel'
import { BsCalendarDate, BsChatRightText, BsCheck2 } from "react-icons/bs";
import { SiCashapp } from 'react-icons/si'
import { FaLocationArrow, FaRegStar } from 'react-icons/fa'
import Tours from '../../compunent/tours/Tours'
import About from '../../compunent/evantsCompunents/aboutHoster/About'
import Join from '../../compunent/evantsCompunents/jion/Join'
import { AnimatePresence } from 'framer-motion'
import LoadingPage from '../../compunent/loading/LoadingPage'


const Evant = () => {
    const navigate = useNavigate()
    const [user] = useState(
        JSON.parse(window.localStorage.getItem("user")) || null
    );
    const [evant, setevant] = useState(null)
    const [loading, setloading] = useState(true)
    const [show, setshow] = useState(false)
    const hide = () => setshow(false)
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
    if (loading) return <LoadingPage />
    if (err) return <h1>err</h1>
    window.document.title = evant.titel
    const url = `https://www.google.com/maps?q=${evant?.location?.lat},${evant?.location?.lng}`;
    return (
        <div
            className={` w-full overflow-hidden px-2 md:px-5 capitalize pb-5  py-3`}
        >
            <h1
                className='text-3xl md:text-4xl md:pl-5 mb-3'
            >{evant.titel}</h1>
            {evant.to && <span
                className='text-slate-600 text-lg pl-2'
            >Destination : {evant.to}</span>}

            <ImageZoum images={evant.imgs} />
            <MinSCreenEvantImage images={evant.imgs} />
            <div
                className='flex flex-col md:flex-row-reverse mt-5'
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
                        className='border-2 md:rounded-xl fixed bottom-0 left-0 py-1.5 md:py-3 font-bold border-cyan-600 bg-cyan-500 md:bg-[#16b6b41f] flex md:flex-col text-white md:text-[#2e3a59] w-full md:relative md:w-11/12 mx-auto md:mt-5 px-3   items-center lowercase z-[100]'
                    >
                        <h2
                            className='md:text-xl'
                        >Prix à partir de :</h2>
                        <strong
                            className='md:text-xl ml-2 capitalize my-3'
                        >{evant.price} Da</strong>
                        <button
                            onClick={() => {
                                if (user) {
                                    setshow(true)
                                } else {
                                    navigate(`/login/?from=${id}`)
                                }
                            }}
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
                    {evant?.location?.lat &&
                        <>

                            <SideTitel titel={"Localisation :"}
                                icon={<FaLocationArrow className='text-cyan-600 mr-3' />}
                            />


                            <a href={url} target='_blank' className='underline'>
                                {evant.titel}
                            </a>
                            <div
                                className='w-10/12 mx-auto h-[0.1px] bg-[#3337] my-3'>
                            </div>
                        </>
                    }
                    {evant.type == "séjour" ?
                        <>
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
                                    {evant.rotor && <li>Retour : {evant.rotor}</li>}
                                </ul>
                                {evant.days && <li
                                >
                                    <strong>Durée</strong> : <span>{evant.days} jours  / {evant.days - 1} nuits</span>
                                </li>}
                                {evant.hotel && <li
                                >
                                    <strong>Hébergement</strong> : <span>{evant.hotel}</span>
                                </li>}
                            </ul>
                        </>
                        :
                        <>
                            <SideTitel
                                titel={"Détails"}
                                icon={<BsCalendarDate className='mr-2 text-gray-600' />}
                            />
                            <h2
                                className='text-1xl pl-5 font-bold'
                            >{evant.date}</h2>
                        </>
                    }

                    {evant.program.length > 0 &&
                        <>

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
                                        className='flex my-3'
                                    >
                                        <strong
                                            className='text-xl flex'
                                        ><FaRegStar className='mr-1.5 text-gray-600' /> {evant.type === "sorties" && `Jour ${i + 1} :`}  </strong>
                                        <ul
                                            className='list-disc '
                                        >
                                            {e}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </>
                    }
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
                    {evant.type === "sorties" &&
                        <>

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
                                    <strong>Adulte (chambre double ou triple) : </strong> {evant.price} Da
                                </li>
                                <li>
                                    <strong>Enfant (6-12 ans) : </strong> {evant.price - (evant.price * 0.1)} Da
                                </li>
                                <li>
                                    <strong>Enfant (-6 ans, sans siège) </strong> 0
                                </li>
                            </ul>
                        </>
                    }
                    <div
                        className='w-10/12 mx-auto h-[0.1px] bg-[#3337] my-3'
                    ></div>
                    <p
                        className='px-3 text-wrap w-9/12 font-bold'
                    >
                        {evant?.tags.map(e => (
                            <span
                                key={e}
                                className="mx-1"
                            >#{e}</span>
                        ))}

                    </p>
                    <About id={evant.hoster} />
                </div>
            </div>
            <Tours id={id} type={evant.type} />

            <AnimatePresence>
                {show && <Join hide={hide} id={id} name={evant.titel} userid={user._id} img={evant.imgs[0]} price={evant.price} />}
            </AnimatePresence>
        </div>
    )
}

export default Evant