import Delete from "./Delete"
import Rating from "./Rating"
import LikeDislike from "./like_dislike"
function Movie_row(props) {
	return(
		<div className="movie_row">
			<div className="img_box">
				<img src={props.data.Img} className="movie_img"/>
			</div>
			<div className="Description_box">
				<div className="title">
					<h1>{props.data.Movie_name}</h1>
					<p>{props.data.Y_H_M} | {props.data.Type}</p>
				</div>
				<div className="title">
				<h4>{props.data.Description}</h4>
				<p>{props.description}</p>
				</div>
				<Delete
					onDelete={props.onclick}
				/>
				<Rating
					like={props.like}
					dislike={props.dislike}
					onclick1={props.onclick1}
					onclick2={props.onclick2}
					
					
				/>
			<div class="bottom"></div>
			</div>
		</div>
	)
}
export default Movie_row;
