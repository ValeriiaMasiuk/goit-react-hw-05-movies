import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCast } from "services/api";
import { useState } from "react";

export const Cast = () => {
    const { id } = useParams();
    const [cast, setCast] = useState([])
    

    useEffect(() => {
        fetchCast(id).then(data => setCast(data.cast))
    })


    return (
        <div>
            <ul>
                {cast.map(actor => (
                    <li key={actor.id}>
                        <p>{actor.name}</p>
                        <img src={
                            actor.profile_path ? `https://image.tmdb.org/t/p/w780${actor.profile_path}` : `https://image.tmdb.org/t/p/w780/5fJlA41PdcZ9MOAhdywVTSwOyDA.jpg`} alt={actor.name} width="120px"></img>
                    </li>
                ))}
            </ul>
        </div>
    )
}