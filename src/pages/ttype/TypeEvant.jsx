import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Titel from '../../compunent/titel/Titel'
import axios from 'axios'
import TousCard from '../../compunent/tourCard/TousCard'
import categories from '../../constanst/types'
import Loading from '../../compunent/loading/Loading'
const TypeEvant = () => {
    const [searchParams] = useSearchParams()
    const [tours, settours] = useState([])
    const [loading, setloading] = useState(true)
    const [err, seterr] = useState(false)
    const OurCategory = categories.map((e, i) => {
        return <Link
            className='flex bg-[#ddd7] min-w-[45%] md:min-w-[180px]  md:flex-1   h-16 py-1 mx-1 px-3  items-center rounded-xl'
            to={`/type/?type=${e.name}`}
            key={i}
            onClick={() => gettours(e.name)}
        >
            <img
                className='h-full'
                src={e.img} />
            <span
                className='mx-auto font-bold'
            >
                {e.name}
            </span>
        </Link>
    })
    const gettours = async (a) => {
        setloading(true)
        try {
            await axios.put(`https://dz-tour-api.vercel.app/tour/type`, {
                type: a ? a : searchParams.get("type")
            }
            )
                .then(res => {
                    settours(res.data.result)
                })
        } catch {
            seterr(true)
        } finally {
            setloading(false)
        }
    }
    useEffect(() => {

        gettours()
    }, [])
    if (err) return <h1>err</h1>
    return (
        <div
            className='w-full'
        >
            <div
                className='flex a b mt-8 mb-3 pb-2 flex-nowrap overflow-x-auto    pl-1 gap-2 '
            >

                {OurCategory}
            </div>
            <Titel name={searchParams.get("type")} />
            <div
                className='flex flex-wrap  justify-around a b w-full px-3'
            >

                {loading ? <Loading /> : tours.length > 0 ? tours.map(e => {
                    return <TousCard from={true} tour={e} key={e} />
                }) : <h1
                    className='text-3xl text-gray-800 capitalize mt-20 text-center'
                >il n'y a pas d'évènement actuellement</h1>}
            </div>


        </div>
    )
}

export default TypeEvant