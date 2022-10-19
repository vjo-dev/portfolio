import { v4 as uuidv4 } from 'uuid';
import p1 from '../images/p1.jpg';
import p2 from '../images/p2.jpg';
import p3 from '../images/p3.jpg';
import p4 from '../images/p4.png';
import p5 from '../images/p5.jpg';

const projects = [
    {
        id: uuidv4(),
        category: "Woodworking",
        name: 'U Tracker',
        desc:
        'An application to track your all data from one place. I developed the website and the mobile app',
        img: p1,
    },
    {
        id: uuidv4(),
        category: "Woodworking",
        name: 'Green CTG',
        desc:
        'An app to help people to get an overview of how they can make the city beautiful.',
        img: p2,
    },
    {
        id: uuidv4(),
        category: "Web Dev",
        name: 'Coin Tracker',
        desc:
        'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
        img: p3,
    },
    {
        id: uuidv4(),
        category: "Web Dev",
        name: "Cavin's Portfolio",
        desc:
        'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
        img: p4,
    },
    {
        id: uuidv4(),
        category: "Tech",
        name: 'Tracking Soft',
        desc:
        'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
        img: p5,
    },
];

export default projects;
