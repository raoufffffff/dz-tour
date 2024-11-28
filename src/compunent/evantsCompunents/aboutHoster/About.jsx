import { useEffect, useState } from "react"
import axios from "axios"
import { FaInfoCircle, FaPhoneAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { IoMdPerson } from "react-icons/io"
import SideTitel from "../sidetitel/SideTitel"

const About = ({ id }) => {
    const [hoster, sethoster] = useState(null)
    const [loading, setloading] = useState(true)
    useEffect(() => {
        const gethoster = async () => {
            try {
                await axios.get(`https://dz-tour-api.vercel.app/host/${id}`)
                    .then(res => {
                        sethoster(res.data.result)
                        setloading(false)
                    })

            } catch (error) {
                console.log(error);
            }
        }
        gethoster()
    }, [id])
    if (loading) {
        return <h1>loading</h1>
    }
    return (
        <div
            className="mt-3"
        >
            <SideTitel
                icon={<FaInfoCircle className="mr-3 text-amber-600" />}
                titel={"Information :"}
            />
            <div
                className="pl-10"
            >
                <div className="flex my-2">
                    <IoMdPerson className="text-slate-600 mr-5 md:mr-12" size={28} />
                    <span
                        className="text-lg lowercase text-blue-950"
                    >{hoster.name}</span>
                </div>

                <div className="flex my-2">
                    <MdEmail className="text-orange-600 mr-5 md:mr-12" size={28} />
                    <span
                        className="text-lg lowercase text-blue-950"
                    >{hoster.email}</span>
                </div>
                <a
                    href="tel:0799212481" aria-label="Call Us at +1234567890"
                    className="flex my-2">
                    <FaPhoneAlt className="text-emerald-600 mr-5 md:mr-12" size={28} />
                    <span
                        className="text-lg lowercase text-blue-950"
                    >{hoster.phone}</span></a>

            </div>
        </div>
    )
}

export default About