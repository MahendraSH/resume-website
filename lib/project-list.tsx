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

export const projects: Project[] = [
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
    name: "Shadcn UI Table Generator",
    description: "Built an open-source community tool that scaffolds fully-typed TanStack Table columns and Shadcn UI components from JSON, REST endpoints, and OpenAPI/Swagger specs.",
    bullets: [
      "Designed an intuitive schema builder that infers data types automatically from JSON payloads.",
      "Generates production-ready, typed column definitions conforming to TanStack Table v8 specifications.",
      "Supports advanced features like sortable, filterable, and custom status badge mapping.",
      "Integrated support for Tailwind CSS v4 and React 19 / Next.js configurations."
    ],
    labels: ["Astro", "React.js", "TypeScript", "Tailwind CSS", "TanStack Table v8", "Shadcn UI", "Swagger / OpenAPI"],
    duration: "14 Days",
    liveUrl: "https://table-gen-three.vercel.app/",
    category: "Community Tool",
  },
  {
    id: 3,
    name: "ProjectX (Shirt-AI)",
    description: "Developed an interactive 3D shirt customization and AI-powered custom apparel design platform as a freelance template.",
    bullets: [
      "Created interactive 3D shirt customization previews utilizing Three.js and React Three Fiber.",
      "Integrated AI design generation APIs (Stable Diffusion / OpenAI) for real-time generative design placement on 3D canvas textures.",
      "Implemented drag-and-drop customization and smooth texture mapping for optimal user customization experience.",
      "Optimized WebGL rendering loops and assets loading for fluid mobile performance."
    ],
    labels: ["React.js", "Vite", "Three.js", "React Three Fiber", "Tailwind CSS", "AI Integration", "Vercel"],
    duration: "30 Days",
    liveUrl: "https://projectx-dev.vercel.app/",
    category: "Freelance Client Project",
  },
  {
    id: 4,
    name: "SpendOptima",
    description: "Built a premium personal finance tracking and expense optimization dashboard as a freelance template.",
    bullets: [
      "Designed responsive client dashboards using Next.js and Tailwind CSS featuring modern charts and budget insights.",
      "Implemented interactive financial statistics using Recharts, allowing users to categorize expenses and analyze spending habits.",
      "Structured modular frontend templates optimized for fast loading times and robust SEO visibility.",
      "Configured responsive dark mode and custom HSL color palettes for premium UI/UX aesthetics."
    ],
    labels: ["Next.js", "React.js", "Tailwind CSS", "Recharts", "TypeScript", "Vercel"],
    duration: "45 Days",
    liveUrl: "https://spend-optima-60tidsx8y-mahendrashs-projects.vercel.app/",
    category: "Freelance Client Project",
  },
  {
    id: 5,
    name: "SaaS Form Builder Platform",
    description: "Built a full-stack SaaS platform enabling users to create and embed dynamic forms via script integration.",
    bullets: [
      "Designed backend services for form creation, submission handling, storage, and analytics tracking.",
      "Focused on scalability and modular architecture for extensibility."
    ],
    labels: ["React.js", "Next.js", "Tailwind CSS", "Node.js", "RESTful API", "PostgreSQL"],
    duration: "59 Days",
    category: "Freelance Client Project",
  },
  {
    id: 6,
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
    id: 7,
    name: "MERN Gallery & Blog Platform",
    description: "Developed a full-stack application with authentication, image uploads, and blog features.",
    bullets: [
      "Implemented REST APIs for managing user content and interactions; integrated analytics for views/downloads."
    ],
    labels: ["MERN Stack", "React.js", "Tailwind CSS", "DaisyUI", "RESTful API", "Redux"],
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
    id: 8,
    name: "Tools - Logo Name Generator",
    description: "A handy tool to generate logo-style name cards and branding assets instantly.",
    labels: ["Astro", "Tailwind CSS", "TypeScript", "Vercel"],
    duration: "",
    liveUrl: "https://tools-logoname.vercel.app/",
    category: "Tools",
  },
  {
    id: 9,
    name: "Tools - JSON All",
    description: "A comprehensive JSON utility tool for formatting, validating, and transforming JSON data.",
    labels: ["Astro", "Tailwind CSS", "TypeScript", "Vercel"],
    duration: "",
    liveUrl: "https://tools-json-all.vercel.app/",
    category: "Tools",
  },
  {
    id: 10,
    name: "Tools - MD-a (Markdown Editor)",
    description: "A local-first, high-performance Markdown editing, converting, and diagramming studio.",
    labels: ["Astro", "Tailwind CSS", "TypeScript", "Vercel"],
    duration: "",
    liveUrl: "https://tools-md-a.vercel.app/",
    category: "Tools",
  },
].sort((a, b) => a.id - b.id); // Sort in ascending order to show Cargo Readiness first
