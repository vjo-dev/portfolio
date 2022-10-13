import React from 'react';
import styled from 'styled-components';
import Hexagon from '../features/logo/Hexagon';

const ContactItem = styled.a`
    display: flex;
    flex-direction: row;
    text-decoration: none;
    color: black;
    :hover, :visited {
        text-decoration: none;
        color: black;
    }
    .hexagon-container {
        witdh: 20px;
        height: 20px;
        margin-right: 0.5rem;
        margin-left: 1rem;
    }

`

export default function ContactSection() {

    const Contact = ({name, color, link="#"}) => {
        return <ContactItem href={link} target="_blank">
                <div className="hexagon-container"><Hexagon color={color}/></div>
                <h5 className="contact-item">{name}</h5>
            </ContactItem>
    }
	return(
		<div className='contact'>
			<div className='contact-title'>
				<h3>Contact</h3>
			</div>
			<div className="contact-items">
                <Contact name="Email" color="blue" link="mailto:journot.vincent@gmail.com"/>
                <Contact name="LinkedIn" color="green" link="https://www.linkedin.com/in/vincent-journot"/>
                <Contact name="Resume" color="lightgreen"/>
			</div>
		</div>
	);
}
