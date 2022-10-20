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
            <h2>{title}</h2>
            <h3>{subtitle? subtitle : null}</h3>
        </SectionTitleStyle>
    );
}

const SectionTitleStyle = styled.div`
    display: flex;
    flex-direction: ${props => props.reverse ? "column-reverse" : "column"};
    text-align: ${props => props.center ? "center" : "left"};
    h2{
        text-transform: uppercase;
        margin-bottom: 1.5rem;
    }
`;
