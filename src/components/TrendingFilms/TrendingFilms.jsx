import { useEffect, useState} from "react";
import { useLocation } from "react-router-dom";

import { fetchTrendingFilms } from "services/api";
import { FilmCard } from "components/FilmCard/FilmCard";

import { List, ListItem } from "./TrendingFilms.styled";

export const TrendingFilms = () => {
    const [trendingFilms, setTrendingFilms] = useState([]);
    
    const location = useLocation();

    useEffect(() => {
        fetchTrendingFilms().then(data => {
                setTrendingFilms([...data.results])
            })
    }, [])
    return (
            <List>
                {trendingFilms.map(film => (
                    <ListItem key={film.id}>
                        <FilmCard film={film} state={{ from: location }}/>
                    </ListItem>
                ))}
            </List>
    )

}