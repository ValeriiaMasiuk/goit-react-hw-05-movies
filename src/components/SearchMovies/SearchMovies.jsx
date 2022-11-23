import PropTypes from 'prop-types';

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { fetchSearchMovies } from "services/api";
import { SearchFilmCard, Card } from './SearchMovies.styled';
import { FilmCard } from "components/FilmCard/FilmCard";

export const SearchMovies = ({ query }) => {

    const [films, setFilms] = useState([]);
    const location = useLocation();
    
    useEffect(() => {
            if (!query) {
      return;
    }
        fetchSearchMovies(query).then(data => {
            setFilms(data.results)
        })
    }, [query])

    return (
        <SearchFilmCard>
            {films?.map(film => (
                <Card key={film.id}>
                    <FilmCard film={film} state={{ from: location }} />
                </Card>
            ))}
        </SearchFilmCard>
    )
}

SearchMovies.propTypes = {
    query: PropTypes.string,
}