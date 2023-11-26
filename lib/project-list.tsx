export const projects = [
  {
    id: 2,
    name: "ArtGal",
    description:
      " login and signup for user using session managment create an image upload functionaly with image title and description at frontend using react js make an API to uploud to cloud fetch api and get the uploded images  make the api to save number of times an image has been viwed and dsiplayed redux using ",
    image: "/projects/art-gal.png",
    labels: ["MERN Stack", "TailwindCSS", "Daisyui"],
    date: "July 2023",
    sourceCode: "https://github.com/MahendraSH/mern-arl-gal",
    liveUrl: "https://art-gal.vercel.app/",
  },
  {
    id: 3,
    name: "CenIN",
    description:
      " Indian Census Visualization Data is the oil of the 21st century and data analytics is the combustion engine . The largest administrative and statistical exercise in the world, counting over 1.3 billion people.The Indian Census aims to provide a reliable snapshot of the country's population, its diversity, and socio-economic characteristics.",
    image: "/projects/cenin.png",

    labels: ["MERN Stack", "TailwindCSS", "Daisyui"],
    date: "July 2023",
    sourceCode: "https://github.com/MahendraSH/min-pro-frontend/",
    liveUrl: "https://ceinmain.onrender.com/",
  },
  {
    id: 1,
    name: "E-Store (E-comerce Admin ) ",
    description:
      "  All-in-one platform for E-Commerce   , E-Commerce admin , E-Store Creating  and managing your online e-store with ease. e-store provides API to develop your own e-commerce site or integrate with other services.",
    image: "/projects/e-store.png",
    imagedark: "/projects/e-store-dark.png",
    labels: ["Nextjs", "TailwindCSS", "shadcn/ui", "prisma", "MySQL"],
    date: "Nov 2023",
    sourceCode: "https://github.com/MahendraSH/estore",
    liveUrl: "https://estore-ms.vercel.app/",
  },
].sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
// Sort in descending order based on the recent project
