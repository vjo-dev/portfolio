import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProjectCard from './ProjectCard';
import CategoryFilter from './CategoryFilter';
import styled from 'styled-components';
import { Search } from 'react-bootstrap-icons';

export default function ProjectsList() {
	const projects = useSelector(state => state.projects.projects)
	const activeCategory = useSelector(state => state.projects.category)
    const [content, setContent] = useState(projects)
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        console.log(activeCategory)
        setContent(() => projects.filter(project => project.name.toLowerCase().match(searchText.toLowerCase())))
    }, [searchText, projects, activeCategory])

	return (
        <ProjectsListStyle>
            <div className="projects_search">
                <input
                    type="text"
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                    placeholder="Project Name"
                />
                <div className="search_icon-container"><Search className="search_icon"/></div>
            </div>
            <div className="projects_category">
                <CategoryFilter />
            </div>
            <div className="projects_list">
                {content.length ? content.map(project => (
                    <div key={project.id}>
                        <ProjectCard name={project.name} desc={project.desc} img={project.img} />
                    </div>
                )) : <h3>No project found</h3>}
            </div>
        </ProjectsListStyle>
	);
}

const ProjectsListStyle = styled.div`
    padding: 2rem;
    .projects_search{
        display: flex;
        align-items: center;
        width: 350px;
        margin-top: 2rem;
        border: 2px solid gray;
        border-radius: 8px;
        padding: 0.4rem;
    }
    .projects_search input{
        width: 100%;
        outline: none;
        border: none;
    }
    .search_icon-container{
        height: 25px;
    }
    .projects_search .search_icon path {
        color: gray;
        max-height: 30px;
    }

    .projects_list{
        margin-top: 2rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(0, calc(100%/3)));
        justify-items: center;
    }

    @media only screen and (max-width: 1350px){
        .projects_list {
            grid-template-columns: repeat(auto-fit, minmax(0, calc(100%/2)));
        }
    }

    @media only screen and (max-width: 920px){
        .projects_list {
            grid-template-columns: repeat(auto-fit, minmax(0, calc(100%/1)));
        }
    }
`;
