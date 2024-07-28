"use client";
import LikeDislike from "./like_dislike.js";

function Rating(props) {
    return (
        <div className="rating">
            <LikeDislike
                onclick1={props.onclick1}
                onclick2={props.onclick2}
                like={props.like}
                dislike={props.dislike}
				onDelete={props.onDelete}
            />
            
        </div>
    );
}

export default Rating;
