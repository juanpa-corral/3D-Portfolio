// index.js
export const servicesData = [
  // PILAR 1: SOFTWARE ARCHITECTURE & CLOUD DESIGN
  {
    title: "Architecture & Cloud Scalability",
    description:
      "Designing robust, modular enterprise and software architectures for the cloud. We ensure the foundational base for high-performance solutions and future growth.",
    items: [
      {
        title: "Enterprise and Software Architecture Design",
      },
      {
        title: "Cloud Integration (OCI & AWS Fundamentals)",
      },
      {
        title: "Microservices Design & Scalability",
      },
    ],
  },

  // PILAR 2: FULL STACK DEVELOPMENT & DEVOPS
  {
    title: "Full Stack Engineering & CI/CD",
    description:
      "End-to-end development of high-performance applications, from backend APIs to modern frontends, integrating DevOps practices for fast, automated delivery.",
    items: [
      {
        title: "Full Stack: Java/Spring Boot & React.js",
      },
      {
        title: "CI/CD Pipelines with Jenkins & Docker",
      },
      {
        title: "Version Control & Code Review Workflows",
      },
    ],
  },

  // PILAR 3: DATA ANALYTICS & ML MODELING
  {
    title: "Data Analytics & ML Modeling",
    description:
      "Building Machine Learning (ML) models and advanced data analysis systems to extract predictive value, addressing challenges like handling imbalanced data.",
    items: [
      {
        title: "Predictive Modeling (Python/Scikit-learn)",
      },
      {
        title: "Anomaly Detection (DBSCAN, Isolation Forest)",
      },
      {
        title: "Data Management & Administration",
      },
    ],
  },

  // PILAR 4: AI/ML APPLICATION & BUSINESS IMPACT
  {
    title: "Optimization & Decision Intelligence",
    description:
      "Direct application of AI solutions to automate core processes, optimize operational efficiency, and enable data-informed strategic decision-making.",
    items: [
      {
        title: "Operational Efficiency & Automation",
      },
      {
        title: "Data-Informed Decision-Making",
      },
      {
        title: "Model Validation (Precision-Recall Curves)",
      },
    ],
  },
];
export const projects = [
  {
    id: 1,
    name: "Anomaly Detection Engine",
    frameworks: [
      { id: 1, name: "Python / Unsupervised Machine Learning" },
      { id: 2, name: "Scikit-learn" },
      { id: 3, name: "DBSCAN/Isolation Forest/K-means/HDBSCAN/PCA" },
    ],
    // Placeholder paths: Replace with actual image URLs
    image: "/assets/projects/anomaly_detection_main.png",
    bgImage: "/assets/backgrounds/anomaly_detection_bg.jpg",
  },
  {
    id: 2,
    name: "RoomScout (Hotel Booking Platform)",
    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "Java Spring Boot" },
      { id: 3, name: "CI/CD (Jenkins/Docker/SonarQube/Github Actions)" },
    ],
    image: "/assets/projects/roomscout_main.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
  },
  {
    id: 3,
    name: "Geramirez Real Estate App",
    frameworks: [
      { id: 1, name: "Mobile Development / automation" },
      { id: 2, name: "Backend Logic / Glide" },
      { id: 3, name: "Automatic Data Sheets" },
    ],
    image: "/assets/projects/ger.png",
    bgImage: "/assets/backgrounds/gerBg.jpg",
  },
  {
    id: 4,
    name: "Bender E-commerce Store",
    frameworks: [
      { id: 1, name: "E-commerce Workflow" },
      { id: 2, name: "PHP / HTML5 / JavaScript" },
      { id: 3, name: "Payment Gateway Integration" },
    ],
    image: "/assets/projects/bender.png",
    bgImage: "/assets/backgrounds/benderBg.jpg",
  },
];
export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/juanpa834" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/juan-pablo-corral-henao/" },
  { name: "GitHub", href: "https://github.com/juanpa-corral" },
];
