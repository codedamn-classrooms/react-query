import React, { useState } from 'react'
import './App.css'
import { useQuery } from 'react-query'

function App() {
	// let's go
	const [postID, setPostID] = useState(1)

	const { data, isLoading } = useQuery(
		['post', postID],
		() => fetcher(`https://jsonplaceholder.typicode.com/posts/${postID}`),
		{
			staleTime: 0,
			cacheTime: 300 * 1000, // 5 minutes
		}
	)

	if (isLoading) {
		return <p>Loading post...</p>
	}

	function loadPost(postID) {
		setPostID(postID)
	}

	return (
		<div className="App">
			<button onClick={() => loadPost(1)}>Load Post 1</button>
			<button onClick={() => loadPost(2)}>Load Post 2</button>
			<button onClick={() => loadPost(3)}>Load Post 3</button>
			<h2>{data.title}</h2>
			<p>{data.body}</p>
		</div>
	)
}

export default App
