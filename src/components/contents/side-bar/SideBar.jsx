import { useEffect, useState } from 'react';
import './side-bar.scss';
import { API_IMG } from '../../../api/constants.api';
import { Link } from 'react-router-dom';
function SideBar({ id, title, poster_path, vote_average, release_date, name }) {

    return (
        <div className="side-bar-container">
            <Link to={`movie-detail/${id}`}>
                <div className="side-bar-item">
                    <div className='item-trending'>
                        <div className='poster-image'>
                            <img src={API_IMG + poster_path} alt="" className='image-item' />
                        </div>
                        <div className='title-trending'>
                            <h5 className='title-poster-trending'>{title || name}</h5>
                            <span className='rating'>{vote_average}</span>
                            <span className='release-year'>{release_date}</span>

                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default SideBar;