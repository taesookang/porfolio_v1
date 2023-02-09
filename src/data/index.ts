interface IProject {
  title: string;
  platform: string;
  thumbnail: string;
  desc: string;
  repo: string;
}

const projects: IProject[] = [
  {
    title: "Dockyard",
    platform: "web",
    thumbnail: "/images/dockyard.png",
    desc: "A single-page e-commerce website with an animated user interface, along with the integration of AWS S3 and CloudFront for the efficient retrieval of assets and data.",
    repo: "https://github.com/taesookang/dockyard",
  },
  {
    title: "Wordle",
    platform: "web",
    thumbnail: "/images/wordle.png",
    desc: "A word guessing game web app, supporting dark mode appearance.",
    repo: "https://github.com/taesookang/wordle",
  },
  {
    title: "Calculator",
    platform: "mobile",
    thumbnail: "/images/calc.png",
    desc: "A mobile app which offers basic calculation functionalities as well as dark mode appearance.",
    repo: "https://github.com/taesookang/calculator_RN",
  },
  {
    title: "instagrid",
    platform: "web",
    thumbnail: "/images/instagrid.png",
    desc: "Instagram cloned web app includes key features such as post, follow, like and comment.",
    repo: "https://github.com/taesookang/instagrid",
  },
  {
    title: "Noogle",
    platform: "web",
    thumbnail: "/images/noogle.png",
    desc: "Google search cloned web app which allows users to search websites, news, images and videos by simply typing in search term.",
    repo: "https://github.com/taesookang/noogle",
  },
  {
    title: "Soju haus",
    platform: "web",
    thumbnail: "/images/soha.png",
    desc: "A Restaurant web app which offers categorized food menu, events, photos of the restaurant, and link to reservation webpage.",
    repo: "https://github.com/taesookang/soha",
  },
  {
    title: "Moovle",
    platform: "web",
    thumbnail: "/images/moovle.png",
    desc: "A Movie search web app which offers watchlist service and movie search by categories and query with detailed information and a short trailer for each result.",
    repo: "https://github.com/taesookang/moovle",
  },
];

interface Skill {
  title: string;
  level: number;
}

const skills: [string, Skill[]][] = [
  [
    "languages",
    [
      { title: "Typescript", level: 95 },
      { title: "Javascript", level: 90 },
      { title: "Python", level: 80 },
    ],
  ],
  [
    "libraries",
    [
      { title: "React JS", level: 95 },
      { title: "Next JS ", level: 90 },
      { title: "React Native", level: 70 },
      { title: "Tailwind CSS", level: 95 },
      { title: "SASS / SCSS", level: 80 },
      { title: "GraphQL", level: 80 },
      { title: "Node JS", level: 80 },
      { title: "Jest / Testing library", level: 80 },
      { title: "Docker", level: 50 },
    ],
  ],
  [
    "Database",
    [
      { title: "Firebase", level: 90 },
      { title: "Postgres SQL", level: 80 },
      { title: "Mongo DB", level: 80 },
    ],
  ],
  [
    "cloud services",
    [
      { title: "AWS", level: 80 },
      { title: "Google Cloud", level: 70 },
    ],
  ],
];
export { skills, projects };
