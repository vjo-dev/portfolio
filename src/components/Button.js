import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Button({
    link='#',
    text='Click',
    outline=false,
}) {
    return (
        <ButtonStyle outline={outline}>
            <Link className="button" to={link}>
                <h4>{text}</h4>
            </Link>
        </ButtonStyle>
    );
}

const ButtonStyle = styled.div`
    a {
        text-decoration: none;
    }
    button {
        outline: none;
    }
    .button{
        padding: 0.6rem 2rem;
        border-radius: var(--border-radius);
        display: inline-block;
        border: 2px solid var(--blue);
		color: var(--blue);
		:hover {
			background-color: var(--blue);
			color: white;
		}
    }
`;
