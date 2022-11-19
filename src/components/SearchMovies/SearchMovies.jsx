import { TrendingFilmCard } from "components/TrendingFilmCard/TrendingFilmCard";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchSearchMovies } from "services/api";

export const SearchMovies = ({ query }) => {

    const [films, setFilms] = useState([]);
    const location = useLocation();
    
    useEffect(() => {
            if (!query) {
      return;
    }
        fetchSearchMovies(query).then(data => {
            console.log(data)
            setFilms(data.results)
        })
    }, [query])

    return (
        <div>
            {films?.map(film => (
                <div key={film.id}>
                    <TrendingFilmCard film={film} state={{ from: location }} />
                </div>
            ))}
        </div>
    )
}