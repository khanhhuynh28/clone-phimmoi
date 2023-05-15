import './default-layout.scss'
import Carousels from "./carousel/Carousel";
import MovieList from "./contents/movie-list/MovieList";
import SideBar from "./contents/side-bar/SideBar";
import { useEffect, useState } from 'react';
function DefaultLayout({ filteredMovies, pagination, onChange }) {
    const [moviesTrending, setMoviesTrending] = useState([]);

    const fetchMovieTrending = () => {
        fetch('https://api.themoviedb.org/3/trending/all/day?api_key=0c1eca239dabe63aa1000869e29345d9')
            .then(res => res.json())
            .then(data => {
                setMoviesTrending(data.results)
            })
    }
    useEffect(() => {
        fetchMovieTrending()
    }, [])

    return (
        <div className="default-layout">
            <div className="content-container">
                <div className="content">
                    <Carousels />
                    <div className="content-movie">
                        <div className="movie-list"><MovieList filteredMovies={filteredMovies} pagination={pagination} onChange={onChange} /></div>

                        <div className="side-bar">
                            <h4 className='title-movie-list'>Top Trending</h4>
                            {moviesTrending?.map((item) => <SideBar key={item.id} {...item} />)}</div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default DefaultLayout;