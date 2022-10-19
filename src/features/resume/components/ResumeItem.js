import React from 'react';
import styled from 'styled-components';

export default function ResumeItem({
    name='name',
    items=['item 1', 'item 2', 'item 3'],
    appendix=''
}) {
    return(
        <ResumeItemStyle>
            <h1 className="name">{name}</h1>
            <div className="items">
                {items.map((item, index) => (
                    <div className="item" key={index}>
                        {item}
                    </div>
                ))}
                <div className="appendix">{appendix}</div>
            </div>
        </ResumeItemStyle>
    );
}

const ResumeItemStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    text-align: left;
    .name{
        padding: 0.5rem;
        margin-top: 1rem;
        font-size: 1.7rem;
    }
    .items{
        display: flex;
        flex-flow: wrap;
        gap: 1.5rem;
        position: absolute;
        left: 15rem;
    }
    .item{
        background-color: gray;
        padding: 0.5rem;
        border-radius: 8px;
    }
    .appendix{
        padding: 0.5rem;
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
`;
