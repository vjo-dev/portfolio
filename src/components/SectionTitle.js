import React from 'react';
import styled from 'styled-components';

export default function SectionTitle({
    title="main title",
    subtitle,
    reverse,
    center
}) {
    return(
        <SectionTitleStyle reverse={reverse} center={center}>
            <h1>{title}</h1>
            <h2>{subtitle? subtitle : null}</h2>
        </SectionTitleStyle>
    );
}

const SectionTitleStyle = styled.div`
    display: flex;
    flex-direction: ${props => props.reverse ? "column-reverse" : "column"};
    text-align: ${props => props.center ? "center" : "left"};
    h1{
        text-transform: uppercase;
    }
`;
