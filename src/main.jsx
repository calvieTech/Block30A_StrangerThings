import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react/";
import { apiSlice } from "./api/apiSlice.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<ApiProvider api={apiSlice}>
				<App />
			</ApiProvider>
		</BrowserRouter>
	</React.StrictMode>
);
