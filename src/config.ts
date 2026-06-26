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
  tagline: "Full-Stack Developer building scalable web applications",
  description: "Portfolio Site of Mahendra, a FullStack Developer showcasing his projects and experiences",
  author: {
    name: "Mahendra S H",
    url: "https://mahendrash.vercel.app",
    email: "mahendrashongunti@gmail.com",
    phone: "+91-7892041114",
    github: "https://github.com/MahendraSH",
    linkedin: "https://linkedin.com/in/mahendra-s-h-14a74721a",
    upwork: "https://www.upwork.com/freelancers/~015e4bc8c81692a6f2",
    medium: "https://medium.com/@maahi2001sh",
    twitter: "https://x.com/mahendrashon"
  },
  socials: {
    github: "https://github.com/MahendraSH/",
    linkedin: "https://www.linkedin.com/in/mahendra-s-h-14a74721a/",
    upwork: "https://www.upwork.com/freelancers/~015e4bc8c81692a6f2",
    medium: "https://medium.com/@maahi2001sh",
    twitter: "https://x.com/mahendrashon"
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
      "Cargo Readiness (CMA-CGM Project): Architected and engineered a microservices backend using Java 21 and Spring Boot to handle event-driven container readiness assessment workflows.",
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
  logo?: string;
  themeColor?: string;
  themeGradient?: string;
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
    logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><!-- Infosys stylized Blue 'I' and 'f' --><path d="M4 6h3M5.5 6v12M4 18h3" stroke="#007cc3" stroke-width="2.2"></path><path d="M9 18V9a2 2 0 0 1 2-2h1M9 12h3" stroke="#007cc3" stroke-width="2"></path><!-- Code icon </> on the right --><path d="M14 14.5l-2-2.5 2-2.5M18 9.5l2 2.5-2 2.5" stroke="currentColor" stroke-width="1.8"></path><line x1="16.5" y1="8.5" x2="15.5" y2="15.5" stroke="currentColor" stroke-width="1.8"></line></svg>`,
    themeColor: "text-blue-400 border-blue-500/20 bg-blue-500/10",
    themeGradient: "from-zinc-900 via-blue-950/40 to-zinc-950"
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
    logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
    themeColor: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
    themeGradient: "from-zinc-900 via-emerald-950/40 to-zinc-950"
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
    liveUrl: "https://tools-table-gen.vercel.app/",
    category: "Community Tool",
    logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M3 3h18v18H3z"></path><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>`,
    themeColor: "text-indigo-400 border-indigo-500/20 bg-indigo-500/10",
    themeGradient: "from-zinc-900 via-indigo-950/40 to-zinc-950"
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
    liveUrl: "https://tools-form-gen.vercel.app/",
    category: "Community Tool",
    logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="9"></line><line x1="9" y1="13" x2="15" y2="13"></line><line x1="9" y1="17" x2="13" y2="17"></line></svg>`,
    themeColor: "text-violet-400 border-violet-500/20 bg-violet-500/10",
    themeGradient: "from-zinc-900 via-violet-950/40 to-zinc-950"
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
    logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M20.38 3.46L16 6.14V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3.14L3.62 3.46a1 1 0 0 0-1.4 1.25l4 9.17A1 1 0 0 0 7.14 14H8v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h.86a1 1 0 0 0 .92-.58l4-9.17a1 1 0 0 0-1.4-1.25z"></path></svg>`,
    themeColor: "text-rose-400 border-rose-500/20 bg-rose-500/10",
    themeGradient: "from-zinc-900 via-rose-950/40 to-zinc-950"
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
    logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
    themeColor: "text-teal-400 border-teal-500/20 bg-teal-500/10",
    themeGradient: "from-zinc-900 via-teal-950/40 to-zinc-950"
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
    logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 6v12"></path><path d="M8 10h8"></path><path d="M8 14h8"></path></svg>`,
    themeColor: "text-cyan-400 border-cyan-500/20 bg-cyan-500/10",
    themeGradient: "from-zinc-900 via-cyan-950/40 to-zinc-950"
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
    category: "Personal Project",
    logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
    themeColor: "text-amber-400 border-amber-500/20 bg-amber-500/10",
    themeGradient: "from-zinc-900 via-amber-950/40 to-zinc-950"
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
    category: "Personal Project",
    logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path><path d="M12 6V12L16 14"></path></svg>`,
    themeColor: "text-pink-400 border-pink-500/20 bg-pink-500/10",
    themeGradient: "from-zinc-900 via-pink-950/40 to-zinc-950"
  },
  {
    id: 10,
    name: "logoname",
    description: "Designed and built a developer-first, constraint-based vector brand identity generator that restricts styling options to guarantee perfectly proportioned, accessible layouts.",
    bullets: [
      "Restricts brand design choices via constraint-based vector layouts (Horizontal, Vertical, Icon-Only) to guarantee visual accessibility and proportion.",
      "Features real-time parameter tweaking including customizable grid overlays, typography styling, color vibes (Tech, Pro, Play), and element gaps.",
      "Includes 1-click loading of premium design presets (Zenith AI, NovaPay, HexaCrypt) with resolution-independent SVG vector file downloads."
    ],
    labels: ["Astro", "Tailwind CSS", "TypeScript", "SVG Engine", "Branding Customizer", "Client-Side Processing", "Vercel"],
    duration: "14 Days",
    liveUrl: "https://tools-logoname.vercel.app/",
    category: "Tools",
    logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>`,
    themeColor: "text-amber-400 border-amber-500/20 bg-amber-500/10",
    themeGradient: "from-zinc-900 via-amber-950/40 to-zinc-950"
  },
  {
    id: 11,
    name: "Json-a",
    description: "Developed a high-performance, developer-first JSON workspace to format, tree-parse, filter, diff, query, plot, and compile JSON structures 100% locally in the browser.",
    bullets: [
      "Features an interactive collapsible node tree view and path finder to extract full dotted or bracket coordinates instantly.",
      "Compiles JSON schemas into 11 programming language targets, including TypeScript interfaces, Go/Rust tags, Java POJOs, and Python classes.",
      "Provides a client-side jq and JSONPath query sandbox for inline filtering, transforming, and querying complex nested JSON arrays.",
      "Integrates side-by-side visual diff comparison, an SVG data chart plotter, and BOM-optimized spreadsheet exports to Microsoft Excel."
    ],
    labels: ["Astro", "Tailwind CSS", "TypeScript", "jq Engine", "JSONPath", "Data Plotter", "Excel Export", "Vercel"],
    duration: "20 Days",
    liveUrl: "https://tools-json-all.vercel.app/",
    category: "Tools",
    logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" x2="20" y1="19" y2="19"></line></svg>`,
    themeColor: "text-blue-400 border-blue-500/20 bg-blue-500/10",
    themeGradient: "from-zinc-900 via-blue-950/45 to-zinc-950"
  },
  {
    id: 12,
    name: "MD-a",
    description: "Built a local-first, high-performance Markdown editing, converting, and diagramming studio running entirely client-side for maximum writing privacy.",
    bullets: [
      "Split-pane layout featuring sync-scrolling, gutter line index numbers, formatting shortcut bar, and live compiled HTML5 preview.",
      "Integrates Mermaid.js diagramming to dynamically compile and render text-based charts, mindmaps, and flowcharts directly to SVGs.",
      "Built-in wizards including a drag-and-drop table grid generator, YAML frontmatter builder, and link/asset health checker.",
      "Features an automated HTML/rich-text to Markdown converter with exports to LaTeX, standalone HTML, clean plain text, and print-ready PDF."
    ],
    labels: ["Astro", "Tailwind CSS", "TypeScript", "Mermaid.js", "Markdown Compiler", "LaTeX Exporter", "Local-First / PWA", "Vercel"],
    duration: "25 Days",
    liveUrl: "https://tools-md-a.vercel.app/",
    category: "Tools",
    logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>`,
    themeColor: "text-purple-400 border-purple-500/20 bg-purple-500/10",
    themeGradient: "from-zinc-900 via-purple-950/40 to-zinc-950"
  },
  {
    id: 13,
    name: "pg-spring-db",
    description: "Created an interactive visual ERD database designer, schema linter, and full-stack Spring Boot CRUD REST API scaffolding engine.",
    bullets: [
      "Enables developers to visually design PostgreSQL database tables, configure keys, check constraints, and link relations on an interactive canvas.",
      "Features a schema linter that scores design health and flags naming convention violations, circular references, or missing indices.",
      "Instantly generates a complete, downloadable Spring Boot application zip containing JPA entities, MapStruct DTOs, JPA repositories, and CRUD controllers.",
      "Supports direct SQL DDL script imports to visually render existing schemas, along with automatic generation of Flyway and Liquibase migrations."
    ],
    labels: ["Astro", "Tailwind CSS", "TypeScript", "PostgreSQL", "Spring Boot", "JPA / Hibernate", "ERD Designer", "Linter", "Vercel"],
    duration: "30 Days",
    liveUrl: "https://desgin-db-to-crud.vercel.app/",
    category: "Tools",
    logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path></svg>`,
    themeColor: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
    themeGradient: "from-zinc-900 via-emerald-950/40 to-zinc-950"
  },
].sort((a, b) => a.id - b.id);
