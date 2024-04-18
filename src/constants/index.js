import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Trainee software developer",
        company_name: "SSM Infotech, Surat, India",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "Dec 2023-Present",
        points: [
            "Developed Visitor Management System using Angular and Node.js backend APIs for efficient data processing and user interaction.",
            "Wrote UI test cases using Selenium for comprehensive coverage of user interfaces.",
            "Implemented Database client for in-house data storage using Angular and node.js.",
            "Utilized Angular's templating and data binding features for dynamic content rendering and client-side interactivity in all projects.",
            "Participated in Agile processes and code reviews to maintain quality and meet deadlines."
        ],
    },
    {
        title: "Web developer",
        company_name: "Sankalp soft, Nasik, India",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2022 - April 2022",
        points: [
            "Developed robust test automation frameworks using Angular Test Bed and Karma for unit, integration, and end-to-end testing of Angular applications.",
            "Implemented User Management system for HR and payroll department.",
            "Wrote clean, reusable code in TypeScript and JavaScript, following object-oriented programming principles and Angular best practices",
            "Implemented CI/CD pipelines for deployment of Angular applications and Node.js APIs in github actions"
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/purvi-patil-8319921b5/',
    }
];
