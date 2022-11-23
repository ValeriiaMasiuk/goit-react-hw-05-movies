import PropTypes from 'prop-types';

import { Card, FilmTitle, Link, Image, FilmDate } from './FilmCard.styled';

export const FilmCard = ({ film, state }) => {
    return (
        <Card>
            <Link to={`/movies/${film.id}`} state={state}>
                <Image src={`https://image.tmdb.org/t/p/w780${film.poster_path}`} alt={film.title} height='300px'></Image>
                <FilmTitle>{film.title}</FilmTitle>
                <FilmDate>{film.release_date}</FilmDate>
            </Link>
        </Card>
    )
}

FilmCard.propTypes = {
    film: PropTypes.object,
}