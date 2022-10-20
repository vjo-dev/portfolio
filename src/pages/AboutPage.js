import React from 'react';
import styled from 'styled-components';
import AboutSection from '../components/AboutSection'
import ResumeSection from '../components/ResumeSection'

export default function AboutPage() {
    return(
		<AboutPageStyle>
        {/*<AboutSection />*/}
			<ResumeSection />
		</AboutPageStyle>
	);
}

const AboutPageStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    padding-bottom: 1px;
    background: var(--text-color);
    width: 90vw;
`;
