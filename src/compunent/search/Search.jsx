import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

const Search = () => {
    const [search, setsearch] = useState("")
    const width = window.innerWidth

    return (
        <div
            className={`flex w-full md:w-10/12 mx-auto mt-5 md:mt-10 ${width > 768 && "search"} px-5 rounded-xl md:h-56  justify-center items-center`}

        >
            <form className="flex w-full justify-center  md:w-8/12 bg-white px-5 md:px-1 py-1 rounded-xl h-16">
                <input
                    value={search}
                    onChange={(e) => setsearch(e.target.value)}
                    className="w-10/12 md:w-9/12 rounded-xl px-2 placeholder:pl-1 border border-[#aaa] focus:outline-none placeholder:text-black"
                    placeholder="Rechercher Tahwissa ..."
                />
                <button
                    className="ml-2 md:w-3/12 justify-center flex items-center rounded-xl text-white bg-[#2E3A59] md:text-xl px-3 py-1.5"
                    type="submit">
                    <IoSearchSharp size={24} className="md:mr-2" />
                    <span className="hidden md:flex">Recherche</span></button>
            </form>
        </div>
    )
}

export default Search