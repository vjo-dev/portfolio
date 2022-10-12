import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
    margin-top: 4rem;
    text-align: ${props => props.center ? "center" : "left"};
    display: flex;
    flex-direction: ${props => props.reverse ? "column-reverse" : "column"};
    h3{
    }
    h1{
    text-transform: uppercase;
    }
    @media only screen and (max-width: 768px){
    }
`

export default function SectionTitle({
    title="main title",
    subtitle,
    reverse,
    center
}) {
    return(
        <SectionTitleStyle reverse={reverse} center={center}>
            <h1>{title}</h1>
            <h3>{subtitle? subtitle : null}</h3>
        </SectionTitleStyle>
    );
}
