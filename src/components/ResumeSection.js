import React from "react";
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import { ResumeList } from '../features/resume';

export default function ResumeSection() {
	return(
		<ResumeSectionStyle>
            <SectionTitle subtitle="Discover my journey" title="Resume" reverse center/>
            <ResumeList />
		</ResumeSectionStyle>
	);
}

const ResumeSectionStyle = styled.div``;
