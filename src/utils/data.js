import{
    Code2,
    GraduationCap,
    Rocket,
    Heart,
    Coffee,
    Zap,
    Database,
    Server,
    Cloud,
    BookOpen,
    Mail,
    MapPin,
    Phone,
    icons,
} from 'lucide-react';

import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

import Project1 from "../assets/images/project-1.jpg";
import Project2 from "../assets/images/project-2.jpg";
import Project3 from "../assets/images/project-1.jpg";

export const skills = [
    {
        title: 'Frontend',
        icon: Code2,
        description: "Carfting beautiful and responsive user interfaces",
        skills: [
            { name: "HTML", level: 100, color: "bg-blue-500"},
            { name: "CSS", level: 100, color: "bg-yellow-500"},
            { name: "JavaScript", level: 90, color: "bg-orange-500"},
            { name: "React.js", level: 90, color: "bg-purple-500"},
            { name: "Tailwind CSS", level: 75, color: "bg-teal-500"},
            { name: "Typescript", level: 50, color: "bg-blue-300"},
        ],
    },
    {
        title: 'Backend',
        icon: Server,
        description: "Building robust server-side applications",
        skills: [
            { name: "Node.js", level: 90, color: "bg-green-500"},
            { name: "Express.js", level: 85, color: "bg-green-400"},
            { name: "Django", level: 40, color: "bg-green-300"},
            { name: "Flask", level: 35, color: "bg-green-200"},
            { name: "PHP", level: 15, color: "bg-green-100"},
        ],
    },
    {
        title: 'Database',
        icon: Database,
        description: "Managing data with efficiency and reliability",
        skills: [
            { name: "MongoDB", level: 95, color: "bg-yellow-500"},
            { name: "MySQL", level: 70, color: "bg-yellow-400"},
            { name: "SQLite", level: 40, color: "bg-yellow-300"},
            { name: "Firebase", level: 30, color: "bg-yellow-200"},
        ],
    },
    {
        title: 'DevOps',
        icon: Cloud,
        description: "Ensuring smooth deployment and scalability",
        skills: [
            { name: "Git", level: 90, color: "bg-blue-500"},
            { name: "AWS", level: 50, color: "bg-blue-400"},
            { name: "Dockers", level: 40, color: "bg-blue-300"},
            { name: "Jenkins", level: 40, color: "bg-blue-200"},
        ],
    }
];

export const Tech_Stack = [
    "Java",
    "Python",
    "C",
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "TypeScript",
    "Next.js",
    "Angular",
    "Bootstrap",
    "Framer Motion",
    "GitHub",
    "Kotlin",
    "RESTful APIs",
    "Responsive Design",
    "Agile Methodologies",
    "Unit Testing",
    "CI/CD",
    "JWT",
    "JSON",
    "FastAPI",
    "Figma"
];

export const Stats = [
    { number: "6+", label: "Projects Completed" },
    { number: "2+", label: "Years of Experience" },
    { number: "5+", label: "Technologies Mastered" },
    { number: "5+", label: "GitHub Contributions" },
];

export const Projects = [
    {
        id: 1,
        title: "Project One",
        description: "A web application that allows users to track their daily tasks and productivity.",
        image: Project1,
        tags: ["React", "Node.js", "MongoDB"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
        category: "Full Stack",
    },
    {
        id: 2,
        title: "Project Two",
        description: "An e-commerce platform that provides a seamless shopping experience.",
        image: Project2,
        tags: ["React", "Node.js", "PostgreSQL"],
        liveUrl: "#",
        githubUrl: "#",
        featured: true,
        category: "Full Stack",
    },
    {
        id: 3,
        title: "Project Three",
        description: "A social media application that connects users with similar interests.",
        image: Project3,
        tags: ["React", "Node.js", "MongoDB"],
        liveUrl: "#",
        githubUrl: "#",
        featured: true,
        category: "Full Stack",
    },
    {
        id: 4,
        title: "Project Four",
        description: "A personal portfolio website to showcase my skills and projects.",
        image: Project1,
        tags: ["HTML", "CSS", "JavaScript"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
        category: "Frontend",
    },
];

export const Journeys = [
    {
        year: "2023",
        title: "Started My Journey",
        description: "Began my journey in web development with a focus on frontend technologies.",
        icon: Code2,
        color: "bg-blue-500",
    },
    {
        year: "2024",
        title: "First Project",
        description: "Completed my first project, a Personal Finance Management System.",
        icon: GraduationCap,
        color: "bg-green-500",
    },
    {
        year: "2024",
        title: "Full Stack Development",
        description: "Expanded my skills to include backend development with Node.js and MongoDB.",
        icon: Server,
        color: "bg-yellow-500",
    },
    {
        year: "2025",
        title: "Professional Experience",
        description: "Gained professional experience working on various web applications.",
        icon: Rocket,
        color: "bg-purple-500",
    },
];

export const Passions = [
    {
        icons: Heart,
        title: "User Experience",
        description: "Passionate about creating intuitive and engaging user experiences.",
    },
    {
        icons: Coffee,
        title: "Continuous Learning",
        description: "Always eager to learn new technologies and improve my skills.",
    },
    {
        icons: BookOpen,
        title: "Open Source",
        description: "Contributing to open source projects and giving back to the community.",
    },
    {
        icons: Zap,
        title: "Innovation",
        description: "Driven by innovation and finding creative solutions to complex problems.",
    },
];

export const Social_Links = [
    {
        name: "GitHub",
        icons: FiGithub,
        url: "https://github.com/Nihar05032",
        color: "text-gray-800",
    },
    {
        name: "LinkedIn",
        icons: FiLinkedin,
        url: "https://www.linkedin.com/in/nihar-morye/",
        color: "text-blue-700",
    },
    {
        name: "Email",
        icons: Mail,
        url: "https://mail.google.com/",
        color: "text-red-600",
    },
];

export const Contact_Info = [
    {
        icons: MapPin,
        label: "Location",
        value: "Mumbai, Maharashtra",
    },
    {
        icons: Phone,
        label: "Phone",
        value: "+91 8591105032",
    },
    {
        icons: Mail,
        label: "Email",
        value: "niharmorye11@gmail.com",
    },
];    
