import React from 'react';
import styled from 'styled-components';
import pdf from '../assets/data/cv_vjournot.pdf';
import Hexagon from '../features/logo/Hexagon';

export default function ContactSection() {

    const Contact = ({name, color, link="#"}) => {
        return <a className="contact-item" href={link} target="_blank" rel="noreferrer">
            <div className="icon-container"><Hexagon color={color}/></div>
            <div className="label-container"><h5>{name}</h5></div>
        </a>
    }

	return(
		<ContactItem>
			<div className='title'>
				<h3>Contact</h3>
			</div>
			<div className="contact-items">
                <Contact name="Email" color="var(--blue-1)" link="mailto:journot.vincent@gmail.com"/>
                <Contact name="LinkedIn" color="var(--green-1)" link="https://www.linkedin.com/in/vincent-journot"/>
                <Contact name="GitHub" color="var(--blue-2)" link="https://github.com/vjo-dev"/>
                <Contact name="Resume" color="var(--green-2)" link={pdf}/>
			</div>
		</ContactItem>
	);
}

const ContactItem = styled.div`
    display: flex;
    flex-direction: column;
    
        .contact-items {
            display: flex;
            flex-direction: row;
            gap: 1rem;
        }

    .contact-item {
        all: unset;
        display: flex;
        justify-content: center;
        align-items: start;
        cursor: pointer;
        padding: 0.4rem;
    }

@media only screen and (max-width: 800px){
    .contact-items {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 0;
    }
}

`;
