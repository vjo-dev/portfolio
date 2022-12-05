import { v4 as uuidv4 } from 'uuid';

const skills = [
    {
        id: uuidv4(),
        name: 'languages',
        items: ['Python', 'Javascript', 'Powershell', 'bash', 'html' , 'css']
    },
    {
        id: uuidv4(),
        name: 'Versionning',
        items: ['Git', 'Github']
    },
    {
        id: uuidv4(),
        name: 'Editors',
        items: ['Vim', 'VsCode', 'PyCharm']
    },
    {
        id: uuidv4(),
        name: 'Frameworks',
        items: ['Django', 'React']
    },
]

export default skills;
