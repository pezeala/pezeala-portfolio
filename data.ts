import { ExperienceItem, ProjectItem, TestimonialItem, SkillCategory } from './types';
import React from 'react';

export const PERSONAL_INFO = {
  name: "Peace Ezeala",
  title: "Strategic Product Leader & Agile Transformation Coach",
  tagline: "25+ Years Driving Enterprise Innovation, Scaling High-Performance Teams, and delivering Digital Excellence.",
  summary: "I am a seasoned Product Executive and Agile Coach with over two decades of experience bridging the gap between business strategy and technical execution. My expertise lies in orchestrating large-scale digital transformations, fostering cultures of continuous improvement, and leveraging emerging technologies like GenAI to unlock operational efficiency. I don't just build products; I build the engines that build products.",
  email: "pcezeala@gmail.com",
  linkedin: "linkedin.com/in/peace-ezeala",
  location: "New York Metro Area, (Open to Remote)",
  yearsExperience: 25,
  resume: "https://drive.google.com/file/d/1768gP3LScFzcf_IxH3lPP0vGqY2T5kXy/view?usp=sharing" // link for resume
  /*teamsLed: 40,*/
  /*transformations: 100*/
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "1",
    role: "Product Manager & Agile Coach",
    company: "McKinsey & Co",
    period: "2020 - Present",
    description: "Leading and coaching multiple global product teams of 150+ spanning Product Management, UX, and Engineering operations.",
    achievements: [
      "Spearheaded the design and rollout of automated licensing system, reducing monthly tickes by 95% and and operational cost",
      "Developed an interactive product prototype using vibe coding to validate core features and accelerate stakeholder alignment, reducing design-to-development handoff time.",
      "Designed and led enterprise learning initiatives, including an AI-first product development workshop."
    ],
    image: "https://picsum.photos/400/300?random=10"
  },
  {
    id: "2",
    role: "Senior Scrum Master",
    company: "Johnson & Johnson (Wipro Ltd), New Jersey",
    period: "2018 - 2020",
    description: "Drove consistent, high-quality product delivery, simultaneously leading diverse teams through the full Agile lifecycle.",
    achievements: [
      "Enhanced stakeholder visibility and data-driven governance by creating and managing real-time metrics dashboards in Jira and Tableau.",
      "Fostered continuous improvement and organizational alignment by proactively resolving impediments.",
      "Accelerated team performance and reliability by implementing capacity planning into sprint planning and coaching Agile best practices."
    ],
    image: "https://picsum.photos/400/300?random=11"
  },
  {
    id: "3",
    role: "Senior Software Test Engineer & Scrum Master",
    company: "CA Technologies/Xceedium, New Jersey",
    period: "2012 - 2017",
    description: "Accelerated product delivery and improved team velocity by leading cross‑functional teams with Scrum, Kanban, and SAFe frameworks.",
    achievements: [
      "Governed end-to-end SDLC and deployment by actively deploying, configuring, and testing products across diverse environments, including AWS, VMware, physical appliances, LAN clusters, and troubleshooting critical deployment and customer-escalated issues.",
      "Facilitated alignment from planning through execution, collaborating with Product Management to break down complex stories into detailed engineering tasks.",
      "Implemented DevOps CI/CD pipelines reducing deployment time from days to minutes."
    ],
    image: "https://picsum.photos/400/300?random=12"
  },
  
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "p1",
    title: "AI-Driven Market Analytics",
    category: "Product Innovation",
    description: "Integrated AI-driven market analysis to enhance a device return tool into a strategic inteligence platform & decision support system to reduce cost.",
    impact: "Reducing local IT team workload on device returns by 90%, freeing capacity for higher-value initiatives.",
    image: "https://picsum.photos/600/400?random=1",
    tags: ["AI/ML", "Product Strategy", "B2B SaaS"]
  },
  {
    id: "p2",
    title: "Global Agile Transformation",
    category: "Organizational Change",
    description: "Complete restructure of engineering and product teams to align with value streams rather than functional silos.",
    impact: "Drove structured OKR adoption, acheiving 95% measurable outcomes and boosting stakeholder visibility.",
    image: "https://picsum.photos/600/400?random=2",
    tags: ["Agile Coaching", "Change Management", "Leadership"]
  },
  {
    id: "p3",
    title: "DevOps Modernization",
    category: "Technical Strategy",
    description: "Defined technical strategy, integrating CI/CD pipelines and streamlining deployment across diverse environment.",
    impact: "Accelerated delivery velocity and reduced operational cost by eliminating manual process and optimizing infrastructure usage.",
    image: "https://picsum.photos/600/400?random=3",
    tags: ["DevOps", "Cloud", "Architecture"]
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "t1",
    name: "Ine",
    role: "Product Manager",
    company: "McKinsey & Co",
    quote: "What truly sets Peace apart is her ability to blend agile coaching with strong product thinking. She not only helps teams elevate their delivery practices, but also brings valuable insight into prioritization, customer value, and overall product direction. That combination made her an exceptional thought partner on every project.",
    avatar: "https://picsum.photos/100/100?random=4"
  },
  {
    id: "t2",
    name: "",
    role: "",
    company: "McKinsey & Co",
    quote: "Peace is at her best when aligning diverse priorities and driving clarity... By quickly understanding the challenge and aligning on a plan, she showcased her ability to blend detail orientation with cross-functional problem solving.",
    avatar: "https://picsum.photos/100/100?random=5"
  },
  {
    id: "t3",
    name: "David",
    role: "Director Product Management",
    company: "McKinsey & Co",
    quote: "If Peace wasn't there in the middle, where would we be? We would probably have calls with 20 people on them, with the same people turning up each time and gradually becoming less and less.",
    avatar: "https://picsum.photos/100/100?random=6"
  }
];

// NOTE: Icons are rendered in the component, here we just keep structure.
// We will assign them in the component to avoid serialization issues if this were a real API.
export const SKILLS_DATA_RAW = [
  {
    title: "Product Strategy",
    skills: [
      { name: "Roadmapping", level: 95 },
      { name: "Market Analysis", level: 92 },
      { name: "OKRs & KPIs", level: 100 },
      { name: "Go-to-Market", level: 96 }
    ]
  },
  {
    title: "Agile Leadership",
    skills: [
      { name: "SAFe / Scrum", level: 98 },
      { name: "Coaching", level: 100 },
      { name: "Team Building", level: 99 },
      { name: "Change Mgmt", level: 92 }
    ]
  },
  {
    title: "Technical Innovation",
    skills: [
      { name: "GenAI", level: 90 },
      { name: "DevOps / CI/CD", level: 89 },
      { name: "Cloud Native", level: 83 },
      { name: "Data Analytics", level: 96 }
    ]
  },
  {
    title: "Business Impact",
    skills: [
      { name: "Revenue Growth", level: 92 },
      { name: "Stakeholder Mgmt", level: 99 },
      { name: "Risk Mgmt", level: 98 },
      { name: "Negotiation", level: 95 }
    ]
  }
];
