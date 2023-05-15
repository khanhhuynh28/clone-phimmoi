import './movie-list.scss';
import MovieBox from './movie-box/MovieBox';
import { Pagination } from 'antd';
function MovieList({ filteredMovies, onChange, pagination }) {

    return (
        <div className="movie-list-container">
            <h2 className='title-movie-list'>Phim Chiếu Rạp mới cập nhật</h2>
            <div className='gird'>
                {filteredMovies.length ? filteredMovies?.map((movie) => <MovieBox key={movie.id} {...movie} />) :
                    <h5 style={{ color: '#fff', width: 500 }}>Phim bạn tìm không tồn tại</h5>
                }
            </div>
            <div className='pagination'>  <>
                <Pagination showQuickJumper defaultCurrent={pagination} total={100} onChange={onChange} />
            </>
            </div>
        </div>
    );
}

export default MovieList;