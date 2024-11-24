import axios from 'axios'
import { useEffect, useState } from 'react'
import Titel from '../titel/Titel'
import TousCard from '../tourCard/TousCard'

const Tours = ({ type }) => {
    const [tours, settours] = useState([])
    const [loading, setloading] = useState(true)
    const [err, seterr] = useState(false)
    useEffect(() => {
        const gettours = async () => {
            try {
                await axios.put(`https://dz-tour-api.vercel.app/tour/type`, {
                    type: "sorties"
                })
                    .then(res => {
                        settours(res.data.result)

                    })
            } catch {
                seterr(true)
            } finally {
                setloading(false)
            }
        }
        gettours()
    }, [type])
    return (
        <div
            className='w-full'
        >
            <Titel name={type} />
            {
                loading ?
                    <h1>louding</h1>
                    :
                    err ?
                        <h1>err</h1>
                        :
                        <div
                            className='flex flex-wrap justify-around w-full px-3'
                        >
                            {tours.map(e => {
                                return <TousCard tour={e} key={e} />
                            })}
                        </div>
            }

        </div>
    )
}

export default Tours