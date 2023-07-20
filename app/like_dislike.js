"use client"
import React, { useState } from 'react';
const LikeDislike=({onclick1,like,onclick2}) =>{
	return (
    <div className="thumb-container">
    	<div><img src="like_button.png" onClick={onclick1}className="like"/></div>
        <div className="circle">
        	<div className="counts">{like}</div>
        <div><img src="dislike_img.png" onClick={onclick2}className="dislike"/></div>
        </div>
    </div>
  	);
}


export default LikeDislike;
