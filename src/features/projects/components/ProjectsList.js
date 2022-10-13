import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProjectCard from './ProjectCard';
import styled from 'styled-components';
import { Search } from 'react-bootstrap-icons';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const ProjectsListStyle = styled.div`
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
        margin-top: 1.5rem;
    }
`

export default function ProjectsList() {
	const categories = useSelector(state => state.projects.categories)
	const projects = useSelector(state => state.projects.projects)
    const [searchText, setSearchText] = useState('');

    function handleChange(e) {
        e.preventDefault();
        setSearchText(e.target.value);
    }

	const content = <Tabs
			defaultActiveKey="0"
			id="products_tabs"
			className="mb-3"
			fill
		>
            <Tab eventKey="0" title="All">
                <Row xs={1} md={2} lg={3} className="g-4">
                    {projects
                        .filter(project => project.name.toLowerCase().match(searchText.toLowerCase()))
                        .map(project => (
                        <Col key={project.id}>
                            <ProjectCard name={project.name} desc={project.desc} img={project.img} />
                        </Col>
                    ))}
                </Row>
            </Tab>
            {categories.slice().map(category => (
                <Tab eventKey={category.id} title={category.name} key={category.id}>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {projects
                            .filter(project => project.name.toLowerCase().match(searchText.toLowerCase()))
                            .filter(project => project.category_id === category.id)
                            .map(project => (
                                <Col key={project.id}>
                                    <ProjectCard name={project.name} desc={project.desc} img={project.img} />
                                </Col>
                            ))
                        }
                    </Row>
                </Tab>
            ))}
        </Tabs>

	return (
        <ProjectsListStyle>
		<Container className="projects-list">
            <div className="projects_search">
                <input
                    type="text"
                    value={searchText}
                    onChange={handleChange}
                    placeholder="Project Name"
                />
                <div className="search_icon-container"><Search className="search_icon"/></div>
            </div>
			<div className="projects_list">
                {content}
            </div>
		</Container>
        </ProjectsListStyle>
	);
}
