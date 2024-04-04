import {
  react,
  // backend,
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
  scouts,
  vivagusta,
  zenzest,
  // jobit,
  // tripguide,
  threejs,
  comingsoon,
  // coverImage, // Use the named import here
} from "../assets";

import linkedin from '../assets/socials/linkedin.svg';
import github from '../assets/socials/github.svg';
import twitter from '../assets/socials/twitter.svg';
// import instagram from '../assets/socials/instagram.svg';

export const navLinks = [
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
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
    link: 'https://www.linkedin.com/in/nicholemcgrew/',
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
  // {
  //   name: "cover",
  //   icon: coverImage, // Use the named import here
  // },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: full,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: react,
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
  {
    name: "redux",
    icon: redux,
  },
];

const projects = [
  {
    name: "Cub Scouts",
    description: "An engaging landing page designed to introduce Cub Scouting to prospective members and their families. Discover the exciting world of Cub Scouting, learn about activities, and stay updated with upcoming events and activities.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: scouts,
    links: {
      source_code: "https://github.com/NICHOLEMCGREW/cub-scouts-365",
      source_deploy: "https://cub-scouts-pack-365.netlify.app"
    }
  },
  {
    name: "Viva Gusta",
    description: "Discover the ultimate fusion at Gusto Vibes! Delight in the richness of Italian flavors and the juiciness of gourmet burgers. Customize your order and experience swift service from our local partners. Start your culinary adventure now!",
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
        name: "tailwind",
        color: "pink-text-gradient",
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
    links: {
      source_code: "https://github.com/NICHOLEMCGREW/nextjs-food-ordering-app",
      source_deploy: "https://viva-gusto.netlify.app"
    }
  },
  {
    name: "FitTrack Pro",
    description: "Empowering users in their fitness journey with a seamless platform to log and track weight and body measurements over time. Focuses on user-friendly features and intuitive graphs for visual progress monitoring.",
    tags: [
      {
        name: "mongo",
        color: "orange-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      }
    ],
    image: comingsoon,
    links: {
      source_code: "https://github.com/NICHOLEMCGREW",
      source_deploy: ""
    }
  },
];

export { services, skills, projects };
