export const portfolioData = [
  // Backend Projects - Top 3
  {
    id: 1,
    category: "backend",
    title: "SafeFood App",
    description:
      "SafeFood is a platform that tackles food waste by connecting donors with communities in need. Using Google Cloud as a scalable and secure backend infrastructure.",
    image: "/assets/img/b6.png",
    images: ["/assets/img/b6.png", "/assets/img/b7.png"],
    technologies: [
      "Docker",
      ,
      "Postman",
      "Compute Engine",
      "Cloud Storage",
      "Cloud SQL",
      "RESTful API",
    ],
    type: "project",
    githubUrl: "https://github.com/aryasetiap/SafeFood-BangkitCapstone",
    details:
      "Food waste that is unused or still fit for consumption is often discarded, despite its potential to be composted or donated to communities in need. This issue not only harms the environment but also weakens food security, impacting millions who face hunger daily. SafeFood addresses these challenges by connecting contributors with suitable recipients, aligning with the Sustainable Development Goals (SDGs) of ending hunger, promoting responsible consumption, and addressing climate change. By facilitating access and ensuring safe, appropriate food distribution, this platform aims to reduce food waste while benefiting vulnerable communities.",
    featured: true,
  },
];

// Data portfolio lengkap untuk halaman All Projects
export const allPortfolioData = [...portfolioData];

export const portfolioCategories = [
  { id: "backend", name: "Backend", icon: "fa-server" },
];

export const services = [
  {
    id: 1,
    icon: "/assets/img/service/icon-responsive.svg",
    title: "Backend Development",
    description:
      "Building robust and scalable server-side applications with modern technologies and best practices",
  },
];
