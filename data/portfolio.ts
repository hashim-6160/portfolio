import type {
  PersonalInfo,
  SkillCategory,
  Project,
  TimelineItem,
  Achievement,
} from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Hashim",
  title: "Full Stack Developer | Frontend Developer",
  tagline:
    "Building scalable enterprise applications and delightful digital experiences.",
  bio: "I am a passionate software developer with experience delivering enterprise-grade applications across web and mobile platforms. I specialize in building scalable frontend architectures, integrating complex backend systems, and creating user-centric digital products.",
  roles: [
    "Next.js Developer",
    "React Native Developer",
    "MERN Stack Developer",
    "Frontend Engineer",
  ],
  contact: {
    email: "hashimmohammad860@gmail.com",
    github: "https://github.com/hashim-6160",
    linkedin: "https://www.linkedin.com/in/mohammad-hashimb6160/",
    resumeUrl: "/Mohammad_Hashim_B_CV.pdf",
  },
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 93 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML5", level: 96 },
      { name: "CSS3", level: 88 },
      { name: "Framer Motion", level: 82 },
      { name: "shadcn/ui", level: 85 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 83 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 78 },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    skills: [
      { name: "React Native", level: 88 },
      { name: "Expo", level: 85 },
    ],
  },
  {
    id: "database",
    label: "Database & Cloud",
    skills: [
      { name: "MongoDB", level: 82 },
      { name: "Firebase", level: 78 },
      { name: "SQL", level: 75 },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Postman", level: 85 },
      { name: "Figma", level: 78 },
      { name: "Docker", level: 70 },
      { name: "Apollo Client", level: 78 },
    ],
  },
];

export const projects: Project[] = [
  {
    id: "ca-management",
    title: "CA Management Platform",
    type: "Enterprise Platform",
    description:
      "Developed a comprehensive Chartered Accountant management platform designed to streamline client management, financial workflows, and operational processes. Implemented intuitive dashboards, user management features, and optimized frontend experiences for efficient business operations.",
    features: [
      "Client Management Dashboard",
      "Financial Workflow Automation",
      "User Management & Roles",
      "Analytics & Reporting",
      "Optimized Frontend Performance",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React Query", "REST APIs"],
    featured: true,
    gradient: "from-indigo-500 via-blue-500 to-cyan-500",
  },
  {
    id: "asset-management",
    title: "Enterprise Asset Management System",
    type: "Enterprise SaaS Platform",
    description:
      "Built an enterprise asset management solution enabling organizations to track assets, manage projects, monitor asset lifecycle, assign users, and maintain operational efficiency through role-based access controls and advanced asset tracking capabilities.",
    features: [
      "Asset Lifecycle Management",
      "Project Management",
      "User & Role Management",
      "Dynamic Asset Properties",
      "Reporting Dashboards",
    ],
    technologies: ["Next.js", "TypeScript", "GraphQL", "Apollo Client", "Tailwind CSS"],
    featured: true,
    gradient: "from-purple-500 via-violet-500 to-indigo-500",
  },
  {
    id: "qotbit",
    title: "Qotbit – RFQ Management Platform",
    type: "B2B Procurement Platform",
    description:
      "Developed a Request for Quotation platform connecting buyers and sellers. Buyers can publish procurement requirements while suppliers submit quotations. Buyers can compare quotes and select the most suitable vendors.",
    features: [
      "Requirement Management",
      "Quotation Submission Workflow",
      "Vendor Comparison",
      "Procurement Dashboard",
      "Real-Time Status Tracking",
    ],
    technologies: ["Next.js", "TypeScript", "REST APIs", "Zod"],
    featured: true,
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
  },
  {
    id: "astin",
    title: "Astin – E-Commerce Mobile App",
    type: "Cross-platform Mobile Application",
    description:
      "Built a React Native e-commerce ecosystem consisting of dedicated applications for buyers and sellers. The platform enables product discovery, order management, inventory management, and seamless purchasing experiences.",
    features: [
      "Buyer Application",
      "Seller Application",
      "Product Management",
      "Order Tracking",
      "Authentication & Authorization",
    ],
    technologies: ["React Native", "Expo", "TypeScript", "REST APIs"],
    featured: true,
    gradient: "from-violet-500 via-purple-500 to-pink-500",
  },
  {
    id: "shopper-tshirt-ecommerce",
    title: "Shopper - T-Shirt E-Commerce Website",
    type: "Personal Project",
    description:
      "Designed and developed a complete e-commerce platform for custom t-shirt sales during academic studies, featuring product browsing, shopping cart functionality, and responsive design.",
    features: [
      "Product Catalog",
      "Shopping Cart",
      "Order Management",
      "Responsive Design",
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
  },
  {
    id: "lotus-hotel-booking",
    title: "Lotus Hotel Booking Website",
    type: "Personal Project",
    description:
      "Created a hotel booking platform enabling users to search hotels, view room availability, and make reservations through an intuitive booking experience.",
    features: [
      "Hotel Search",
      "Room Availability",
      "Reservation System",
      "User Authentication",
    ],
    technologies: ["React", "Node.js", "MongoDB"],
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  },
];

export const timelineItems: TimelineItem[] = [
  {
    id: "enterprise-dev",
    period: "2026 – Present",
    title: "Enterprise Application Development",
    subtitle: "Full Stack Developer",
    description:
      "Led frontend development of enterprise-grade platforms including CA management systems and asset tracking solutions. Delivered scalable architectures with Next.js, TypeScript, and GraphQL for large organizations.",
    tags: ["Next.js", "TypeScript", "GraphQL", "Enterprise"],
    icon: "🏢",
  },
  {
    id: "mobile-dev",
    period: "2026",
    title: "Mobile Application Development",
    subtitle: "React Native Developer",
    description:
      "Built the Astin cross-platform e-commerce mobile application with dedicated buyer and seller apps. Delivered seamless native experiences using React Native and Expo for both iOS and Android.",
    tags: ["React Native", "Expo", "TypeScript", "Mobile"],
    icon: "📱",
  },
  {
    id: "b2b-platform",
    period: "2025",
    title: "B2B Platform Development",
    subtitle: "Frontend Developer",
    description:
      "Developed the Quotbit RFQ management platform, a B2B procurement system that connects buyers and suppliers with advanced quotation workflows and vendor comparison tools.",
    tags: ["React", "Next.js", "B2B", "Procurement"],
    icon: "🤝",
  },
  {
    id: "frontend-engineering",
    period: "2024 – 2025",
    title: "Frontend Engineering",
    subtitle: "React Developer",
    description:
      "Focused on building highly interactive and performant web interfaces. Implemented complex UI components, data visualization dashboards, and optimized web performance across multiple projects.",
    tags: ["React", "Performance", "UI/UX", "Optimization"],
    icon: "⚡",
  },
  {
    id: "academic-projects",
    period: "2024 – 2025",
    title: "Academic Projects & Learning",
    subtitle: "Student Developer",
    description:
      "Built foundational projects including a T-Shirt E-Commerce platform and Hotel Booking system using the MERN stack. Developed strong problem-solving skills and software engineering fundamentals.",
    tags: ["MERN Stack", "MongoDB", "Express", "Learning"],
    icon: "🎓",
  },
];

export const achievements: Achievement[] = [
  {
    id: "projects",
    value: 6,
    suffix: "+",
    label: "Major Projects",
    description: "Enterprise, mobile & web applications delivered",
    icon: "🚀",
  },
  {
    id: "domains",
    value: 4,
    suffix: "+",
    label: "Domains Worked",
    description: "Enterprise, B2B, mobile commerce & more",
    icon: "🌐",
  },
  {
    id: "technologies",
    value: 20,
    suffix: "+",
    label: "Technologies",
    description: "Frontend, backend, mobile & cloud tools",
    icon: "⚙️",
  },
  {
    id: "stack",
    value: 3,
    suffix: "",
    label: "Full Stack Expertise",
    description: "Web, mobile & backend development",
    icon: "💻",
  },
];

export const expertiseAreas = [
  {
    title: "Enterprise Software Development",
    description: "Building scalable platforms for large organizations",
    icon: "🏗️",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform apps with React Native & Expo",
    icon: "📱",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Frontend Architecture",
    description: "Scalable component systems and design patterns",
    icon: "🎨",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "API Integration",
    description: "REST, GraphQL, and third-party service integrations",
    icon: "🔗",
    gradient: "from-violet-500 to-indigo-500",
  },
  {
    title: "Performance Optimization",
    description: "Lighthouse scores, bundle size, and core web vitals",
    icon: "⚡",
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    title: "UI/UX Focused Development",
    description: "User-centric design with pixel-perfect implementation",
    icon: "✨",
    gradient: "from-pink-500 to-rose-500",
  },
];
