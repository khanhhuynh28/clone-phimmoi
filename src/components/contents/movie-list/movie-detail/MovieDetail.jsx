import { useParams } from 'react-router';
import './movie-detail.scss';
import { useEffect, useState } from 'react';
import { API_IMG } from '../../../../api/constants.api';
import Overview from './overview/Overview';
import Similar from './similar/Similar';
import { useSelector } from 'react-redux';
import Comments from './comments/Comments';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { appRouter } from '../../../const/router.const';
import playVideo from '../../../../asset/play-button.webp'
function MovieDetail() {
    const [movieDetail, setMovieDetail] = useState([]);
    const [similar, setSimilar] = useState([]);
    const [castList, setCastList] = useState([]);
    const [comments, setComments] = useState([]);
    const [totalComments, setTotalComments] = useState(0);
    const idUser = useSelector(state => state.auth.user)
    const { id } = useParams();


    const fetchMovieDetail = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0c1eca239dabe63aa1000869e29345d9&append_to_response=videos`)
            .then((res) => res.json())
            .then((data) => {
                setMovieDetail(data);
            });
    }

    const fetchSimilar = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=0c1eca239dabe63aa1000869e29345d9`)
            .then((res) => res.json())
            .then((data) => {
                setSimilar(data.results);
            });
    }

    const fetchCasts = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/casts?api_key=0c1eca239dabe63aa1000869e29345d9`)
            .then(res => res.json())
            .then(data => {
                setCastList(data.cast)
            })
    }

    useEffect(() => {
        fetchMovieDetail()
        fetchCasts()
        fetchSimilar()
        window.scrollTo(0, 0);
    }, [id]);

    const handlerAddComment = (e) => {
        setComments([...comments, e])
    }
    useEffect(() => {
        setTotalComments(prevTotal => prevTotal + 1);
    }, [comments]);
    return (
        <div className="movie-detail-container" style={{ color: 'white' }}>
            <div className="movie-detail">
                <div className='play-video'>
                    <img src={playVideo} alt="" />
                </div>
                <hr />
                <div className='poster-movie-detail'>
                    <div className='poster'>
                        <img src={API_IMG + movieDetail.poster_path} alt="" width={200} />
                    </div>
                    <div className='title-movie-detail'>
                        <div className='title-detail'>
                            <h1 className='title'>{movieDetail.title}</h1>
                            <p className='original-title'>{movieDetail.original_title}</p>
                            <span className='release-year'>{movieDetail.release_date}</span>
                            <span className='time'>{movieDetail.runtime} Phút</span>
                            <span className='production-country'>{movieDetail.original_language}</span>
                        </div>
                        <hr />
                        <div className='ratings'>
                            <span className='rating'>{movieDetail.vote_average}</span>
                            <span className='evaluate'>{movieDetail.vote_count} Đánh giá</span>
                        </div>
                        <hr />
                        <div className='category'>
                            {movieDetail.genres?.map((item) => (
                                <span key={item.id} className='category-item'>{item.name}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <hr />
                <div className='list-cast'>
                    <Overview castList={castList} overview={movieDetail.overview} />
                </div>
                <hr />
                <h4 className='title-movie-similar'>Phim cùng thể loại</h4>
                <div className='similar-movies'>
                    {similar?.map((item) => <Similar key={item.id} {...item} />)}
                </div>
                <div className='comments'>
                    <div className='total-comments'>{totalComments} Bình luận</div>
                    {idUser ? (
                        <div className='comment'>
                            <Comments onAddComment={handlerAddComment} />
                            {comments.map((comment, index) => (
                                <div key={index} className='show-comment'>
                                    {idUser ? (<div className='name'>{idUser.userName}</div>) : (null)}
                                    <div className='content-comment'>{comment}</div>
                                    <div className='like-comment'>
                                        <span className='like'><a href="">Like</a></span>
                                        <span className='like'><a href="">Phản hồi</a></span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (<Link to={appRouter.login}><p>Đăng nhập để bình luận</p></Link>)}

                </div>
            </div>
        </div>
    );
}
export default MovieDetail;