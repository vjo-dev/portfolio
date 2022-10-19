import React from 'react';
import defaultProjectImg from '../assets/default-project.jpg';
import styled from 'styled-components';

export default function ProjectCard({
    name="default project title",
    desc="default short description of the project for this card. It could contains several words as this example",
    img=defaultProjectImg
}) {
	return(
        <Styled>
            <div className="card_img">
                <img src={img} alt={name} />
            </div>
            <div className="card_content">
                <h3 className="card_title">{name}</h3>
                <p className="card_desc">{desc}</p>
            </div>
        </Styled>
	);
}

const Styled = styled.div`
    max-width: 400px;
    .card_img{
        width: 100%;
        height: 350px;
        overflow: hidden;
        border-radius: 12px;
        display: inline-block;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .card_content{
        text-align: left;
        padding: 1rem;
        .card_title{
    }
    .card_desc{
        margin-top: 1rem;
    }
}
`;
