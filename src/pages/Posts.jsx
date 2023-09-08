import React, { useState } from "react";
import { useGetPostsQuery } from "../api/apiSlice";
import "../styles/Posts.css";
import { useNavigate } from "react-router-dom";

function Posts() {
	const navigate = useNavigate();
	const [searchItem, setSearchItem] = useState("");

	const {
		data: posts,
		isLoading,
		error,
	} = useGetPostsQuery();

	if (isLoading) {
		return (
			<div className="loading">
				<img src="./public/spinner.gif" />;
			</div>
		);
	}

	if (error) {
		return (
			<div>
				<h1>HTTP 404 Error has occurred!</h1>
			</div>
		);
	}

	// console.log(posts);

	const filteredItem = posts.data.posts.filter((post) =>
		post.title
			.toUpperCase()
			.includes(searchItem.toUpperCase())
	);

	return (
		<div className="posts__container">
			<div className="posts__searchContainer">
				<label htmlFor="posts__search">
					Search for Item Name:
				</label>
				<input
					value={searchItem}
					id="posts__search"
					type="text"
					onChange={(e) => setSearchItem(e.target.value)}
				/>
			</div>
			<div className="posts__content">
				{!searchItem
					? posts.data.posts.map((post) => (
							<div
								className="posts__card"
								key={post.author._id}>
								<h1>{post.title}</h1>
								<h2>{post.description}</h2>
								<h3>Price: {post.price}</h3>
								<h4>Created By: {post.author.username}</h4>
								<div className="posts__seeMore">
									<button
										onClick={() =>
											navigate(
												`/stranger_things/post/${post._id}`
											)
										}>
										See More Details
									</button>
								</div>
							</div>
							// eslint-disable-next-line no-mixed-spaces-and-tabs
					  ))
					: filteredItem.map((post) => (
							<div
								className="posts__card"
								key={post.author._id}>
								<h1>{post.title}</h1>
								<h2>{post.description}</h2>
								<h3>Price: {post.price}</h3>
								<h4>Created By: {post.author.username}</h4>
								<div className="posts__seeMore">
									<button
										onClick={() =>
											navigate(
												`/stranger_things/post/${post._id}`
											)
										}>
										See More Details
									</button>
								</div>
							</div>
							// eslint-disable-next-line no-mixed-spaces-and-tabs
					  ))}
			</div>
		</div>
	);
}

export default Posts;
