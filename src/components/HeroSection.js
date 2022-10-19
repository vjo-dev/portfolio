import React from "react";
import logo from '../assets/images/logo.png';
import styled from 'styled-components';

export default function HeroSection() {
	return(
		<HeroSectionStyle>
            <div className="hero-section-logo">
                <img className="hero-logo" src={logo} alt="hero-logo" />
            </div>
            <div className="hero-section-pitch">
                <h1>Welcome!</h1>
                <h2>I'm Vincent, a<br/>web developper<br/>but not only...</h2>
                <h3>Take a look to discover my activities.</h3>
            </div>
		</HeroSectionStyle>
	);
}

const HeroSectionStyle = styled.div`
   background: var(--bg-color);
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 8rem 0;

   .hero-section-logo {
        width: 50%;
        padding: 2rem;
        img {
            width: 100%;
            height: auto;
        }
    }

    .hero-section-pitch {
        margin-left: 5rem;
        width: 50%;
        h1 {
            color: var(--green-1);
        }
        h3 {
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 400;
        }
    }
`;
