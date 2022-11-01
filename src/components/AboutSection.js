import React from "react";
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import hero from '../assets/images/hero.png'
import { HandThumbsUpFill, PersonFill, SuitHeartFill } from "react-bootstrap-icons";

export default function AboutSection() {

    const Item = ({title="title", icon="icon", text="text"}) => {
        return <AboutItemStyle>
            <div className="about-title">
              <div className="icon-container">{icon}</div>
              <h2>{title}</h2>
            </div>
            <h3>{text}</h3>
        </AboutItemStyle>
    }

  return(
    <AboutSectionStyle>
      <SectionTitle title="Hello!" subtitle="My name is Vincent" reverse center />
      <div className="about-container">
        <div className="about-items">
          <Item 
            title="Who am I?" 
            text="A practical thinker, honest and trustworthy." 
            icon={<PersonFill color="var(--green-1)"/>}
          />
          <Item 
            title="What is my passion?" 
            text="Study, model, understand and solve mathematical or scientific problems, pratical or theorical." 
            icon={<SuitHeartFill color="var(--blue-2)"/>}
          />
          <Item 
            title="What am I good at?" 
            text="Interact with computer. Organize, plan and prioritize work. Understand the needs of customer and improve their experiences." 
            icon={<HandThumbsUpFill color="var(--blue-1)"/>}
          />
        </div>
        <div className="about-image">
          <img src={hero} alt='vjo-dev' />
        </div>
      </div>
    </AboutSectionStyle>
	);
}

const AboutItemStyle = styled.div`
  .about-title {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    .icon-container {
      margin-right: 0.5rem;
      width: 35px;
      svg {
        width: 100%;
        height: auto;
      }
    }
    h2 {
      font-size: 2.2rem;
    }
  }
  h3 {
    font-size: 1.7rem;
    margin-bottom: 1.5rem;
    font-weight: 200;
  }
  @media only screen and (max-width: 800px) {
    .about-title {
      h2 {
        font-size: 2rem;
      }
    }
    h3 {
      font-size: 1.4rem;
    }
  }
`

const AboutSectionStyle = styled.div`
  padding: 8rem 0;
  background: var(--bg-color);
  display: flex;
  flex-direction: column;
  .about-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    gap: 1rem;
  }
  .about-items {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
  .about-image {
    width: 90%;
    img{
      width: 100%;
      border-radius: var(--border-radius)
    }
  }
  @media only screen and (max-width: 800px) {
    padding: 4rem 1rem;
    .about-container {
      flex-direction: column;
    }
  }
`;
