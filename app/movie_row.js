import Movie_pic from './movie_pic.js'
function Movie_col (){
	return(
		<>
			<div className="movie_col">
				<Movie_row
				/>
				<Movie_row/>
				<Movie_row/>
				<Movie_row/>
				<Movie_row/>
				<Movie_row/>
				<Movie_row/>
				<Movie_row/>
				<Movie_row/>
				<Movie_row/>
			</div>
			
			
		</>
	);
}

function Movie_row (){
	return(
		<>
			<div className="movie_row">
				<Movie_pic/>
			</div>
		</>
	)
}
export default Movie_col
