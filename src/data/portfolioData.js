import {
  Mail,
  Code2,
  Smartphone,
  Globe,
  Database,
  Layout,
  Server,
  Terminal,
  Cpu,
  Layers,
  Award,
  BookOpen
} from 'lucide-react';
import { GitHub, Github, Linkedin, Instagram } from '../components/Common/BrandIcons';

export const portfolioData = {
  personalInfo: {
    name: "Himanshu Jayswal",
    roles: [
      "Assistant Engineer",
      "Java Developer",
      "Android Developer",
      "Full Stack Developer"
    ],
    intro: "I am a passionate Assistant Engineer and aspiring Java Developer with experience in building full-stack applications using Java, Spring Boot, React, Android, and modern technologies. I enjoy building real-world projects, solving problems, and creating scalable applications.",
    about: "I am an Assistant Engineer and aspiring Java Full Stack Developer passionate about building modern applications using Java, Spring Boot, React, Android, and cloud technologies. I enjoy turning ideas into practical products and continuously learning new technologies.",
    location: "Rajkot, Gujarat, India",
    email: "[EMAIL_ADDRESS]", // Placeholder, user should update
    resumeUrl: "#", // Placeholder
    socials: [
      { name: "GitHub", icon: GitHub, url: "https://github.com/jayswalhimanshu74-cmd" },
      { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/himanshujayswal" },
      { name: "Instagram", icon: Instagram, url: "https://instagram.com/himanshujayswal" },
      { name: "Email", icon: Mail, url: "mailto:[EMAIL_ADDRESS]" },
      { name: "LeetCode", icon: Code2, url: "https://leetcode.com/himanshujayswal" }
    ],
    stats: [
      { label: "Projects Completed", value: 15, suffix: "+" },
      { label: "Technologies Learned", value: 12, suffix: "+" },
      { label: "Years of Learning", value: 4, suffix: "+" },
      { label: "Current Focus", value: 100, suffix: "%" }
    ]
  },
  skills: [
    {
      category: "Frontend",
      items: [
        { name: "React", level: 90, icon: Layout },
        { name: "HTML", level: 95, icon: Globe },
        { name: "CSS", level: 90, icon: Globe },
        { name: "JavaScript", level: 85, icon: Globe },
        { name: "Tailwind CSS", level: 90, icon: Layout }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Java", level: 95, icon: Server },
        { name: "Spring Boot", level: 85, icon: Server },
        { name: "REST APIs", level: 90, icon: Server }
      ]
    },
    {
      category: "Database",
      items: [
        { name: "PostgreSQL", level: 85, icon: Database },
        { name: "Firebase", level: 80, icon: Database }
      ]
    },
    {
      category: "Android",
      items: [
        { name: "Java", level: 90, icon: Smartphone },
        { name: "Android Studio", level: 85, icon: Smartphone },
        { name: "Retrofit", level: 80, icon: Smartphone }
      ]
    },
    {
      category: "Tools",
      items: [
        { name: "Git", level: 90, icon: Terminal },
        { name: "GitHub", level: 90, icon: Github },
        { name: "Docker", level: 75, icon: Cpu },
        { name: "Postman", level: 90, icon: Layers },
        { name: "VS Code", level: 95, icon: Code2 }
      ]
    }
  ],
  experience: [
    {
      role: "Assistant Engineer",
      company: "Multinational Company",
      period: "2023 - Present",
      responsibilities: [
        "Building software solutions",
        "Working with development tools",
        "Learning and improving technical skills",
        "Collaborating in projects"
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Engineering",
      institution: "Gujarat Technological University",
      period: "2019 - 2023",
      description: "Completed B.E. with focus on Computer Science and Engineering."
    }
  ],
  projects: [
    {
      id: 1,
      title: "JobVista",
      description: "A complete job and internship portal with role-based authentication and dashboards.",
      tech: ["React", "Spring Boot", "MySQL", "JWT", "Docker"],
      features: [
        "JWT authentication",
        "Admin dashboard",
        "Company dashboard",
        "Job seeker dashboard",
        "Real-time communication using WebSocket",
        "Responsive UI"
      ],
      links: {
        live: "#",
        github: "#",
        details: "#"
      },
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "StreamVibe",
      description: "Spotify-inspired Android music streaming application",
      tech: ["Java", "Retrofit", "RecyclerView"],
      features: [
        "Music streaming",
        "API integration",
        "Playlist UI",
        "Mood categories"
      ],
      links: {
        live: "#",
        github: "#",
        details: "#"
      },
      image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "MoodBeats",
      description: "Mood-based music recommendation application",
      tech: ["Java", "Firebase"],
      features: [
        "Firebase integration",
        "Authentication",
        "Mood music system"
      ],
      links: {
        live: "#",
        github: "#",
        details: "#"
      },
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Song Story Generator",
      description: "An AI-based application that converts stories into songs and emotional musical experiences.",
      tech: ["AI", "Java", "API"],
      features: [
        "Story to song conversion",
        "Emotional analysis",
        "AI powered music generation"
      ],
      links: {
        live: "#",
        github: "#",
        details: "#"
      },
      image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000&auto=format&fit=crop"
    }
  ],
  achievements: [
    { title: "Completed multiple full-stack projects", icon: Award },
    { title: "Built Android applications", icon: Smartphone },
    { title: "Developed scalable APIs", icon: Server },
    { title: "Learning advanced Java ecosystem", icon: BookOpen }
  ]
};
