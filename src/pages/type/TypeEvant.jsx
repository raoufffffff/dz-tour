import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Titel from '../../compunent/titel/Titel'
import axios from 'axios'
import TousCard from '../../compunent/tourCard/TousCard'
import Loading from '../../compunent/loading/Loading'
import Category from '../../compunent/Category/Category'
const TypeEvant = () => {
    const [searchParams] = useSearchParams()
    const [tours, settours] = useState([])
    const [loading, setloading] = useState(true)
    const [err, seterr] = useState(false)

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
            <Category />
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