import React from "react";
import SectionTitle from './SectionTitle';
import { ResumeList } from '../features/resume';

import Container from 'react-bootstrap/Container';

export default function ResumeSection() {


	return(
		<div className="resume-section section">
			<Container>
                    <SectionTitle subtitle="Discover my journey" title="Resume" reverse center/>
                    <ResumeList />
			</Container>
		</div>
	);
}
