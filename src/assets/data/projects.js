import { v4 as uuidv4 } from 'uuid';
import bookshelf_amj from '../images/bookshelf_amj.JPG';
import workbench from '../images/workbench.png';
import onewink from '../images/onewink.png'
import toolchest from '../images/toolchest.JPG'
import tyb from '../images/tyb.png'
import woodbox from '../images/woodbox.JPG'
import pmo from '../images/pmo.jpg'
import finance from '../images/finance.jpg'
import wheels from '../images/wheels.jpg'
import pixel from '../images/pixel.png'
import pulse from '../images/pulse.jpg'
import portfolio from '../images/portfolio.png'

const projects = [
    {
        id: uuidv4(),
        category: "Web dev",
        name: 'My portfolio',
        desc:
        'My portfolio static website. Full react project to showcase my work.',
        img: portfolio,
    },
    {
        id: uuidv4(),
        category: "Web dev",
        name: 'Onewink website',
        desc:
        'Retrofit of an association website. Addition of a timeline feature editable by the owner. Build with Django and React frameworks.',
        img: onewink,
    },
    {
        id: uuidv4(),
        category: "Web dev",
        name: 'Customization app',
        desc:
        'Application to create a custom design UV printed on freestyle scooter wheels. Build with Django and React frameworks.',
        img: wheels,
    },
    {
        id: uuidv4(),
        category: "Woodworking",
        name: 'Floating bookshelf',
        desc:
        'A shelf made from oak wood inherited from my father. 2 levels shelf with mouldings made with handtools.',
        img: bookshelf_amj,
    },
    {
        id: uuidv4(),
        category: "Web dev",
        name: 'Project manager app',
        desc:
        'Central system to automate project management tasks. Extract, transform and load data from an API automated with Powershell.',
        img: pmo,
    },
    {
        id: uuidv4(),
        category: "Web dev",
        name: 'Accounts manager',
        desc:
        'Financial app to centralize transactions of an entire family with several bank accounts. Build with Django python framework.',
        img: finance,
    },
    {
        id: uuidv4(),
        category: "Woodworking",
        name: "Woodboxes",
        desc:
        "Woodboxes made with dovetail joints by hand.",
        img: woodbox,
    },
    {
        id: uuidv4(),
        category: "Woodworking",
        name: 'Dutch toolchest',
        desc:
        'Traditional toolchest to store my precious handtools with a secret compartment.',
        img: toolchest,
    },
    {
        id: uuidv4(),
        category: "Woodworking",
        name: 'My workbench',
        desc:
        'My first traditional workbench with different clamping system. Assembly with traditional joints.',
        img: workbench,
    },
    {
        id: uuidv4(),
        category: "Tech",
        name: 'Tune your bike',
        desc:
        'Arduino system to measure, record and analyze impact of suspension\'s settings on my montain bike.',
        img: tyb,
    },
    {
        id: uuidv4(),
        category: "Tech",
        name: 'Heart Rate Variability',
        desc:
        'Analyze of my pulse signal captured with smartphone to determined my HRV. Data processed with Excel.',
        img: pulse,
    },
    {
        id: uuidv4(),
        category: "Tech",
        name: 'Discrete to continuous',
        desc:
        'Study of the impact of computer graphics in the field of medical imaging.',
        img: pixel,
    },
];

export default projects;
