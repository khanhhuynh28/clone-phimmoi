import { API_IMG } from "../../../../../api/constants.api";
import './similar.scss';
import { Link } from "react-router-dom";
function Similar({ poster_path, title, id, name }) {

    return (
        <div className="similar-container">
            <Link to={`/movie-detail/${id}`}>
                <ul className="movie-list">
                    <li className="movie-item">
                        <img src={API_IMG + poster_path} alt="Phim 1" />
                        <h3 className="movie-title">{title || name}</h3>
                    </li>
                </ul>
            </Link>
        </div>
    );
}

export default Similar;