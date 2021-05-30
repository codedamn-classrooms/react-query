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

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
	import.meta.hot.accept()
}
