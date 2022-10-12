import React from 'react';
import HeroSection from '../components/HeroSection'
import ProjectsSection from '../components/ProjectsSection'

export default function HomePage() {
    return(
		<div className='home-page'>
			<HeroSection />
			<ProjectsSection />
		</div>
	);
}
