import React from "react";
import About from "./pages/About";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import OurWork from "./pages/OurWork";

function App() {
	return (
		<div>
			<GlobalStyle />
			<Nav />
			<Routes>
				<Route path='/' element={<About />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/work' element={<OurWork />} />
			</Routes>
		</div>
	);
}

export default App;
