import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa"

const Footer = () => {
    const data = new Date().getFullYear()
    return (
        <>
            <div
                className="bg-[#eee] py-7  flex flex-col justify-center mt-5"
            >
                <strong
                    className="mx-auto md:text-xl mb-3"
                >Suivez-nous sur les réseaux sociaux</strong>
                <div
                    className="flex justify-center mt-5"
                >
                    <a href="#" target="_blank"
                        className="mx-3"
                    >
                        <FaFacebook
                            className="text-cyan-600"
                            size={28} />
                    </a>
                    <a href="#" target="_blank"
                        className="mx-3"
                    >
                        <FaInstagram
                            className="text-rose-600"
                            size={28} />
                    </a>
                    <a href="#" target="_blank"
                        className="mx-3"
                    >
                        <FaLinkedin
                            className="text-sky-900"
                            size={28} />
                    </a>
                    <a href="#" target="_blank"
                        className="mx-3"
                    >
                        <FaTiktok size={28} />
                    </a>
                </div>
            </div>
            <div
                className="mt-3 bg-[#eee] w-full flex justify-center py-3"
            >
                <span className="mx-5 text-xs text-center">
                    Copyright © {data} Dz.Tour
                </span>
                <span className="mx-5 text-xs text-center">
                    Contact
                </span>
                <span className="mx-5 text-xs text-center">
                    Conditions générales d'utilisation
                </span>
            </div>
        </>

    )
}

export default Footer