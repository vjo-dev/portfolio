import React from 'react';
import styled from 'styled-components';
import HeroSection from '../components/HeroSection'
import ProjectsSection from '../components/ProjectsSection'

export default function HomePage() {
    return(
		<HomePageStyle>
			<HeroSection />
			<ProjectsSection />
		</HomePageStyle>
	);
}

const HomePageStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    padding-bottom: 1px;
    background: var(--text-color);
    width: 90vw;

    @media only screen and (max-width: 800px){
        background: var(--bg-color);
        padding: 0;
        gap: 0;
        width: 100vw;
    }
`;
