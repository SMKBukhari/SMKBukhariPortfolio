import Projects from '@/app/components/homepage/projects';
import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';
import { data } from 'autoprefixer';

export const projectsData = [
    {
        id: 1,
        name: 'Image Generator Website',
        description: "I created this website to generate images using Unsplash API. The website allows users to search for images, select the desired image. The website also supports image download. I developed the website using HTML, CSS, JavaScript, Unsplash API.",
        tools: ['HTML', 'CSS', 'JavaScript', 'Unsplash API', 'VS Code Editor', 'Git/Github'],
        role: 'Frontend Developer',
        code: '',
        demo: 'https://smkbukhari.github.io/Image-Generator/',
        image: crefin,
    },
    {
        id: 2,
        name: 'Text to Speech Converter Website',
        description: 'I have developed a text-to-speech converter website using the SpeechSynthesis API. The website allows users to convert text to speech. I developed the website using HTML, CSS, JavaScript, SpeechSynthesis API.',
        tools: ['HTML', 'CSS', "JavaScript", "SpeechSynthesis API", "VS Code Editor", "Git/Github"],
        role: 'Frontend Developer',
        code: '',
        demo: 'https://smkbukhari.github.io/Text-to-Speech-Converter/',
        image: travel,
    },
    {
        id: 3,
        name: 'BrainWaves Modern UI/UX Website',
        description: 'I am creating a modern UI/UX website for a company called BrainWaves. The website consist of Hero Section, Services Section, Bento Box Design, Pricing Section, Road-Map Section, Footer, Deployement.',
        tools: ['React JS', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript', 'npm', 'VS Code Editor', "Git/Github"],
        code: '',
        role: 'Frontend Developer',
        demo: 'https://smkbukhari.github.io/BrainWave-Website/',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Figma Clone Website',
        description: "I am creating the Figma Clone website. The website consist of different section with different functionalities.",
        tools: ['React', 'HTML', 'CSS', 'JavaScript', "VS Code Editor", "Git/Github"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },