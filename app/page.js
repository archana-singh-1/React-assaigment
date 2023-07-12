"use client"
import "./globals.css"
import { useState } from 'react';
import Movie_header from "./movie_header.js"
import Movie_row from "./movie_row.js"
import {Movie_list} from "./Object.js"

function Page(){
	const [movies,setMovies]=useState(Movie_list);
	const handledeletMovie=(id)=>{
		const updateMovies=movies.filter((movie)=>movie!==id);
		setMovies(updateMovies);
	}
	return (
		<>
			<Movie_header/>
			{movies.map(movie=>
				<Movie_row
					onclick={()=>handledeletMovie(movie)}
					data={movie}
				/>
			
			)}
				
		</>
	);
};





export default Page;
