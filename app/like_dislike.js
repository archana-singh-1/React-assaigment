"use client"
import React, { useState } from 'react';
function LikeDislike() {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
      setLikes(likes + 1);
  	};

  const handleDislike = () => {
      setLikes(likes - 1);
  };

  return (
    <div className="thumb-container">
    	<div><img src="like_button.png" onClick={handleLike}/></div>
        <div className="circle">
        	<div className="count">{likes}</div>
        <div><img src="dislike_img.png" onClick={handleDislike} className="Dislikes"/></div>
        </div>
    </div>
  	);
}

export default LikeDislike;
