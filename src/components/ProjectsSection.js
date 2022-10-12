import React from "react";
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { ProjectCard } from '../features/projects';
import Button from './Button';

import 'swiper/css';
import "swiper/css/navigation";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const ProjectSectionStyle = styled.div`
    .swiper {
        padding-top: 4rem;
        max-width: 100%;
    }
    .swiper-button-prev,
    .swiper-button-next {
        position: absolute;
        height: 50px;
        width: 50px;
        z-index: 10;
        right: 60px;
        left: auto;
        top: 0;
        transform: translateY(50%);
        border-radius: 8px;
    }
    .swiper-button-next {
        right: 0;
    }
    .swiper-button-prev::after,
    .swiper-button-next::after {
        font-size: 2rem;
    }
    `

export default function ProjectsSection() {
	const projects = useSelector(state => state.projects.projects)

	return(
        <div className="projects-section section">
			<Container>
                <Row>
                    <SectionTitle subtitle="Some of my works" title="projects" reverse center/>
                    <Button link="/projects" text="See more" outline/>
                </Row>
                <Row>
                    <ProjectSectionStyle>
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation={true}
                            modules={[Navigation]}
                            breakpoints={{640: {slidesPerView: 1}, 768: {slidesPerView: 2}, 1200: {slidesPerView: 3}}}
                        >
                            {projects.map((project, index) => {
                                if (index >= 5) {
                                    return null
                                } else {
                                    return (
                                        <SwiperSlide key={index}>
                                            <ProjectCard name={project.name} desc={project.desc} img={project.img}/>
                                        </SwiperSlide>
                                    );
                                }
                            })}
                        </Swiper>
                    </ProjectSectionStyle>
                </Row>
			</Container>
        </div>
	);
}
