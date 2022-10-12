import React from 'react';
import styled from 'styled-components';

const SkillItemStyle = styled.div`
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

export default function SkillItem({
    name="skill name",
    items=['item 1', 'item 2', 'item 3']
}) {
    return(
        <SkillItemStyle>
            <h1 className="name">{name}</h1>
            <div className="items">
                {items.map((item, index) => (
                    <div className="item" key={index}>
                        {item}
                    </div>
                ))}
            </div>
        </SkillItemStyle>
    );
}
