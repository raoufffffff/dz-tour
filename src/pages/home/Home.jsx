import { Link } from 'react-router-dom'
import categories from '../../constanst/types'
import Titel from '../../compunent/titel/Titel'
import Tours from '../../compunent/tours/Tours'
import Search from '../../compunent/search/Search'
const Home = () => {
    const OurCategory = categories.map((e, i) => {
        return <Link
            className='flex bg-[#ddd7] min-w-[45%] md:w-5/12   h-16 py-1 mx-1 px-3 md:h-12 md:py-1 md:px-1 items-center rounded-xl'
            to={`/evant/${e.name}`}
            key={i}
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
            className=''
        >
            <Search />
            <Titel name='Categories' />
            <div
                className='flex a b pb-2 flex-nowrap overflow-x-auto  md:flex-wrap md:overflow-hidden  pl-1 gap-2 md:justify-center'
            >

                {OurCategory}
            </div>
            <Tours type={"Sorties"} />
        </div>
    )
}

export default Home