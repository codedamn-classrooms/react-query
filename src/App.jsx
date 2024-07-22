import React, { useState } from "react";
import "./App.css";
import { useQuery } from "react-query";

function App() {
	const [postID, setPostID] = useState(1);

	const { data, isLoading } = useQuery(
		["post", postID],
		async () => {
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/posts/${postID}`
			);
			return response.json();
		},
		{
			staleTime: 0,
			cacheTime: 300 * 1000, // 5 minutes
		}
	);

	if (isLoading) {
		return <p>Loading post...</p>;
	}

	function loadPost(postID) {
		setPostID(postID);
	}

	return (
		<div className="App">
			<button onClick={() => loadPost(1)}>Load Post 1</button>
			<button onClick={() => loadPost(2)}>Load Post 2</button>
			<button onClick={() => loadPost(3)}>Load Post 3</button>
			<h2>{data?.title}</h2>
			<p>{data?.body}</p>
		</div>
	);
}

export default App;
