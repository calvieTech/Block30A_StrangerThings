import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetPostsQuery } from "../api/apiSlice";

function Post() {
	const _id = useParams().id;
	const navigate = useNavigate();

	const {
		data: posts,
		isLoading,
		error,
	} = useGetPostsQuery();

	const post = posts.data.posts.filter(
		(post) => post._id === _id
	)[0];

	console.log(post);

	return (
		<div className="post__container">
			<div
				className="posts__card"
				key={post.author._id}>
				<h1>{post.title}</h1>
				<h2>{post.description}</h2>
				<h3>Price: {post.price}</h3>
				<h3>Location: {post.location}</h3>
				<h3>Created At: {post.createdAt}</h3>
				<h4>Created By: {post.author.username}</h4>
				<h6>Updated At: {post.updatedAt}</h6>
				<div className="posts__seeMore">
					<button
						onClick={() =>
							navigate(`/stranger_things/posts`)
						}>
						Go Back To All Posts
					</button>
				</div>
			</div>
		</div>
	);
}

export default Post;
