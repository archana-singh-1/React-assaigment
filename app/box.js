import Movie_col from './movie_row.js'
function Box () {
	return(
		<>
			<div className="row">
				<Box1/>
				<div className="col1">
				</div>
				<Box1/>
				<div className="col3"></div>
				<Box1/>
				<Box1/>
				<Movie_col/>
			
			</div>
			
				
	
		</>
)
}

function Box1 () {
	return (
		<>
			<div className="col2"></div>
			
		</>
	)
}
export default Box
