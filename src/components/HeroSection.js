import React from "react";
import logo from '../assets/images/logo512.png';
import SectionTitle from './SectionTitle';

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
						<h2 className="hero-title">I'm Vincent. I am me...</h2>
						<h3 className="hero-text">I am me... and also a web developper,continuous improvment addict, project manager, woodworker, montain biker...</h3>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
