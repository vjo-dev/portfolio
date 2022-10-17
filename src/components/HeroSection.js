import React from "react";
import logo from '../assets/images/logo.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function HeroSection() {
	return(
		<div className="section hero-section">
			<Container>
				<Row>
					<Col lg="4">
						<img className="hero-logo" src={logo} alt="hero-logo" />
					</Col>
					<Col className="hero-description">
						<h1 className="hero-title">Hello!</h1>
						<h2 className="hero-title">I'm Vincent, a web developper but not only...</h2>
						<h3 className="hero-text">Take a look to discover my activities.</h3>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
