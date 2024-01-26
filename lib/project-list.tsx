export const projects = [
  {
    id: 2,
    name: "ArtGal",
    description:
      " login and signup for user using session managment create an image upload functionaly with image title and description at frontend using react js make an API to uploud to cloud fetch api and get the uploded images  make the api to save number of times an image has been viwed and dsiplayed redux using ",
    image: [
      "/projects/p-2/art-gal.png",
      "/projects/p-2/art-gal-gellary.png",
      "/projects/p-2/art-gal-create.png",
      "/projects/p-2/art-gal-users.png",
    ],
    labels: ["MERN Stack", "TailwindCSS", "Daisyui"],
    date: "July 2023",
    sourceCode: "https://github.com/MahendraSH/mern-arl-gal",
    liveUrl: "https://art-gal.vercel.app/",
    userName: "demoadmin@gmail.com",
    password: "demoadmin@gmail.com",
  },
  {
    id: 3,
    name: "CenIN",
    description:
      " Indian Census Visualization Data is the oil of the 21st century and data analytics is the combustion engine . The largest administrative and statistical exercise in the world, counting over 1.3 billion people.The Indian Census aims to provide a reliable snapshot of the country's population, its diversity, and socio-economic characteristics.",
    image: [
      "/projects/p-1/cenin.png",
      "/projects/p-1/cenIn-blog.png",
      "/projects/p-1/cenIn-post.png",
      "/projects/p-1/ceninGallery.png",
    ],

    labels: ["MERN Stack", "TailwindCSS", "Daisyui"],
    date: "June 2023",
    sourceCode: "https://github.com/MahendraSH/min-pro-frontend/",
    liveUrl: "https://ceinmain.onrender.com/",
    userName: "maahi2001hs@gmail.com",
    password: "12345678",
  },
  {
    id: 1,
    name: "E-Store (E-comerce Admin ) ",
    description:
      "  All-in-one platform for E-Commerce   , E-Commerce admin , E-Store Creating  and managing your online e-store with ease. e-store provides API to develop your own e-commerce site or integrate with other services.",
    image: [
      "/projects/p-3/e-store.png",
      "/projects/p-3/e-store.png",
      "/projects/p-3/e-store.png",
    ],
    imagedark: [
      "/projects/p-3/e-store-dark.png",
      "/projects/p-3/estore-bill-dark.png",
      "/projects/p-3/estore-cat-dark.png",
      "/projects/p-3/estore-create-dark.png",
      "/projects/p-3/estore-api-dark.png",
    ],
    labels: ["Nextjs", "TailwindCSS", "shadcn/ui", "prisma", "MySQL"],
    date: "Dec 2023",
    sourceCode: "https://github.com/MahendraSH/estore",
    liveUrl: "https://estore-ms.vercel.app/",
    userName: "estore_123",
    password: "estore_123",
  },
].sort((a, b) => a.id - b.id);
// Sort in descending order based on the recent project
