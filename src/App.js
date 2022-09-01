import React from "react";
import About from "./pages/About";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import { Routes, useRoutes } from "react-router-dom";

function App() {
	return (
		<div>
			<GlobalStyle />
			<Nav />
			<About />
		</div>
	);
}

export default App;
