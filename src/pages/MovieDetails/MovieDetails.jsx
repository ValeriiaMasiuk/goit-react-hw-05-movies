import { useState, useEffect, Suspense } from "react";
import { fetchFilmDetails } from "services/api";
import { Outlet, useLocation, useParams } from "react-router-dom";

import { BiArrowBack } from "react-icons/bi"
import { BackLink, FilmDetails, FilmTitle, Card, Image, SubTitles, AdditionalLinks } from "./MovieDetails.styled";

const MovieDetails = () => {

    const { id } = useParams();
    const [film, setFilm] = useState('');
    const location = useLocation();

    const backLink = location.state?.from ?? '/';

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
        <FilmDetails>
            <BackLink to={backLink}>
                <BiArrowBack />
                Go back
            </BackLink>
            <Card>
                <Image>
                    <img src={`https://image.tmdb.org/t/p/w780${film.poster_path}`} alt={film.title} width='500px'></img>
                </Image>
                <div>
                    <FilmTitle>{film.original_title}</FilmTitle>
                    <SubTitles><b>Genres:</b> {getGenresList(film.genres).join(', ')}</SubTitles>
                    <SubTitles><b>Overview</b></SubTitles>
                        <SubTitles>{film.overview}</SubTitles>
                    <SubTitles><b>Release date:</b> {film.release_date}</SubTitles>
                    <SubTitles><b>Duration:</b> {film.runtime} min.</SubTitles>
                    <SubTitles><b>Score:</b> {film.vote_average}</SubTitles>
                    <SubTitles><b>Additional information</b></SubTitles>
                    
                    <AdditionalLinks to="cast">
                        Cast
                    </AdditionalLinks>
                    <AdditionalLinks to="reviews">
                        Reviews
                    </AdditionalLinks>
                </div>
            </Card>


            <Suspense fallback={<h2>Loading...</h2>}>
                <Outlet />
            </Suspense>
    </FilmDetails>
    )
}

export default MovieDetails;