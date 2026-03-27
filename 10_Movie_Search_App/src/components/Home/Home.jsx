import './Home.css';
import Movies from '../Movies/Movies';
import Search from '../Search/Search';
import MovieRow from '../MovieRow/MovieRow';
import { useGlobalContext } from '../../Context';

const Home = () => {
    const { query, categories, categoriesLoading } = useGlobalContext();

    return (
        <div>
            <Search />

            {query ? (
                <Movies />
            ) : (
                <div style={{ paddingTop: '8px' }}>
                    {categoriesLoading ? (
                        <>
                            <MovieRow title="" movies={[]} loading={true} />
                            <MovieRow title="" movies={[]} loading={true} />
                            <MovieRow title="" movies={[]} loading={true} />
                            <MovieRow title="" movies={[]} loading={true} />
                        </>
                    ) : (
                        categories.map((cat) => (
                            <MovieRow key={cat.title} title={cat.title} movies={cat.movies} loading={false} />
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default Home;