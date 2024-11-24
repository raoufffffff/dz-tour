import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ImageZoum from '../../compunent/evantsCompunents/evantzoumImage/ImageZoum'
import MinSCreenEvantImage from '../../compunent/evantsCompunents/minSCreenEvantImage/MinSCreenEvantImage'

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
            className='w-full overflow-hidden px-5 capitalize py-3'
        >

            <h1
                className='text-3xl mb-3'
            >{evant?.titel}</h1>

            {evant?.imgs &&
                <>
                    <ImageZoum images={evant.imgs} />
                    <MinSCreenEvantImage images={evant.imgs} />
                </>
            }

        </div>
    )
}

export default Evant