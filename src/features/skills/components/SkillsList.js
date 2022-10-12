import React from 'react';
import SkillItem from './SkillItem';
import skills from '../../../assets/data/skills.js'
import SectionTitle from '../../../components/SectionTitle';

export default function SkillsList() {
    return(
        <div className="skills_list">
            <SectionTitle title="Skills" />
            {skills.map(skill => (
                <SkillItem key={skill.id} name={skill.name} items={skill.items}/>
            ))}
        </div>
    );
}
