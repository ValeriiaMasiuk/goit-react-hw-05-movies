
const API_KEY = '54cbc8dcef3d5a725aabc637b24978ab'

export const fetchTrendingFilms = () => fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`).then(response => response.json())
        
export const fetchFilmDetails = (id) => fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`).then(response => response.json())

export const fetchSearchMovies = (query) => fetch(`https://api.themoviedb.org/3/search/movie?query=${query}?api_key=${API_KEY}`).then(response => response.json())

export const fetchCast = (id) => fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`).then(response => response.json())

export const fetchReviews = (id) => fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`).then(response => response.json())