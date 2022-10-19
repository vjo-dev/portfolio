import React from "react";
import { useSelector } from 'react-redux';
import SectionTitle from './SectionTitle';
import Button from './Button';
import { ProjectCard } from '../features/projects';

import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";

export default function ProjectsSection() {
	const projects = useSelector(state => state.projects.projects)

	return(
        <ProjectSectionStyle>
            <div className="project-section-title">
                <SectionTitle subtitle="Some of my works" title="projects" reverse center/>
                <Button link="/projects" text="See more" outline/>
            </div>
            <div className="project_section-swiper">
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
            </div>
        </ProjectSectionStyle>
	);
}

const ProjectSectionStyle = styled.div`
    background: var(--bg-color);
    display: flex;
    flex-direction: column;
    padding: 8rem 0;

    .project-section-title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    .project_section-swiper {
        padding: 1rem;
        .swiper {
            padding-top: 4rem;
            max-width: 100%;
        }
        .swiper-button-prev,
        .swiper-button-next {
            position: absolute;
            color: var(--text-color);
            background-color: var(--blue-1);
            height: 50px;
            width: 50px;
            z-index: 10;
            right: 100px;
            left: auto;
            top: 0;
            transform: translateY(50%);
            border-radius: 8px;
        }
        .swiper-button-next {
            right: 40px;
        }
        .swiper-button-prev::after,
        .swiper-button-next::after {
            font-size: 2rem;
        }
    }
`;
