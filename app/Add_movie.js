function Add_movie(){
	return(
		<div className="add_movie">
			<h3>Add A New Movie</h3>
			<h6>To add a movie you have to fill a form. The added movie will appear in the list above</h6>
			<div className="new_movie">
				<img src="New_Movie.png" className="new_add"/>
				<div className="a">
					<img src="Frame.png" className="frame"/>
				</div>
			</div>
			<div className="add_movie_row">
				<div className="fill_form">
					<img src="Fill_this_Movie_form.png" className="movie_form"/>
					
					<div className="name_of_movie">
						<img src="Name of Movie.png"/>
						<input type="Name" />
					</div>
					<div className="year_of_release">
						<img src="Year_Release.png"/>
						<input type="select" />
					</div>
					<div className="year_of_release">
						<img src="Movie_Duration.png"/>
						<input type="Time" />
					</div>
					<div className="year_of_release">
						<img src="Movie genre.png"/>
						<img src="Select all that is applicabale.png"/>
					</div>
					<div className="check_box">
						<input type="checkbox"  id="checkbox" />Darama
						<input type="checkbox"  id="checkbox" />Darama
					</div>
				</div>
			</div>
		</div>
	);
};
export default Add_movie;
