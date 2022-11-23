import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { fetchReviews } from "services/api";
import { ReviewDetails } from "./Reviews.styled";


const Reviews = () => {
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
                        <ReviewDetails><b>{review.author_details.name ? `${review.author_details.name}` : "Unknown"}</b> </ReviewDetails>
                        <ReviewDetails>{review.content.length > 0 ? `${review.content}` : "Sorry, there is no reviews:(("}</ReviewDetails>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Reviews;