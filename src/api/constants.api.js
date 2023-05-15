import axios from "axios";

export const BASE_URL = 'http://localhost:3050/api';
export const API_IMG = 'https://image.tmdb.org/t/p/w500';
export const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=0c1eca239dabe63aa1000869e29345d9&language=en-US&page=1';
export const API_SEARCH = 'https://api.themoviedb.org/3/search/movie?api_key=0c1eca239dabe63aa1000869e29345d9&query';

export const API = {
    get: (url) => axios.get(url),
    post: (url, data) => axios.post(url, data)
}