import React from 'react';
import ResumeItem from './ResumeItem';
import SectionTitle from '../../../components/SectionTitle';
import skills from '../../../assets/data/skills.js'
import works from '../../../assets/data/works.js'
import educations from '../../../assets/data/educations.js'
import certifications from '../../../assets/data/certifications.js'

export default function ResumeList() {
    return(
        <div className="resume_list">
            <div className="skills_items">
                <SectionTitle title="Skills" />
                {skills.map(skill => (
                    <ResumeItem key={skill.id} name={skill.name} items={skill.items}/>
                ))}
            </div>
            <div className="certifications_items">
                <SectionTitle title="Certifications" />
                {certifications.map(certification => (
                    <ResumeItem key={certification.id} name={certification.name} items={certification.items}/>
                ))}
            </div>
            <div className="works_items">
                <SectionTitle title="Work Experiences" />
                {works.map(work => (
                    <ResumeItem key={work.id} name={work.name} items={work.items} appendix={work.appendix}/>
                ))}
            </div>
            <div className="educations_items">
                <SectionTitle title="Education" />
                {educations.map(education => (
                    <ResumeItem key={education.id} name={education.name} items={education.items}/>
                ))}
            </div>
        </div>
    );
}
