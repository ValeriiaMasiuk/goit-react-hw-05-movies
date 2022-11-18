
const API_KEY = '54cbc8dcef3d5a725aabc637b24978ab'

export const fetchTrendingFilms = () => fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`).then(response => response.json())
        
export const getFilmDetails = (id) => fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`).then(response => response.json())