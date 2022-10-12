import React from "react";
import SectionTitle from './SectionTitle';
import hero from '../assets/images/about-page-img.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AboutSection() {
	return(
		<div className="about-section section">
			<Container>
				<Row>
					<Col>
                        <SectionTitle title="Hello!" subtitle="My name is Vincent" reverse center />
						<p className="">
I am French, leaving in Switzerland. A place of beauty and nature.
I like the process of creating unique solutions that will solve complex problems.
To observe, to measure, to model, to analyze and then design the solution are
a passion for me. I enjoyed the process a lot.
<br /> <br />
I am graduate from Biomedical engineer school in France and I had several roles in
medical companies. I started coding since I was in my first job more than 10 years ago.
I kept learning new langages and competences that helps me to achieve better results
in my activities.
<br /> <br />
Now I would like to take the opportunity to design solutions along with the coding.
Web development is for the solution that will bring me my Ikigaï.
						</p>
					</Col>
					<Col>
                        <img src={hero} alt="vjo" />
					</Col>
				</Row>
			</Container>
		</div>
	);
}
