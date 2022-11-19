import { NavLink } from "react-router-dom"

export const TrendingFilmCard = ({ film, state }) => {
    return (
        <div>
            <NavLink to={`/movies/${film.id}`} state={state}>
                <p>{film.title}</p>
                <img src={`https://image.tmdb.org/t/p/w780${film.poster_path}`} alt={film.title} width='150px'></img>
                <p>{film.release_date}</p>
            </NavLink>
        </div>
    )
}