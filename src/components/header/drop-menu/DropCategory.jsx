import { Dropdown } from 'react-bootstrap';
import './style.scss'
import { useEffect, useState } from "react";

const DropCategory = ({ handleGenreChange }) => {
    const [moviesGenre, setMoviesGenre] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=0c1eca239dabe63aa1000869e29345d9&append_to_response=videos")
            .then((res) => res.json())
            .then((data) => {
                setMoviesGenre(data.genres);
            });
    }, []);
    return (
        <Dropdown>
            <Dropdown.Toggle className='dropdown-category'>
                Thể loại
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {moviesGenre?.map((item) => (
                    <Dropdown.Item onClick={handleGenreChange} data-id={item.id} key={item.id}>{item.name}</Dropdown.Item>
                ))}

            </Dropdown.Menu>
        </Dropdown>
    )
}
export default DropCategory;