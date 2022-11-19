import { useState, useEffect } from "react";
import { fetchFilmDetails } from "services/api";
import { NavLink, Outlet, useParams } from "react-router-dom";

export const MovieDetails = () => {

    const { id } = useParams();
    const [film, setFilm] = useState('');

    useEffect(() => {
        fetchFilmDetails(id).then(data => {
            setFilm(data)
        })
    }, [id])

    const getGenresList = (genres) => {
        let genresList = [];
        genres?.map(genre => genresList.push(genre.name))
        return genresList
    }

    return (
        <div>
            <NavLink to='/'>
                Go back
            </NavLink>
            <h1>{film.original_title}</h1>
            <img src={`https://image.tmdb.org/t/p/w780${film.poster_path}`} alt={film.title} width='150px'></img>
            <p>Overview</p>
            <p>genres: {getGenresList(film.genres).join(', ')}</p>
            <p>{film.overview}</p>
            <p>Release date: {film.release_date}</p>
            <p>Duration: {film.runtime} min.</p>
            <p>Score: {film.vote_average}</p>
            <h3>Additional information</h3>
            <NavLink to="cast">
                Cast
            </NavLink>
            <NavLink to="reviews">
                Reviews
            </NavLink>
            <Outlet/>
    </div>
    )
}