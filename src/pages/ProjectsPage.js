import React from 'react';
import styled from 'styled-components';
import { ProjectsList } from '../features/projects';

export default function ProjectsPage() {
    return(
		<ProjectsPageStyle>
			<ProjectsList />
		</ProjectsPageStyle>
	);
}

const ProjectsPageStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1px;
	padding-bottom: 1px;
	background: var(--text-color);
	width: 90vw;
`;
