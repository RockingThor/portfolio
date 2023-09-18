import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },

    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Graduated bootcamp",
        location: "Miami, FL",
        description:
            "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        icon: React.createElement(LuGraduationCap),
        date: "2019",
    },
    {
        title: "Front-End Developer",
        location: "Orlando, FL",
        description:
            "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - 2021",
    },
    {
        title: "Full-Stack Developer",
        location: "Houston, TX",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2021 - present",
    },
] as const;

export const projectsData = [
    {
        title: "Discord Clone",
        description:
            "I created a Discord clone using React, Next.js, TypeScript, and Tailwind for the frontend, while utilizing MySQL and Prisma for the database. The project includes OAuth authentication, real-time chat functionality with WebSockets, and integrates Livekit for video conferencing. This comprehensive platform allows users to connect, chat, and engage seamlessly, showcasing my skills in frontend development, backend database management, and real-time communication. Explore this project to witness a dynamic and interactive community-building experience.",
        tags: [
            "React",
            "Next.js",
            "Mysql",
            "TypeScript",
            "Tailwind",
            "Prisma",
            "Shadcn",
            "OAuth",
            "WebSockets",
            "Livekit",
        ],

        githubLink: "https://github.com/RockingThor/discord",
        deploymentLink: "https://discord-rohit.vercel.app/",
    },
    {
        title: "Movix: The Movie Exploration Site",
        description:
            "I've crafted a dynamic movie exploration site, leveraging React, TypeScript, SaaS, Redux, and lazy loading techniques. This platform offers a user-friendly interface to discover and explore a vast collection of movies. With Redux managing state seamlessly, users can navigate effortlessly through the content while enjoying speedy load times through lazy loading. This project not only showcases my proficiency in frontend development but also demonstrates my ability to create a responsive, efficient, and visually engaging web application for movie enthusiasts. Dive into this cinematic journey to experience the world of movies like never before.",
        tags: ["React", "TypeScript", "Saas", "Redux", "Lazy loading"],

        githubLink: "https://github.com/RockingThor/Moviex-Deploy",
        deploymentLink: "https://rohit-moviex.vercel.app/",
    },
    {
        title: "Ecommerce Shoe Store",
        description:
            "I've meticulously recreated the Nike website, complete with a seamless shopping experience, using React, Next.js, Strapi, Tailwind, and Redux. Users can effortlessly add items to their cart and proceed to checkout securely through Stripe integration. This project exemplifies my proficiency in frontend development, UI/UX design with Tailwind, and state management with Redux. It also highlights my ability to seamlessly connect with a backend using Strapi and implement secure payment processing through Stripe. Explore this project to witness a faithful recreation of a renowned e-commerce platform and the skills that power it.",
        tags: ["React", "Next.js", "Strapi", "Tailwind", "Redux"],

        githubLink: "https://github.com/RockingThor/shoe-store-frontend",
        deploymentLink: "https://rohit-nike.vercel.app/",
    },
];

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Apollo",
    "Express",
    "PostgreSQL",
    "Python",
    "Django",
    "Framer Motion",
] as const;
