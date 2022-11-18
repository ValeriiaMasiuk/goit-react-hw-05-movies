import { useEffect, useState} from "react";
import { fetchTrendingFilms } from "services/api";
import { useLocation } from "react-router-dom";

import { TrendingFilmCard } from "components/TrendingFilmCard/TrendingFilmCard";

export const TrendingFilms = () => {
    const [trendingFilms, setTrendingFilms] = useState([]);
    
    const location = useLocation();

    useEffect(() => {
        fetchTrendingFilms().then(data => {
                setTrendingFilms([...data.results])
            })
    }, [])
    return (
            <ul>
                {trendingFilms.map(film => (
                    <li key={film.id}>
                        <TrendingFilmCard film={film} state={{ from: location }}/>
                    </li>
                ))}
            </ul>
    )

}