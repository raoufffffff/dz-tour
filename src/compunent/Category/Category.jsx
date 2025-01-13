import { Link } from "react-router-dom"
import categories from '../../constanst/types'

const Category = () => {
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
    return (
        <div
            className='flex a b pb-2 flex-nowrap overflow-x-auto  mt-5  pl-1 gap-2 '
        >

            {OurCategory}
        </div>
    )
}

export default Category