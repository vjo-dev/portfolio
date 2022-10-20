import React from 'react';
import styled from 'styled-components';
import ResumeItem from './ResumeItem';
import SectionTitle from '../../../components/SectionTitle';
import skills from '../../../assets/data/skills.js'
import works from '../../../assets/data/works.js'
import educations from '../../../assets/data/educations.js'
import certifications from '../../../assets/data/certifications.js'

export default function ResumeList() {
    return(
        <ResumeListStyle>
            <div className="resume-group">
                <h2>Skills</h2>
                {skills.map(skill => (
                    <ResumeItem key={skill.id} name={skill.name} items={skill.items}/>
                ))}
            </div>
            <div className="resume-group">
                <h2>Certifications</h2>
                {certifications.map(certification => (
                    <ResumeItem key={certification.id} name={certification.name} items={certification.items}/>
                ))}
            </div>
            <div className="resume-group">
                <h2>Work Experiences</h2>
                {works.map(work => (
                    <ResumeItem key={work.id} name={work.name} items={work.items} appendix={work.appendix}/>
                ))}
            </div>
            <div className="resume-group">
                <h2>Education</h2>
                {educations.map(education => (
                    <ResumeItem key={education.id} name={education.name} items={education.items}/>
                ))}
            </div>
        </ResumeListStyle>
    );
}

const ResumeListStyle = styled.div`
    .resume-group {
        margin-bottom: 3rem;
    }
    h2 {
        margin-bottom: 1rem;
    }
`;
