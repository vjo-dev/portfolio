import { v4 as uuidv4 } from 'uuid';

const skills = [
    {
        id: uuidv4(),
        name: 'languages',
        items: ['Python', 'Javascript', 'Powershell', 'bash', 'html' , 'css']
    },
    {
        id: uuidv4(),
        name: 'version control and editor',
        items: ['Git', 'Github', 'Vim']
    },
    {
        id: uuidv4(),
        name: 'Framework',
        items: ['Django', 'React']
    },
]

export default skills;
