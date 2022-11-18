import { useState, useEffect } from "react";
import { getFilmDetails } from "services/api";
import { useParams } from "react-router-dom";

export const MovieDetails = () => {

    const {id} = useParams()
    const [film, setFilm] = useState('')

    useEffect(() => {
        getFilmDetails(id).then(response => {
            setFilm(response)
        })
    }, [id])

    return (
        <div>
            <h1>{film.original_title}</h1>
            <p>{film.id}</p>
    </div>
    )
}