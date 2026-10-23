import urlShortenerImg from "@/assets/url-shortener.png";
import salesImg from "@/assets/sales-projeto1.png";
import personalManagementImg from "@/assets/finance-api.jpg";
import loginAuthImg from "@/assets/auth-api.jpg";

export const profile = {
  name: "Lucas Phillipe",
  firstName: "Lucas",
  lastName: "Phillipe",
  role: "Full Stack Developer",
  tagline:
    "Full Stack Developer focused on creating robust APIs, corporate systems, and scalable web experiences.",
  email: "lucas.pfd.2002@gmail.com",
  linkedin: "https://linkedin.com/in/lucasphillipe",
  github: "https://github.com/LucasDias2002",
};

export const experiences = [
  {
    id: "stefanini-dev-i",
    company: "Stefanini IHM",
    role: "Developer I",
    period: "September 2026 — Present",
    bullets: [
      "Contribute to multiple enterprise projects, developing and maintaining solutions across frontend and backend.",
      "Implement integrations with industrial systems and data platforms, including PI Web API and AF SDK.",
      "Develop REST APIs and application features using C#, .NET, Angular, and SQL Server.",
    ],
    stack: ["C#", ".NET", "Angular", "SQL", "Docker", "RabbitMQ", "Git", "PI Web API", "AF SDK"],
  },
  {
    id: "stefanini-dev",
    company: "Stefanini IHM",
    role: "Software Development Intern",
    period: "April 2026 — August 2026",
    bullets: [
      "Development and maintenance of web applications using C#, .NET, Angular, and SQL.",
      "Development of REST APIs and implementation of frontend features for enterprise applications.",
      "Collaboration with the development team following clean code, software architecture, and development best practices.",
    ],
    stack: ["C#", ".NET", "Angular", "SQL", "Docker", "RabbitMQ", "Git"],
  },
  {
    id: "stefanini-support",
    company: "Stefanini IHM",
    role: "Technical Support Intern",
    period: "Jun 2025 — Mar 2026",
    bullets: [
      "Provided technical support to users, troubleshooting hardware, software, and system-related issues.",
      "Performed equipment maintenance, system configuration, and on-site and remote technical assistance.",
      "Supported daily IT operations, helping maintain the availability and proper functioning of the company's infrastructure.",
    ],
    stack: ["Windows", "Microsoft 365", "Hardware", "Networking", "Remote Support"],
  },
  {
    id: "puc-ta",
    company: "PUC Minas",
    role: "Web Development Teaching Assistant",
    period: "2024 — 2025",
    bullets: [
      "Assisted students with web development concepts, programming exercises, and academic projects.",
      "Provided guidance on HTML, CSS, JavaScript, and web application development.",
      "Supported students in troubleshooting code, understanding development concepts, and applying best practices.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Git", "Web Development"],
  },
];

export const skills = {
  Backend: [
    { name: "Java", level: 95 },
    { name: "Spring Boot", level: 92 },
    { name: "C#", level: 85 },
    { name: ".NET", level: 82 },
    { name: "Node.js", level: 80 },
  ],
  Frontend: [
    { name: "Angular", level: 90 },
    { name: "TypeScript", level: 88 },
    { name: "JavaScript", level: 90 },
    { name: "HTML", level: 95 },
    { name: "CSS", level: 88 },
  ],
  Databases: [
    { name: "SQL Server", level: 88 },
    { name: "PostgreSQL", level: 85 },
    { name: "MySQL", level: 82 },
    { name: "MongoDB", level: 75 },
  ],
  "Cloud & DevOps": [
    { name: "AWS", level: 78 },
    { name: "Docker", level: 85 },
    { name: "Git / GitHub", level: 95 },
    { name: "CI/CD", level: 82 },
  ],
};

export const projects = [
  {
    title: "Sales - Microservices and Messages",
    description:
      "Sistema de vendas desenvolvido com C# e .NET, utilizando uma arquitetura baseada em microsserviços, RabbitMQ e comunicação assíncrona entre os serviços.",
    image: salesImg,
    stack: ["C#", ".NET", "RabbitMQ", "Docker"],
    github: "https://github.com/LucasDias2002/sales-microsservices-and-messages",
    featured: true,
  },
  {
    title: "URL Shortener",
    description:
      "Aplicação desenvolvida em Java e Spring Boot para encurtamento e gerenciamento de URLs.",
    image: urlShortenerImg,
    stack: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    github: "https://github.com/LucasDias2002/url-shortener",
    featured: false,
  },
  {
    title: "Personal Management API",
    description:
      "API desenvolvida para gestão pessoal, permitindo o gerenciamento e organização de informações de forma estruturada e eficiente.",
    image: personalManagementImg,
    stack: ["C#", ".NET", "SQL Server", "Docker"],
    github: "",
    featured: false,
  },
  {
    title: "Login Auth API",
    description:
      "API de autenticação de usuários desenvolvida com Spring Boot, utilizando JWT para autenticação e BCrypt para hashing seguro de senhas.",
    image: loginAuthImg,
    stack: ["Java", "Spring Boot", "JWT", "BCrypt"],
    github: "https://github.com/LucasDias2002/login-auth-api",
    featured: false,
  },
];

export const education = [
  {
    course: "Systems Analysis and Development",
    school: "PUC Minas",
    period: "2024 — 2026",
    subjects: [
      "Software Engineering",
      "Data Structures",
      "Database Systems",
      "Object-Oriented Programming",
      "Software Architecture",
    ],
  },
];

export const certifications = [
  {
    title: "Microservices Architecture with ASP.NET and C#",
    issuer: "Udemy",
    year: "2026",
  },
  {
    title: "Java Mini-Course",
    issuer: "Rocketseat",
    year: "2026",
  },
  {
    title: "Java and Spring Boot Training",
    issuer: "Alura",
    year: "2025",
  },
  {
    title: "Java Web Training: Build Applications with Spring Boot",
    issuer: "Alura",
    year: "2025",
  },
  {
    title: "Training: Learn Java Programming with Object-Oriented Programming",
    issuer: "Alura",
    year: "2025",
  },
  {
    title: "Git and GitHub: Mastering Code Version Control",
    issuer: "Alura",
    year: "2024",
  },
  {
    title: "Microsoft Excel 2016: Advanced",
    issuer: "Fundação Bradesco",
    year: "2024",
  },
];
