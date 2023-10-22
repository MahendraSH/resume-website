export const projects = [
  {
    id: 1,
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
    id: 2,
    name: "CenIN",
    description:
      " Indian Census Visualization Data is the oil of the 21st century and data analytics is the combustion engine . The largest administrative and statistical exercise in the world, counting over 1.3 billion people.The Indian Census aims to provide a reliable snapshot of the country's population, its diversity, and socio-economic characteristics.",
    image: "/projects/cenin.png",
    labels: ["MERN Stack", "TailwindCSS", "Daisyui"],
    date: "July 2023",
    sourceCode: "https://github.com/MahendraSH/min-pro-frontend/",
    liveUrl: "https://ceinmain.onrender.com/",
  },
].sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
// Sort in descending order based on the recent project
