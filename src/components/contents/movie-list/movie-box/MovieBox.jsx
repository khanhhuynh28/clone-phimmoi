import { API_IMG } from '../../../../api/constants.api';
import iconPlay from '../../../../asset/play-button.png'
import './movie-box.scss'
import { Link } from 'react-router-dom';
function MovieBox({ id, title, vote_average, poster_path, release_date }) {
    return (
        <div className="movie-box" >
            <Link to={`/movie-detail/${id}`}>
                <article id="post-5540" className="item-movies">
                    <div className="poster-movies">
                        <img src={API_IMG + poster_path} alt="" className='poster-img' />
                        <div className='hover-play'>
                            <img src={iconPlay} alt="" />
                        </div>
                    </div>
                    <div className="data">
                        <div className='vote' >{vote_average}</div>
                        <h5 className='title-movie'>
                            {title}
                        </h5>
                        <span>
                            <span className="release-date">{release_date}</span>
                        </span>
                    </div>
                </article>
            </Link>
        </div>

    );
}

export default MovieBox;    