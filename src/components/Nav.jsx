import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
	return (
		<StyledNav>
			<h1>
				{/* <Link to='/'>Capture</Link> */}
				<a href='/' id='logo'>
					Capture
				</a>
			</h1>
			<ul>
				<li>
					{/* <Link to='/'>1. About Us</Link> */}
					<a href='/about'>1. About Us</a>
					<Line transition={{ duration: 0.75 }} initial={{ width: "0%" }} />
				</li>
				<li>
					{/* <Link to='/work'>2. Our Work</Link> */}
					<a href='/'>2. Oure Work</a>
					<Line transition={{ duration: 0.75 }} initial={{ width: "0%" }} />
				</li>
				<li>
					{/* <Link to='/contact'>3. Contact Us</Link> */}
					<a href='/'>3. Contact Us</a>
					<Line transition={{ duration: 0.75 }} initial={{ width: "0%" }} />
				</li>
			</ul>
		</StyledNav>
	);
};

const StyledNav = styled.nav`
	min-height: 10vh;
	display: flex;
	margin: auto;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 10rem;
	background: #282828;
	position: sticky;
	top: 0;
	z-index: 10;
	a {
		color: white;
		text-decoration: none;
	}
	ul {
		display: flex;
		list-style: none;
	}
	#logo {
		font-size: 1.5rem;
		font-family: "Lobster", cursive;
		font-weight: lighter;
	}
	li {
		padding-left: 10rem;
		position: relative;
	}
	@media (max-width: 980px) {
		flex-direction: column;
		padding: 2rem 1rem;
		#logo {
			display: inline-block;
			margin: 1rem;
		}
		ul {
			padding: 2rem;
			justify-content: space-around;
			width: 100%;
			li {
				padding: 0;
			}
		}
	}
`;

const Line = styled(motion.div)`
	height: 0.3rem;
	background: #23d997;
	width: 0%;
	position: absolute;
	bottom: -80%;
	left: 60%;
	@media (max-width: 980px) {
		left: 0%;
	}
`;

export default Nav;
