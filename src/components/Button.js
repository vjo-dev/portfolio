import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
    a {
        text-decoration: none;
    }
    button {
        outline: none;
    }
    .button{
        background-color: ${(props) => props.outline ? 'transparent' : 'blue'};
        padding: 0.7rem 2rem;
        border-radius: 8px;
        display: inline-block;
        border: 2px solid blue;
        color: ${(props) => props.outline ? 'blue' : 'white'};
    }
    @media only screen and (max-width: 768px){
        .button {
            font-size: 1.8rem;
        }
    }
`

export default function Button({
    link='#',
    text='Click',
    outline=false,
}) {
    return (
        <ButtonStyle outline={outline}>
            <Link className="button" to={link}>
                {text}
            </Link>
        </ButtonStyle>
    );
}
