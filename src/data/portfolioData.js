export const portfolioData = [
  // Backend Projects - Top 3
  {
    id: 7,
    category: "backend",
    title: "TodoList WEB3 using ethereum",
    description:
      "Backend API untuk TodoList berbasis WEB3 dengan smart contract dan IPFS.",
    image: "/img/web3.png",
    images: ["/img/web3.png", "/assets/img/b7.png", "/assets/img/b8.jpg"],
    technologies: ["Node.js", "hardhat", "Solidity"],
    type: "project",
    githubUrl: "https://github.com/ImamAriadi2022/metamint-nft-dapp",
    details:
      "API yang menangani 10,000+ transaksi per hari dengan response time rata-rata 150ms. Implementasi rate limiting, caching dengan Redis, dan monitoring dengan Prometheus.",
    featured: true,
  },
  {
    id: 8,
    category: "backend",
    title: "SafeFood App",
    description:
      "Sistem microservices untuk aplikasi fintech dengan service discovery dan load balancing.",
    image: "/assets/img/b6.png",
    images: ["/assets/img/b6.png", "/assets/img/b7.png"],
    technologies: ["Docker", "Kubernetes", "PostgreSQL", "Redis", "RabbitMQ"],
    type: "project",
    githubUrl: "https://github.com/imam/fintech-microservices",
    details:
      "Arsitektur terdiri dari 8 microservices yang handle user management, transaction processing, notification service, dan audit logging. Deployed menggunakan CI/CD pipeline.",
    featured: true,
  },
  {
    id: 9,
    category: "backend",
    title: "Real-time Chat API",
    description:
      "Backend untuk aplikasi chat real-time dengan support grup, file sharing, dan end-to-end encryption.",
    image: "/assets/img/b7.png",
    images: [
      "/assets/img/b7.png",
      "/assets/img/b8.jpg",
      "/assets/img/port3.jpg",
    ],
    technologies: ["Node.js", "Socket.io", "MongoDB", "AWS S3", "WebRTC"],
    type: "demo",
    demoUrl: "https://chat-api-docs.herokuapp.com",
    githubUrl: "https://github.com/imam/realtime-chat-api",
    featured: true,
  },
];

// Data portfolio lengkap untuk halaman All Projects
export const allPortfolioData = [
  ...portfolioData, // 9 project featured

  // Additional Backend Projects
  {
    id: 14,
    category: "backend",
    title: "Authentication Service",
    description:
      "Microservice untuk authentication dengan JWT, OAuth, dan multi-factor authentication.",
    image: "/assets/img/hero-section.png",
    technologies: ["Node.js", "Express", "PostgreSQL", "Redis", "Passport.js"],
    type: "project",
    githubUrl: "https://github.com/imam/auth-service",
    details:
      "Service yang handle authentication untuk multiple applications dengan rate limiting dan session management.",
  },
  {
    id: 15,
    category: "backend",
    title: "File Storage API",
    description:
      "RESTful API untuk file upload, processing, dan CDN distribution dengan image optimization.",
    image: "/assets/img/foto imamprofil.png",
    technologies: ["Python", "FastAPI", "AWS S3", "Celery", "ImageMagick"],
    type: "demo",
    demoUrl: "https://file-api-docs.herokuapp.com",
    githubUrl: "https://github.com/imam/file-storage-api",
  },
];

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
