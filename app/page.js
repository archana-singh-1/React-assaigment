"use client"
import "./globals.css"
import { useState } from 'react';
import Movie_header from "./movie_header.js"
import Movie_row from "./movie_row.js"
import {Movie_list} from "./Object.js"
import Footer from "./Footer.js"
import Add_movie from "./Add_movie.js"

function Page(){
	const [movies,setMovies]=useState(Movie_list);
	const handledeletMovie=(id)=>{
		const updateMovies=movies.filter((movie)=>movie!==id);
		setMovies(updateMovies);
	}
	const handleLike=(id) => {
		const updatemovie=movies.map((movie) => {
			if (movie.id===id) {
				const vote=movie.vote+1;
				return {...movie,vote};
			}
			return movie ;
		});
		const sortmovie= updatemovie.sort((a,b)=> b.vote - a.vote);
		setMovies(sortmovie);
	};
	
	const handledisLike=(id) => {
		const updatemovie=movies.map((movie) => {
			if (movie.id===id) {
				const vote=movie.vote-1;
				return {...movie,vote};
			}
			return movie ;
		});
		const sortmovie= updatemovie.sort((a,b)=> b.vote - a.vote);
		setMovies(sortmovie);
	};
	
 
	return (
		<>
			<Movie_header/>
			{movies.map(movie=>
				<Movie_row
					onclick={()=>handledeletMovie(movie)}
					data={movie}
					onclick1={()=>handleLike(movie.id)}
					onclick2={()=>handledisLike(movie.id)}
					like={movie.vote}
				/>
			
			)}
			<Add_movie/>
			<Footer/>
				
		</>
	);
};





export default Page;
