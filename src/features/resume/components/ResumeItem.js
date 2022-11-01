import React from 'react';
import styled from 'styled-components';

export default function ResumeItem({
    name='name',
    items=['item 1', 'item 2', 'item 3'],
    appendix=''
}) {
    return(
        <ResumeItemStyle>
            <h3>{name}</h3>
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
    margin-bottom: 1rem;

    .items{
        display: flex;
        flex-flow: wrap;
        position: absolute;
        left: 15rem;
        gap: 0.4rem;
    }

    .item{
        background-color: var(--green-1);
        color: white;
        font-weight: bold;
        border-radius: var(--border-radius);
        font-size: 1.2rem;
        padding: 0.5rem 1rem;
    }

    .appendix{
        padding: 0.4rem;
        font-size: 1.2rem;
    }

    @media only screen and (max-width: 800px){
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      .items {
        position: initial;
        gap: 0;
        margin-bottom: 1rem;
      }
      .item{
        margin: 0.4rem;
        font-size: 1rem;
      }
      .appendix {
        padding: 0.2rem;
      }
    }
`;
