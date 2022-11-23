import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchCast } from "services/api";
import { CastList, CastItem, CastName } from "components/Cast/Cast.styled";

const Cast = () => {
    const { id } = useParams();
    const [cast, setCast] = useState([])  

    useEffect(() => {
        fetchCast(id).then(data => setCast(data.cast))
    })

    return (
        <div>
            <CastList>
                {cast.map(actor => (
                    <CastItem key={actor.id}>
                        <img src={
                            actor.profile_path ? `https://image.tmdb.org/t/p/w780${actor.profile_path}` : `https://image.tmdb.org/t/p/w780/5fJlA41PdcZ9MOAhdywVTSwOyDA.jpg`} alt={actor.name} width="300px">
                        </img>
                        <CastName>{actor.name}</CastName>
                    </CastItem>
                ))}
            </CastList>
        </div>
    )
}

export default Cast;