import React from "react";
import SectionTitle from './SectionTitle';
import { ResumeList } from '../features/resume';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
