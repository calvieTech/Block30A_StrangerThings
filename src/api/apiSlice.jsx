import {
	createApi,
	fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const COHORT_NAME = "2307-FSA-ET-WEB-FT";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export const apiSlice = createApi({
	reducerPath: "apiSlice",
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: (builder) => ({
		getPosts: builder.query({
			query: () => "/posts",
		}),
		// getPostById: builder.query({
		// 	query: (id) => `/posts/${id}`,
		// }),
	}),
});

export const { useGetPostsQuery } = apiSlice;
