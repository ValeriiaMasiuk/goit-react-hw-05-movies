import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { fetchReviews } from "services/api";

export const Reviews = () => {
    const { id } = useParams();
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetchReviews(id).then(data => setReviews(data.results))
    })

    return (
        <div>
            <ul>
                {reviews.map(review => (
                    <li key={review.id}>
                        <p>{review.author_details.name ? `${review.author_details.name}` : "Unknown"}  </p>
                        <p>{review.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}