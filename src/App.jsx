import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts";
import About from "./pages/About";
import Post from "./pages/Post";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route
					path="/stranger_things"
					element={<Home />}
				/>
				<Route
					path="/stranger_things/posts"
					element={<Posts />}
				/>
				<Route
					path="/stranger_things/post/:id"
					element={<Post />}
				/>
				<Route
					path="/stranger_things/about"
					element={<About />}
				/>
			</Routes>
		</>
	);
}

export default App;
