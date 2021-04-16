import React from "react";
import "./Post.css";

const Post = (props) => {
	return (
		<li className="Post">
			<div className="UserNumber">User {props.item.id}: </div>
			<div className="UserName">{props.item.username}</div>
			<div className="Email">{props.item.email}</div>
			<div className="Phone">{props.item.phone}</div>
			<div className="Website">{props.item.website}</div>
		</li>
	);
};

export default Post;
