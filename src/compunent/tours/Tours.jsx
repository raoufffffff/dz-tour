import axios from 'axios'
import { useEffect, useState } from 'react'
import Titel from '../titel/Titel'
import TousCard from '../tourCard/TousCard'

const Tours = ({ type, id }) => {
    const [tours, settours] = useState([])
    const [loading, setloading] = useState(true)
    const [err, seterr] = useState(false)
    useEffect(() => {
        const gettours = async () => {
            try {
                await axios.put(`https://dz-tour-api.vercel.app/tour/type`, {
                    type: type
                })
                    .then(res => {
                        if (id) {
                            let a = res.data.result
                            a = a.filter(e => e._id != id)
                            settours(a)
                        } else {
                            settours(res.data.result)
                        }

                    })
            } catch {
                seterr(true)
            } finally {
                setloading(false)
            }
        }
        gettours()
    }, [type])
    if (loading) return <h1>louding</h1>
    if (err) return <h1>err</h1>
    if (tours.length === 0 && !loading) {
        return
    }
    return (
        <div
            className='w-full'
        >
            <Titel name={id ? "tours similaires" : type} />




            <div
                className='flex overflow-x-auto justify-around a b w-full px-3'
            >

                {tours.map(e => {
                    return <TousCard tour={e} key={e} />
                })}
            </div>


        </div>
    )
}


export default Tours