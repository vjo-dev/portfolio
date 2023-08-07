import { v4 as uuidv4 } from 'uuid';

const certifications = [
    {
        id: uuidv4(),
        name: '2023',
        items: ['The Ultimate IT Beginners Course'],
        appendix: 'certificat issued by TechWorld With Nana'
    },
    {
        id: uuidv4(),
        name: '2022',
        items: ['Entry-Level Python Programmer'],
        appendix: '[PCEP-30-02] certificat issued by Python Institute'
    },
]

export default certifications;
