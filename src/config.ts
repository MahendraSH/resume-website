export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  tabLink?: string;
}

export interface AppConfig {
  name: string;
  domain: string;
  tagline: string;
  description: string;
  author: {
    name: string;
    url: string;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    upwork: string;
  };
  socials: {
    github: string;
    linkedin: string;
    upwork: string;
  };
}

export const APP_CONFIG: AppConfig = {
  name: "Mahendra S H",
  domain: "https://mahendrash.vercel.app",
  tagline: "Specialist Programmer building scalable full-stack web applications",
  description: "Portfolio Site of Mahendra, a FullStack Developer showcasing his projects and experiences",
  author: {
    name: "Mahendra S H",
    url: "https://mahendrash.vercel.app",
    email: "mahendrashongunti@gmail.com",
    phone: "+91-7892041114",
    github: "https://github.com/MahendraSH",
    linkedin: "https://linkedin.com/in/mahendra-s-h-14a74721a",
    upwork: "https://www.upwork.com/freelancers/~015e4bc8c81692a6f2"
  },
  socials: {
    github: "https://github.com/MahendraSH/",
    linkedin: "https://www.linkedin.com/in/mahendra-s-h-14a74721a/",
    upwork: "https://www.upwork.com/freelancers/~015e4bc8c81692a6f2"
  }
};

export const SKILL_CATEGORIES = [
  {
    category: "Languages",
    skills: ["Java", "JavaScript", "TypeScript", "SQL", "HTML/CSS"]
  },
  {
    category: "Frameworks & Libs",
    skills: ["React.js", "Next.js", "Spring Boot", "Spring Batch", "Astro", "Express.js", "Tailwind CSS", "Shadcn UI"]
  },
  {
    category: "Enterprise Platforms",
    skills: ["ServiceNow", "ServiceNow SDK", "GlideRecord", "Business Rules", "Client Scripts", "Script Includes", "Workflows"]
  },
  {
    category: "Databases & ORM",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Prisma"]
  },
  {
    category: "Tools & DevOps",
    skills: ["AWS SQS", "Camunda BPM", "Git", "GitHub", "RESTful APIs", "JWT", "Cloudinary"]
  }
];

export const EXPERIENCES = [
  {
    role: "Specialist Programmer",
    company: "Infosys",
    duration: "Jul 2024 – Jun 2026",
    bullets: [
      "Cargo Readiness (CMA-CGM Project): Architected and engineered a microservices backend using Java 21 and Spring Boot event-driven container readiness assessment workflows.",
      "Integrated AWS SQS queues and Camunda BPM for event-driven orchestration, reducing manual verification overhead by 35%.",
      "Employed Spring Batch to automate high-throughput end-date verification and backend checks, processing 50k+ active bookings daily.",
      "Developed a responsive React frontend dashboard utilizing React Query and React Table, improving officer decision-making efficiency.",
      "Optimized database queries in PostgreSQL to reduce API response times by 20% and enhance overall system throughput.",
      "Participated in regular code reviews, promoting clean code standards and Git best practices across the development team."
    ]
  },
  {
    role: "Software Engineering Intern",
    company: "Merav Infotech",
    duration: "Feb 2024 – May 2024",
    bullets: [
      "Spearheaded frontend feature development and designed reusable UI components using React.js and modern JavaScript (ES6+).",
      "Collaborated with senior engineers to integrate RESTful API endpoints, reducing initial page load times by 15% via lazy loading and code-splitting.",
      "Participated in Agile sprint planning and daily standups to ensure timely delivery of software features."
    ]
  }
];

export const EDUCATION = {
  degree: "B.Tech in Computer Science & Engineering",
  school: "National Institute of Engineering (NIE)",
  location: "Mysore, India",
  duration: "Graduated: May 2024",
  grade: "7.3 / 10 CGPA",
  coursework: "Data Structures, Database Systems, Software Engineering"
};

export interface Project {
  id: number;
  name: string;
  description: string;
  bullets?: string[];
  image?: string[];
  imagedark?: string[];
  labels: string[];
  duration: string;
  sourceCode?: string;
  liveUrl?: string;
  userName?: string;
  password?: string;
  category: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Cargo Readiness",
    description: "Developed a robust dashboard for CMA-CGM to assess cargo container readiness for each booking, enabling swift decision-making by officers.",
    bullets: [
      "Implemented a notification system for booking officers to communicate missing information to stakeholders, enhancing operational efficiency.",
      "Integrated diverse data sources from the client, organizing and presenting it through an intuitive dashboard interface.",
      "Utilized AWS SQS queues, event-driven architecture, and Camunda for seamless automation of operational workflows.",
      "Architected a microservices backend using Java 21 and Spring Boot, ensuring scalability and maintainability.",
      "Employed Spring Batch for automated end date checks and other critical processes, streamlining the project workflow.",
      "Designed a responsive frontend with React, utilizing TailwindCSS, React Query, and React Table for optimal user experience."
    ],
    labels: ["Java", "Spring Boot", "Microservices", "React.js", "Tailwind CSS", "AWS SQS", "Camunda", "Spring Batch", "PostgreSQL"],
    duration: "657 Days",
    category: "Enterprise Application",
  },
  {
    id: 2,
    name: "Access Management System (ServiceNow)",
    description: "Engineered a secure Access Management custom application in ServiceNow using a pro-code approach with the ServiceNow SDK and TypeScript.",
    bullets: [
      "Configured custom ServiceNow tables and programmed GlideRecord-based Business Rules, Client Scripts, and Script Includes to automate validations.",
      "Orchestrated approval workflows with auto-provisioning logic and group routing, reducing access grant overhead by 40%."
    ],
    labels: ["ServiceNow SDK", "TypeScript", "GlideRecord", "Workflows", "Automation"],
    duration: "45 Days",
    category: "Personal Project",
  },
  {
    id: 3,
    name: "Shadcn UI Table Generator",
    description: "Built an open-source community tool that scaffolds fully-typed TanStack Table columns and Shadcn UI components from JSON, REST endpoints, and OpenAPI/Swagger specs.",
    bullets: [
      "Designed an intuitive schema builder that infers data types automatically from JSON payloads.",
      "Generates production-ready, typed column definitions conforming to TanStack Table v8 specifications.",
      "Supports advanced features like sortable, filterable, and custom status badge mapping.",
      "Integrated support for Tailwind CSS v4 and React 19 / Next.js configurations."
    ],
    labels: ["Astro", "React.js", "TypeScript", "TanStack Table v8", "Shadcn UI", "Swagger / OpenAPI"],
    duration: "14 Days",
    liveUrl: "https://table-gen-three.vercel.app/",
    category: "Community Tool",
  },
  {
    id: 4,
    name: "Shadcn UI Form Generator",
    description: "Built an open-source community tool that scaffolds fully-typed React Hook Forms and Shadcn UI components from JSON, REST URLs, and OpenAPI/Swagger specs.",
    bullets: [
      "Designed an interactive form builder that automatically infers types and validations from JSON payloads.",
      "Generates production-ready, typed React Hook Form components styled with Shadcn UI and validated using Zod.",
      "Supports automated API Ingestion, swagger schema parsing, and prebuilt presets.",
      "Fully compatible with Tailwind CSS v4 and React 19 / Next.js configurations."
    ],
    labels: ["Astro", "React.js", "TypeScript", "Tailwind CSS", "React Hook Form", "Zod", "Shadcn UI", "Swagger / OpenAPI"],
    duration: "14 Days",
    liveUrl: "https://form-gen-sable.vercel.app/",
    category: "Community Tool",
  },
  {
    id: 5,
    name: "ProjectX (Shirt-AI)",
    description: "Developed the frontend template for an interactive 3D shirt customization and AI-powered custom apparel design platform.",
    bullets: [
      "Created interactive frontend 3D shirt customization previews utilizing Three.js and React Three Fiber.",
      "Built frontend integrations for AI design generation APIs (Stable Diffusion / OpenAI) for real-time design placement on canvas textures.",
      "Implemented client-side drag-and-drop customization and texture mapping for an optimal user experience.",
      "Optimized frontend WebGL rendering loops and asset loading for fluid performance across mobile and desktop devices."
    ],
    labels: ["React.js", "Vite", "Three.js", "React Three Fiber", "Tailwind CSS", "AI Integration", "Vercel"],
    duration: "30 Days",
    liveUrl: "https://projectx-dev.vercel.app/",
    category: "Freelance Client Project",
  },
  {
    id: 6,
    name: "SpendOptima",
    description: "Developed a premium frontend template for a personal finance tracking and expense optimization dashboard.",
    bullets: [
      "Designed and implemented responsive frontend dashboards using Next.js and Tailwind CSS with modern charts and budget insights.",
      "Created interactive client-side financial statistics and visualizations using Recharts.",
      "Structured clean, modular frontend templates optimized for fast loading times and SEO.",
      "Configured client-side responsive dark mode and custom HSL color palettes for premium UI/UX aesthetics."
    ],
    labels: ["Next.js", "React.js", "Tailwind CSS", "Recharts", "TypeScript", "Vercel"],
    duration: "45 Days",
    liveUrl: "https://spend-optima-60tidsx8y-mahendrashs-projects.vercel.app/",
    category: "Freelance Client Project",
  },
  {
    id: 7,
    name: "SaaS Form Builder Platform",
    description: "Built a full-stack, no-code SaaS form builder allowing users to create and customize dynamic forms via an intuitive drag-and-drop interface.",
    bullets: [
      "Created a lightweight embeddable script integration package enabling external websites to embed and render forms dynamically.",
      "Constructed secure REST APIs for form creation, submission tracking, and analytics tracking for 20+ client sites."
    ],
    labels: ["Next.js", "React.js", "Node.js", "Express.js", "PostgreSQL", "RESTful API"],
    duration: "59 Days",
    category: "Freelance Client Project",
  },
  {
    id: 8,
    name: "E-Commerce Platform (E-Store)",
    description: "Built an e-commerce platform with admin capabilities for managing products and orders.",
    bullets: [
      "Designed APIs to support integration with external services and custom storefronts."
    ],
    labels: ["Next.js", "Tailwind CSS", "shadcn/ui", "Prisma", "MySQL"],
    duration: "334 Days",
    sourceCode: "https://github.com/MahendraSH/estore",
    liveUrl: "https://estore-ms.vercel.app/",
    userName: "estore_123",
    password: "estore_123",
    image: [
      "/projects/p-3/e-store.png",
      "/projects/p-3/estore-bill.png",
      "/projects/p-3/estore-cat.png",
      "/projects/p-3/estore-create.png",
      "/projects/p-3/estore-api.png",
    ],
    imagedark: [
      "/projects/p-3/e-store-dark.png",
      "/projects/p-3/estore-bill-dark.png",
      "/projects/p-3/estore-cat-dark.png",
      "/projects/p-3/estore-create-dark.png",
      "/projects/p-3/estore-api-dark.png",
    ],
    category: "Personal Project",
  },
  {
    id: 9,
    name: "MERN Gallery & Blog Platform",
    description: "Developed a full-stack application with authentication, image uploads, and blog features.",
    bullets: [
      "Built a full-stack blogging and media platform with secure JWT user authentication and role-based access control.",
      "Connected Cloudinary API for high-performance image uploads and storage optimization, handling 5,000+ monthly active readers."
    ],
    labels: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux", "JWT", "Cloudinary"],
    duration: "334 Days",
    sourceCode: "https://github.com/MahendraSH/mern-arl-gal",
    liveUrl: "https://art-gal.vercel.app/",
    userName: "demoadmin@gmail.com",
    password: "demoadmin@gmail.com",
    image: [
      "/projects/p-2/art-gal.png",
      "/projects/p-2/art-gal-gellary.png",
      "/projects/p-2/art-gal-create.png",
      "/projects/p-2/art-gal-users.png",
    ],
    category: "Personal Project",
  },
  {
    id: 10,
    name: "Tools - Logo Name Generator",
    description: "A handy tool to generate logo-style name cards and branding assets instantly.",
    labels: ["Astro", "Tailwind CSS", "TypeScript", "Vercel"],
    duration: "",
    liveUrl: "https://tools-logoname.vercel.app/",
    category: "Tools",
  },
  {
    id: 11,
    name: "Tools - JSON All",
    description: "A comprehensive JSON utility tool for formatting, validating, and transforming JSON data.",
    labels: ["Astro", "Tailwind CSS", "TypeScript", "Vercel"],
    duration: "",
    liveUrl: "https://tools-json-all.vercel.app/",
    category: "Tools",
  },
  {
    id: 12,
    name: "Tools - MD-a (Markdown Editor)",
    description: "A local-first, high-performance Markdown editing, converting, and diagramming studio.",
    labels: ["Astro", "Tailwind CSS", "TypeScript", "Vercel"],
    duration: "",
    liveUrl: "https://tools-md-a.vercel.app/",
    category: "Tools",
  },
  {
    id: 13,
    name: "Tools - pg-spring-db (DB to CRUD)",
    description: "Design PostgreSQL database schemas visually, analyze with a schema linter, and instantly generate full-stack Spring Boot REST API code.",
    labels: ["Astro", "Tailwind CSS", "TypeScript", "PostgreSQL", "Spring Boot", "Vercel"],
    duration: "",
    liveUrl: "https://desgin-db-to-crud.vercel.app/",
    category: "Tools",
  },
].sort((a, b) => a.id - b.id);
