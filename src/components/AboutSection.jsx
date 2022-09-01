import React from "react";
import styled from "styled-components";
import home1 from "../img/home1.png";

const AboutSection = () => {
	return (
		<About>
			<Description>
				<div className='title'>
					<Hide>
						<h2>We work to make</h2>
					</Hide>
					<Hide>
						<h2>
							your <span>dreams</span>
						</h2>
					</Hide>
					<Hide>
						<h2>come true.</h2>
					</Hide>
				</div>
				<p>
					Contact us for any photography or videography ideas that you have. We
					have professionals with amazing skills.
				</p>
				<button>Contact Us</button>
			</Description>
			<Image>
				<img src={home1} alt='person with a camera' />
			</Image>
		</About>
	);
};

// Styled components
const About = styled.div`
	min-height: 90vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5rem 10rem;
	color: white;
	@media (max-width: 980px) {
		display: block;
		padding: 2rem 2rem;
		text-align: center;
	}
`;

const Description = styled.div`
	flex: 1;
	padding-right: 5rem;
	/* z-index: 2; */
	h2 {
		font-weight: lighter;
	}
	@media (max-width: 1300px) {
		padding: 0;
		button {
			margin: 2rem 0rem 5rem 0rem;
		}
	}
`;
const Image = styled.div`
	/* z-index: 2; */
	flex: 1;
	/* overflow: hidden; */
	img {
		width: 100%;
		height: 85vh;
		object-fit: cover;
	}
`;

const Hide = styled.div`
	overflow: hidden;
`;

export default AboutSection;
