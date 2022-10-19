import React from "react";
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import hero from '../assets/images/about-page-img.png';

export default function AboutSection() {
	return(
        <AboutSectionStyle>
            <div className="hero-text">
                <SectionTitle title="Hello!" subtitle="My name is Vincent" reverse center />
                <p className="">
                    I am French, leaving in Switzerland. A place of beauty and nature.
                    I like the process of creating unique solutions that will solve complex problems.
                    To observe, to measure, to model, to analyze and then design the solution are
                    a passion for me. I enjoyed the process a lot.
                    <br /> <br />
                    I am graduate from Biomedical engineer school in France and I had several roles in
                    medical companies. I started coding since I was in my first job more than 10 years ago.
                    I kept learning new langages and competences that helps me to achieve better results
                    in my activities.
                    <br /> <br />
                    Now I would like to take the opportunity to design solutions along with the coding.
                    Web development is for the solution that will bring me my Ikigaï.
                </p>
            </div>
            <div className="hero-picture">
                <img src={hero} alt="vjo" />
            </div>
        </AboutSectionStyle>
	);
}

const AboutSectionStyle = styled.div`
    display: flex;
`;
