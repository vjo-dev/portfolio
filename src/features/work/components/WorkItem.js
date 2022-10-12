import React from 'react';
import styled from 'styled-components';

const WorkItemStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    .name{
    }
    .items{
        display: flex;
        flex-flow: wrap;
        gap: 1.5rem;
        position: absolute;
        left: 18rem;
    }
    .item{
        background-color: gray;
        padding: 0.5rem;
        border-radius: 8px;
    }
    @media only screen and (max-width: 768px){
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        .items {
            position: initial;
            gap: 1rem;
        }
    }
`

export default function WorkItem({
    period="1986-2022",
    position="What in where"
}) {
    return(
        <WorkItemStyle>
            <h1 className="name">{period}</h1>
            <div className="item" key={index}>
                {position}
            </div>
        </WorkItemStyle>
    );
}
