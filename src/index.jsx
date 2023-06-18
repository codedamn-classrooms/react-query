import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const client = new QueryClient()

ReactDOM.render(
	<QueryClientProvider client={client}>
		<App />
		<ReactQueryDevtools />
	</QueryClientProvider>,
	document.getElementById('root')
)
