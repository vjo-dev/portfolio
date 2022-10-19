import React from "react";
import logo from '../assets/images/logo.png';
import styled from 'styled-components';

const HeroSectionStyle = styled.div`
   display: flex;
`;

export default function HeroSection() {
	return(
		<HeroSectionStyle>
            <div className="hero_section-left">
                <img className="hero-logo" src={logo} alt="hero-logo" />
            </div>
            <div className="hero_section-right">
                <h1 className="hero-title">Hello!</h1>
                <h2 className="hero-title">I'm Vincent, a web developper but not only...</h2>
                <h3 className="hero-text">Take a look to discover my activities.</h3>
            </div>
		</HeroSectionStyle>
	);
}
