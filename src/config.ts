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
    location: string;
    github: string;
    linkedin: string;
    upwork: string;
    medium?: string;
    twitter?: string;
  };
  socials: {
    github: string;
    linkedin: string;
    upwork: string;
    medium?: string;
    twitter?: string;
  };
}

export const APP_CONFIG: AppConfig = {
  name: "Mahendra S H",
  domain: "https://mahendrash.vercel.app",
  tagline: "Java Cloud Full-Stack Engineer (Specialist Programmer) specializing in Java 21, Spring Boot, React, and AWS",
  description: "Portfolio and Resume site of Mahendra S H, a Java Cloud Full-Stack Engineer architecting high-throughput event-driven microservices and responsive SaaS applications using Java 21, Spring Boot, React, and AWS.",
  author: {
    name: "Mahendra S H",
    url: "https://mahendrash.vercel.app",
    email: "mahendrashongunti@gmail.com",
    phone: "+91-7892041114",
    location: "Hyderabad, India",
    github: "https://github.com/MahendraSH",
    linkedin: "https://www.linkedin.com/in/mahendra-s-h-14a74721a/",
    upwork: "https://www.upwork.com/freelancers/~015e4bc8c81692a6f2",
    medium: "https://medium.com/@maahi2001sh",
    twitter: "https://x.com/mahendrashon"
  },
  socials: {
    github: "https://github.com/MahendraSH",
    linkedin: "https://www.linkedin.com/in/mahendra-s-h-14a74721a/",
    upwork: "https://www.upwork.com/freelancers/~015e4bc8c81692a6f2",
    medium: "https://medium.com/@maahi2001sh",
    twitter: "https://x.com/mahendrashon"
  }
};

export const SKILL_CATEGORIES = [
  {
    category: "Languages & Specs",
    skills: ["Java (21)", "JavaScript (ES6+)", "TypeScript", "SQL", "OpenAPI", "RESTful APIs", "HTML5/CSS3"]
  },
  {
    category: "Backend & Cloud",
    skills: ["Spring Boot", "Microservices Architecture", "Spring Batch", "AWS (EC2, S3, SQS)", "API Management", "Camunda BPM"]
  },
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Shadcn UI", "TanStack Table v8", "Redux", "React Query"]
  },
  {
    category: "Databases & ORM",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM"]
  },
  {
    category: "DevOps, QA & Tools",
    skills: ["Docker", "CI/CD Pipelines", "Test Automation (JUnit, Mockito)", "Root Cause Analysis (RCA)", "Git", "GitHub", "Agile/Scrum"]
  }
];

export const EXPERIENCES = [
  {
    role: "Specialist Programmer",
    company: "Infosys",
    location: "Hyderabad, India (Hybrid)",
    duration: "Jul 2024 – Jun 2026",
    bullets: [
      "Cargo Readiness (CMA-CGM Project): Architected and engineered a microservices backend using Java 21, Spring Boot, and RESTful APIs (OpenAPI) for event-driven container readiness assessment workflows.",
      "Integrated AWS SQS queues, AWS S3, and Camunda BPM for event-driven queue orchestration, reducing manual verification overhead by 35%.",
      "Employed Spring Batch to automate high-throughput end-date verification and backend checks, processing 50k+ active bookings daily.",
      "Developed a responsive React frontend dashboard utilizing React Query and TanStack Table, improving officer decision-making efficiency.",
      "Optimized database queries in PostgreSQL (SQL) to reduce REST API response times by 20% and enhance overall system throughput.",
      "Developed automated unit/integration test suites with JUnit & Mockito; performed code reviews and Root Cause Analysis (RCA) adhering to CI/CD quality gates and Docker deployments."
    ]
  },
  {
    role: "Software Engineering Intern",
    company: "Merav Infotech",
    location: "Mysore, India (Remote)",
    duration: "Feb 2024 – May 2024",
    bullets: [
      "Spearheaded frontend feature development and designed reusable UI components using React.js and modern JavaScript (ES6+).",
      "Collaborated with senior engineers to integrate RESTful APIs, reducing initial page load times by 15% via lazy loading and code-splitting.",
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
  logo?: string;
  themeColor?: string;
  themeGradient?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Cargo Readiness",
    description: "Architected and engineered an event-driven container readiness assessment microservices backend and dashboard for CMA-CGM global logistics operations.",
    bullets: [
      "Architected and engineered a microservices backend using Java 21, Spring Boot, and RESTful APIs (OpenAPI) for event-driven container readiness assessment workflows.",
      "Integrated AWS SQS queues, AWS S3, and Camunda BPM for event-driven queue orchestration, reducing manual verification overhead by 35%.",
      "Employed Spring Batch to automate high-throughput end-date verification and backend checks, processing 50k+ active bookings daily.",
      "Developed a responsive React frontend dashboard utilizing React Query and TanStack Table, improving officer decision-making efficiency.",
      "Optimized database queries in PostgreSQL (SQL) to reduce REST API response times by 20% and enhance overall system throughput."
    ],
    labels: ["Java 21", "Spring Boot", "Microservices", "AWS SQS", "AWS S3", "Camunda BPM", "Spring Batch", "PostgreSQL", "React", "TanStack Table"],
    duration: "Jul 2024 – Jun 2026",
    category: "Enterprise Application",
    logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><!-- Infosys stylized Blue 'I' and 'f' --><path d="M4 6h3M5.5 6v12M4 18h3" stroke="#007cc3" stroke-width="2.2"></path><path d="M9 18V9a2 2 0 0 1 2-2h1M9 12h3" stroke="#007cc3" stroke-width="2"></path><!-- Code icon </> on the right --><path d="M14 14.5l-2-2.5 2-2.5M18 9.5l2 2.5-2 2.5" stroke="currentColor" stroke-width="1.8"></path><line x1="16.5" y1="8.5" x2="15.5" y2="15.5" stroke="currentColor" stroke-width="1.8"></line></svg>`,
    themeColor: "text-blue-400 border-blue-500/20 bg-blue-500/10",
    themeGradient: "from-zinc-900 via-blue-950/40 to-zinc-950"
  },
  {
    id: 2,
    name: "E-Commerce Platform (E-Store)",
    description: "Full-stack e-commerce solution with admin capabilities for managing products, catalog categorization, and processing customer orders.",
    bullets: [
      "Built a full-stack e-commerce solution with admin capabilities for managing products, catalog categorization, and processing customer orders.",
      "Designed scalable REST APIs for custom storefronts; deployed on Vercel with AWS S3 for product asset and media management.",
      "Configured database schemas using Prisma ORM with MySQL to ensure query scalability and high transaction reliability."
    ],
    labels: ["Next.js", "React", "Tailwind CSS", "Shadcn UI", "Prisma ORM", "MySQL", "AWS S3", "Vercel"],
    duration: "Personal Project",
    sourceCode: "https://github.com/MahendraSH/estore",
    liveUrl: "https://estore-ms.vercel.app/",
    userName: "estore_123",
    password: "estore_123",
    category: "Personal Project",
    logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
    themeColor: "text-amber-400 border-amber-500/20 bg-amber-500/10",
    themeGradient: "from-zinc-900 via-amber-950/40 to-zinc-950"
  },
  {
    id: 3,
    name: "SpendOptima",
    description: "Premium personal finance tracking and expense optimization dashboard featuring clean budget analytics.",
    bullets: [
      "Built a premium personal finance tracking and expense optimization dashboard featuring clean budget analytics.",
      "Designed responsive client dashboards with interactive statistics using Recharts, allowing users to analyze spending habits.",
      "Structured modular frontend templates optimized for fast loading times and robust SEO search visibility."
    ],
    labels: ["Next.js", "React", "Tailwind CSS", "Recharts", "TypeScript", "Vercel"],
    duration: "Freelance Project",
    liveUrl: "https://spend-optima-60tidsx8y-mahendrashs-projects.vercel.app/",
    category: "Freelance Client Project",
    logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
    themeColor: "text-teal-400 border-teal-500/20 bg-teal-500/10",
    themeGradient: "from-zinc-900 via-teal-950/40 to-zinc-950"
  },
  {
    id: 4,
    name: "SaaS Form Builder Platform",
    description: "Full-stack, no-code SaaS form builder allowing users to create and customize dynamic forms via an intuitive drag-and-drop interface.",
    bullets: [
      "Built a full-stack, no-code SaaS form builder allowing users to create and customize dynamic forms via an intuitive drag-and-drop interface.",
      "Created a lightweight embeddable script package enabling external websites to embed and render forms dynamically.",
      "Constructed secure REST APIs for form creation and analytics tracking across 20+ client sites, deployed on Vercel/AWS."
    ],
    labels: ["Next.js", "React", "Node.js", "Express", "PostgreSQL", "AWS", "RESTful API"],
    duration: "Freelance Project",
    category: "Freelance Client Project",
    logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 6v12"></path><path d="M8 10h8"></path><path d="M8 14h8"></path></svg>`,
    themeColor: "text-cyan-400 border-cyan-500/20 bg-cyan-500/10",
    themeGradient: "from-zinc-900 via-cyan-950/40 to-zinc-950"
  },
  {
    id: 5,
    name: "Shadcn UI Form & Table Generators (Open-Source)",
    description: "Published open-source developer tools that scaffold fully-typed Shadcn UI form schemas and TanStack Table v8 components from JSON/OpenAPI specs.",
    bullets: [
      "Published open-source developer tools that scaffold fully-typed Shadcn UI form schemas and TanStack Table v8 components from JSON/OpenAPI specs.",
      "Designed intuitive schema generator engines that automatically infer TypeScript types, reducing boilerplate UI code setup time by 80% for developers.",
      "Generates production-ready React Hook Form and TanStack Table v8 code with Zod validation schemas."
    ],
    labels: ["Astro", "React", "TypeScript", "TanStack Table v8", "Shadcn UI", "Zod", "OpenAPI"],
    duration: "Open-Source Community Tool",
    liveUrl: "https://tools-table-gen.vercel.app/",
    category: "Community Tool",
    logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="9"></line><line x1="9" y1="13" x2="15" y2="13"></line><line x1="9" y1="17" x2="13" y2="17"></line></svg>`,
    themeColor: "text-indigo-400 border-indigo-500/20 bg-indigo-500/10",
    themeGradient: "from-zinc-900 via-indigo-950/40 to-zinc-950"
  },
  {
    id: 6,
    name: "Access Management System (ServiceNow)",
    description: "Engineered a secure Access Management custom application in ServiceNow using a pro-code approach with the ServiceNow SDK and TypeScript.",
    bullets: [
      "Configured custom ServiceNow tables and programmed GlideRecord-based Business Rules, Client Scripts, and Script Includes to automate validations.",
      "Orchestrated approval workflows with auto-provisioning logic and group routing, reducing access grant overhead by 40%."
    ],
    labels: ["ServiceNow SDK", "TypeScript", "GlideRecord", "Workflows", "Automation"],
    duration: "Personal Project",
    category: "Personal Project",
    logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
    themeColor: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
    themeGradient: "from-zinc-900 via-emerald-950/40 to-zinc-950"
  },
  {
    id: 7,
    name: "ProjectX (Shirt-AI)",
    description: "Developed the frontend template for an interactive 3D shirt customization and AI-powered custom apparel design platform.",
    bullets: [
      "Created interactive frontend 3D shirt customization previews utilizing Three.js and React Three Fiber.",
      "Built frontend integrations for AI design generation APIs (Stable Diffusion / OpenAI) for real-time design placement on canvas textures.",
      "Implemented client-side drag-and-drop customization and texture mapping for an optimal user experience."
    ],
    labels: ["React.js", "Vite", "Three.js", "React Three Fiber", "Tailwind CSS", "AI Integration", "Vercel"],
    duration: "Freelance Project",
    liveUrl: "https://projectx-dev.vercel.app/",
    category: "Freelance Client Project",
    logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M20.38 3.46L16 6.14V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3.14L3.62 3.46a1 1 0 0 0-1.4 1.25l4 9.17A1 1 0 0 0 7.14 14H8v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h.86a1 1 0 0 0 .92-.58l4-9.17a1 1 0 0 0-1.4-1.25z"></path></svg>`,
    themeColor: "text-rose-400 border-rose-500/20 bg-rose-500/10",
    themeGradient: "from-zinc-900 via-rose-950/40 to-zinc-950"
  },
  {
    id: 8,
    name: "MERN Gallery & Blog Platform",
    description: "Developed a full-stack application with authentication, image uploads, and blog features.",
    bullets: [
      "Built a full-stack blogging and media platform with secure JWT user authentication and role-based access control.",
      "Connected Cloudinary API for high-performance image uploads and storage optimization, handling 5,000+ monthly active readers."
    ],
    labels: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux", "JWT", "Cloudinary"],
    duration: "Personal Project",
    sourceCode: "https://github.com/MahendraSH/mern-arl-gal",
    liveUrl: "https://art-gal.vercel.app/",
    userName: "demoadmin@gmail.com",
    password: "demoadmin@gmail.com",
    category: "Personal Project",
    logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path><path d="M12 6V12L16 14"></path></svg>`,
    themeColor: "text-pink-400 border-pink-500/20 bg-pink-500/10",
    themeGradient: "from-zinc-900 via-pink-950/40 to-zinc-950"
  },
  {
    id: 9,
    name: "logoname",
    description: "Client-side vector logo generator with style bounds, icon libraries, and SVG exports.",
    bullets: [
      "Restricts brand design choices via constraint-based vector layouts (Horizontal, Vertical, Icon-Only) to guarantee visual accessibility and proportion.",
      "Features custom backgrounds, searchable icon library (150K+ SVGs), and URL sharing with 1-click SVG downloads."
    ],
    labels: ["Astro", "Tailwind CSS", "TypeScript", "SVG Engine", "Vercel"],
    duration: "Developer Tool",
    liveUrl: "https://tools-logoname.vercel.app/",
    category: "Tools",
    logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>`,
    themeColor: "text-amber-400 border-amber-500/20 bg-amber-500/10",
    themeGradient: "from-zinc-900 via-amber-950/40 to-zinc-950"
  },
  {
    id: 10,
    name: "json-all",
    description: "Client-side panel to format, query with jq/JSONPath, search paths, and convert JSON to C++, Rust, TS, Java, YAML, Excel, and OpenAPI.",
    bullets: [
      "Compiles JSON schemas into 11 programming language targets, including TypeScript interfaces, Go/Rust tags, Java POJOs, and Python classes.",
      "Provides client-side jq and JSONPath query sandbox with side-by-side visual diff comparison and Excel export."
    ],
    labels: ["Astro", "Tailwind CSS", "TypeScript", "jq Engine", "JSONPath", "Vercel"],
    duration: "Developer Tool",
    liveUrl: "https://tools-json-all.vercel.app/",
    category: "Tools",
    logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" x2="20" y1="19" y2="19"></line></svg>`,
    themeColor: "text-blue-400 border-blue-500/20 bg-blue-500/10",
    themeGradient: "from-zinc-900 via-blue-950/45 to-zinc-950"
  },
  {
    id: 11,
    name: "md-a",
    description: "Split-screen live Markdown preview parser supporting Mermaid diagrams, MathJax syntax, and PDF/HTML exports.",
    bullets: [
      "Split-pane layout featuring sync-scrolling and live compiled HTML5 preview with Mermaid.js diagramming.",
      "Automated HTML/rich-text to Markdown converter with exports to LaTeX, standalone HTML, clean plain text, and print-ready PDF."
    ],
    labels: ["Astro", "Tailwind CSS", "TypeScript", "Mermaid.js", "Markdown Compiler"],
    duration: "Developer Tool",
    category: "Tools",
    logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>`,
    themeColor: "text-purple-400 border-purple-500/20 bg-purple-500/10",
    themeGradient: "from-zinc-900 via-purple-950/40 to-zinc-950"
  },
  {
    id: 12,
    name: "design-db-to-crud",
    description: "Visual PostgreSQL schema designer with ERD Canvas, linting health checks, and Spring Boot JPA / CRUD generation.",
    bullets: [
      "Visually design PostgreSQL database tables, configure keys, check constraints, and link relations on an interactive ERD canvas.",
      "Instantly generates a complete, downloadable Spring Boot application zip containing JPA entities, MapStruct DTOs, JPA repositories, and CRUD controllers."
    ],
    labels: ["Astro", "TypeScript", "PostgreSQL", "Spring Boot", "JPA / Hibernate", "ERD Designer", "Vercel"],
    duration: "Developer Tool",
    liveUrl: "https://desgin-db-to-crud.vercel.app/",
    category: "Tools",
    logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path></svg>`,
    themeColor: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
    themeGradient: "from-zinc-900 via-emerald-950/40 to-zinc-950"
  }
].sort((a, b) => a.id - b.id);

