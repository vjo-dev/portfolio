import React from 'react';
import WorkItem from './WorkItem';
import works from '../../../assets/data/works.js'
import SectionTitle from '../../../components/SectionTitle';

export default function WorksList() {
    return(
        <div className="works_list">
            <SectionTitle title="Works" />
            {works.map(work => (
                <WorkItem key={work.id} name={work.name} items={work.items}/>
            ))}
        </div>
    );
}
