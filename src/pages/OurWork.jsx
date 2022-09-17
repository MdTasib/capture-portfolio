import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
//Animations
import { motion } from "framer-motion";

const OurWork = () => {
	return (
		<Work>
			<Movie>
				<h2>Athlete</h2>
				<div className='line'></div>
				<Link to='/'>
					<img src={athlete} alt='Athlete' />
				</Link>
			</Movie>
			<Movie>
				<h2>The Racer</h2>
				<div className='line'></div>
				<Link to='/'>
					<img src={theracer} alt='the racer' />
				</Link>
			</Movie>
			<Movie>
				<h2>Good Times</h2>
				<div className='line'></div>
				<Link to='/'>
					<img src={goodtimes} alt='athlete' />
				</Link>
			</Movie>
		</Work>
	);
};

const Work = styled(motion.div)`
	min-height: 100vh;
	overflow: hidden;
	padding: 5rem 10rem;
	@media (max-width: 1300px) {
		padding: 2rem 2rem;
	}

	h2 {
		padding: 1rem 0rem;
	}
`;
const Movie = styled(motion.div)`
	padding-bottom: 10rem;

	.line {
		height: 0.5rem;
		background: #23d997;
		margin-bottom: 3rem;
	}
	img {
		width: 100%;
		height: 70vh;
		object-fit: cover;
	}
`;
const Hide = styled.div`
	overflow: hidden;
`;

export default OurWork;
