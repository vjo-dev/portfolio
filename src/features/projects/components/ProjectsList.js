import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import ProjectCard from './ProjectCard';
import CategoryFilter from './CategoryFilter';
import styled from 'styled-components';
import { Search } from 'react-bootstrap-icons';

export default function ProjectsList() {
	const projects = useSelector(state => state.projects.projects)
    const [searchText, setSearchText] = useState('')

	const filteredProjects = useMemo(() => {
		return projects.filter(project => project.name.toLowerCase().includes(searchText.toLowerCase()))
	}, [searchText, projects])

	return (
        <ProjectsListStyle>
			<div className="projects-filters">
				<div className="projects-search">
					<input
						type="text"
						value={searchText}
						onChange={e => setSearchText(e.target.value)}
						placeholder="Project Name"
					/>
					<div className="search-icon-container"><Search className="search-icon"/></div>
				</div>
				<div className="projects-category">
					<CategoryFilter />
				</div>
			</div>
            <div className="projects-list">
                {filteredProjects.length ? filteredProjects.map(project => (
					<ProjectCard  key={project.id} name={project.name} desc={project.desc} img={project.img} />
                )) : <h3>No project found</h3>}
            </div>
        </ProjectsListStyle>
	);
}

const ProjectsListStyle = styled.div`
	width: 100%;
	min-height: 80vh;
	background: var(--bg-color);
	display: flex;
	flex-direction: column;
	padding: 4rem 0;

	.projects-filters {
		display: flex;
		align-items: center;
		gap: 2rem;
	}

	.projects-search {
		display: flex;
		align-items: center;
		border: 1px solid var(--text-color);
		border-radius: var(--border-radius);
		padding: 0.4rem;
		input {
			background: var(--bg-color);
			color: var(--text-color);
			font-size: 1.2rem;
			border: none;
			outline: none;
		}
	}

    .projects-list{
        margin-top: 2rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(0, calc(100%/3)));
        justify-items: center;
    }

@media only screen and (max-width: 1200px){
    .projects-list{
        grid-template-columns: repeat(auto-fit, minmax(0, calc(100%/2)));
    }
}
@media only screen and (max-width: 800px){
    padding: 2rem 0;

	.projects-filters {
        flex-direction: column;
        padding: 0 1rem;
		gap: 1rem;
	}

    .projects-search {
        width: 100%;
        max-width: 400px;
        input {
            width: 95%;
        }
    }

    .projects-list{
        grid-template-columns: repeat(auto-fit, minmax(0, calc(100%/1)));
    }
}
`;
