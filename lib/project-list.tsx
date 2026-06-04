export interface Project {
  id: number;
  name: string;
  description: string;
  bullets?: string[];
  image?: string[];
  imagedark?: string[];
  labels: string[];
  duration: string;
  sourceCode: string;
  liveUrl?: string;
  userName?: string;
  password?: string;
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
    sourceCode: "https://github.com/MahendraSH",
  },
  {
    id: 2,
    name: "SaaS Form Builder Platform",
    description: "Built a full-stack SaaS platform enabling users to create and embed dynamic forms via script integration.",
    bullets: [
      "Designed backend services for form creation, submission handling, storage, and analytics tracking.",
      "Focused on scalability and modular architecture for extensibility."
    ],
    labels: ["React.js", "Next.js", "Tailwind CSS", "Node.js", "RESTful API", "PostgreSQL"],
    duration: "59 Days",
    sourceCode: "https://github.com/MahendraSH",
  },
  {
    id: 3,
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
  },
  {
    id: 4,
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
  },
].sort((a, b) => b.id - a.id); // Sort in descending order to show newest/highest ID first
