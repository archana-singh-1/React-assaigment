"use client"
const LikeDislike=({onclick1,like,onclick2,onDelete}) =>{
	return (
    <div className="thumb-container">
        <img src="like_button.png" onClick={onclick1}className="like"/>
        <div className="circle">
        	<div className="counts">{like}</div>
        <div><img src="dislike_img.png" onClick={onclick2}className="dislike"/></div>
        </div>
        
        <img src="delete_buttom.png" onClick={() => {
            onDelete();
        }} className="Delete_icon" alt="Delete" />

        
    </div>
  	);
}


export default LikeDislike;
