import React from 'react';
import AboutSection from '../components/AboutSection'
import ResumeSection from '../components/ResumeSection'

export default function AboutPage() {
    return(
		<div className='about-page'>
			<AboutSection />
			<ResumeSection />
		</div>
	);
}
