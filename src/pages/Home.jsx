import React from "react";
import { useState } from "react";
import "../styles/Home.css";

const COHORT_NAME = "2307-FTB-ET-WEB-FT";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

function Home() {
	return (
		<div className="home__container">
			<img src="thibault-penin-AWOl7qqsffM-unsplash.jpg" />
		</div>
	);
}

export default Home;
