"use client"
import React, { useState } from 'react';
import Delete from "./Delete"
import LikeDislike from "./like_dislike.js"
function Rating () {
	return(
		<div className="rating">
			<LikeDislike/>
		</div>
	);
};
export default Rating;
