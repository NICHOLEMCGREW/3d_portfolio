import {
  react,
  backend,
  full,
  // creator,
  web,
  ux,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  // carrent,
  comingsoon,
  vivagusta,
  zenzest,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import linkedin from '../assets/socials/linkedin.svg';
import github from '../assets/socials/github.svg';
import twitter from '../assets/socials/twitter.svg';
import instagram from '../assets/socials/instagram.svg';

export const navLinks = [
  
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
];

export const letsConnectLink = {
  id: "contact",
  title: "Let's Connect",
  className: "contact",
};

export const socials = [
  {
    name: "linkedin",
    icon: linkedin,
    link: 'https://www.linkedin.com/in/nichole-mcgrew/',
  },
  {
    name: "github",
    icon: github,
    link: 'https://github.com/NICHOLEMCGREW',
  },
  {
    name: "twitter",
    icon: twitter,
    link: 'https://twitter.com/NicholeMcGrew',
  },
  // {
  //   name: "instagram",
  //   icon: instagram,
  //   link: 'https://www.instagram.com/insight.photos/',
  // },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: react,
  },
  {
    title: "Backend Developer",
    icon: full,
  },
  {
    title: "UI/UX Designer",
    icon: ux,
  },
];

const skills = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];


const projects = [
  {
    name: "ZenZest",
    description:
      
"ZenZest Social Media: A vibrant online space where users share visual stories, connect creatively, and embrace the zest for life. Join the community to explore, engage, and elevate your social experience with ZenZest.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "appwrite",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: zenzest,
    source_code_link: "https://github.com/NICHOLEMCGREW/ZenZest",
    source_deploy_link: "https://zen-zest.netlify.app/"
  },
  {
    name: "Viva Gusta",
    description:
      "Experience the best of both worlds with Viva Gusto! Explore authentic Italian dishes and mouthwatering burgers, all at your fingertips. Customize and savor swift delivery from local favorites. Download now for a culinary journey to your doorstep.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "psql",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "stripe",
        color: "blue-text-gradient",
      },
      {
        name: "prisma",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      },
    ],
    image: vivagusta,
    source_code_link: "https://github.com/NICHOLEMCGREW/nextjs-food-ordering-app",
    source_deploy_link: "https://viva-gusto.netlify.app"
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: comingsoon,
    source_code_link: "https://github.com/",
    source_deploy_link: "https://rose-salon.netlify.app"
  },
];

export { services, skills, projects };