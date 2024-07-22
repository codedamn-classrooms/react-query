import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const client = new QueryClient();

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

root.render(
	<QueryClientProvider client={client}>
		<App />
		<ReactQueryDevtools />
	</QueryClientProvider>
);
