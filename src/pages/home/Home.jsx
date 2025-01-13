import categories from '../../constanst/types'
import Titel from '../../compunent/titel/Titel'
import Tours from '../../compunent/tours/Tours'
import Category from '../../compunent/Category/Category'
import SearchInput from '../../compunent/search/Search'
const Home = () => {

    return (
        <div
        >
            <SearchInput />
            <Titel name='Categories' />
            <Category />
            {categories.map(e => (
                <Tours key={e.name} type={e.name} />
            ))}

        </div>
    )
}

export default Home