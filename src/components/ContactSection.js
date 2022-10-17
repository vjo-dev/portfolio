import React from 'react';
import styled from 'styled-components';
import Hexagon from '../features/logo/Hexagon';
import pdf from '../assets/data/cv_vjournot.pdf';

export default function ContactSection() {

    const Contact = ({name, color, link="#"}) => {
        return <a href={link} target="_blank" rel="noreferrer">
                <div className="hexagon-container"><Hexagon color={color}/></div>
                <h5 className="contact-item">{name}</h5>
            </a>
    }
	return(
		<ContactItem>
			<div className='contact-title'>
				<h3>Contact</h3>
			</div>
			<div className="contact-items">
                <Contact name="Email" color="blue" link="mailto:journot.vincent@gmail.com"/>
                <Contact name="LinkedIn" color="green" link="https://www.linkedin.com/in/vincent-journot"/>
                <Contact name="GitHub" color="lightblue" link="https://github.com/vjo-dev"/>
                <Contact name="Resume" color="lightgreen" link={pdf}/>
			</div>
		</ContactItem>
	);
}

const ContactItem = styled.div`
     margin-left: 2rem;
    .contact-title {
        text-align: left;
    }
    .contact-items {
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }
    a {
        display: flex;
        flex-direction: row;
        text-decoration: none;
        color: black;
    }
    a:hover, a:visited {
        text-decoration: none;
        color: black;
    }
    .hexagon-container {
        witdh: 20px;
        height: 20px;
        margin-right: 0.5rem;
        margin-left: 1rem;
    }
    @media only screen and (max-width: 768px){
        .contact-items {
            flex-direction: column;
            gap: 0.5rem;
        }
    }

`
