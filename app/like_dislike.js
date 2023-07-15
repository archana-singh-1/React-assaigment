"use client"
import React, { useState } from 'react';
const LikeDislike=({onclick1,like,onclick2}) =>{
	return (
    <div className="thumb-container">
    	<div><img src="like_button.png" onClick={onclick1}/></div>
        <div className="circle">
        	<div className="coun">{like}</div>
        <div><img src="dislike_img.png" onClick={onclick2} className="Dislikes"/></div>
        </div>
    </div>
  	);
}


export default LikeDislike;
