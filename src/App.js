import DefaultLayout from './components/DefaultLayout';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import { appRouter } from './components/const/router.const';
import Login from './components/login/Login';
import Register from './components/register/Register';
import './App.scss';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieDetail from './components/contents/movie-list/movie-detail/MovieDetail';
import Header from './components/header/Header';
import { useEffect, useState } from 'react';
import Footer from './components/footer/Footer';

function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [pagination, setPagination] = useState(1);

  const searchMovie = async (e) => {
    e.preventDefault();
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=0c1eca239dabe63aa1000869e29345d9&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      setFilteredMovies(data.results)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=0c1eca239dabe63aa1000869e29345d9&language=en-US&page=${pagination}`)
      .then((res) => res.json())
      .then(data => {
        setMovies(data.results)
        setFilteredMovies(data.results)
      })
    window.scrollTo(0, 0);
  }, [pagination]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  }
  const onChange = (pageNumber) => {
    setPagination(pageNumber)
  };

  const handleGenreChange = (event) => {
    const genreId = event.target.getAttribute('data-id');
    if (genreId === '') {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter((item) =>
        item.genre_ids.includes(parseInt(genreId))
      );
      setFilteredMovies(filtered);
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
          <Header searchMovie={searchMovie} handleChange={handleChange} query={query} handleGenreChange={handleGenreChange} />
        </div>
        <Routes>
          <Route index path={appRouter.home} element={<DefaultLayout filteredMovies={filteredMovies} pagination={pagination} onChange={onChange} />} />
          <Route path={appRouter.login} element={<Login />} />
          <Route path={appRouter.register} element={<Register />} />
          <Route path={appRouter.movie_detail} element={<MovieDetail />} />
        </Routes>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
