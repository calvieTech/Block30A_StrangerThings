import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
	return (
		<nav className="navbar__container">
			<div className="navbar__header">Stranger Things</div>
			<div className="navbar__content">
				<div className="navbar__list">
					<Link
						to="/stranger_things"
						style={{
							color: "white",
							textDecoration: "none",
						}}>
						Home
					</Link>
					<Link
						to="/stranger_things/posts"
						style={{
							color: "white",
							textDecoration: "none",
						}}>
						Posts
					</Link>
					<Link
						to="/stranger_things/about"
						style={{
							color: "white",
							textDecoration: "none",
						}}>
						About
					</Link>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
