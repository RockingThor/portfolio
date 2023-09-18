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
            "I worked for 2 months for this project. I have tried to implement most of the features of Discord. Implemented O-Auth using Clerk so that users can sign in and signup smoothly. Used Mysql for storing and managing data. Used Prisma as ORM. Used Websocket for live broadcasting of messages. In this clone users can do group chat-calls, one to one video and audio call. Users also can share files in chat as image and pdf. Tried to make the UI close to Discord's.",
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
            "I worked for 2 months for this project. I have tried to implement most of the features of Discord. Implemented O-Auth using Clerk so that users can sign in and signup smoothly. Used Mysql for storing and managing data. Used Prisma as ORM. Used Websocket for live broadcasting of messages. In this clone users can do group chat-calls, one to one video and audio call. Users also can share files in chat as image and pdf. Tried to make the UI close to Discord's.",
        tags: ["React", "TypeScript", "Saas", "Redux", "Lazy loading"],

        githubLink: "https://github.com/RockingThor/Moviex-Deploy",
        deploymentLink: "https://rohit-moviex.vercel.app/",
    },
    {
        title: "Ecommerce Shoe Store",
        description:
            "I worked for 2 months for this project. I have tried to implement most of the features of Discord. Implemented O-Auth using Clerk so that users can sign in and signup smoothly. Used Mysql for storing and managing data. Used Prisma as ORM. Used Websocket for live broadcasting of messages. In this clone users can do group chat-calls, one to one video and audio call. Users also can share files in chat as image and pdf. Tried to make the UI close to Discord's.",
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
