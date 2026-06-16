// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  git,
  docker,
  pythonLogo,
  sqlLogo,
  postgresqlLogo,
  pandasLogo,
  numpyLogo,
  powerBiLogo,
  tableauLogo,
  matplotlibLogo,
  scikitLearnLogo,
  tensorflowLogo,
  fastApiLogo,
  openAiLogo,
  project1,
  project2,
  customerBehaviorAnalysis,
  healthcareDataAnalysis,
  youtubeTrendAnalyzer,
  iotSmartHelmetHardware,
  wasteSegregationSystem,
  linkedin,
  github,
} from "../assets";

// ================= NAVBAR =================
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "projects",
    title: "Projects",
    link: null,
  },
  {
    id: "research",
    title: "Research",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
] as const;

// ================= SERVICES =================
export const SERVICES = [
  {
    title: "Data Analyst (Student)",
    icon: web,
  },
  {
    title: "SQL & Database Analysis",
    icon: backend,
  },
  {
    title: "Python for Data Analysis",
    icon: mobile,
  },
  {
    title: "Data Visualization (Power BI)",
    icon: creator,
  },
] as const;

// ================= TECHNOLOGIES =================
export const TECHNOLOGIES = [
  {
    category: "Core Data",
    name: "Python",
    icon: pythonLogo,
  },
  {
    category: "Core Data",
    name: "SQL",
    icon: sqlLogo,
  },
  {
    category: "Core Data",
    name: "PostgreSQL",
    icon: postgresqlLogo,
  },
  {
    category: "Core Data",
    name: "Pandas",
    icon: pandasLogo,
  },
  {
    category: "Core Data",
    name: "NumPy",
    icon: numpyLogo,
  },
  {
    category: "Data Visualization",
    name: "Power BI",
    icon: powerBiLogo,
  },
  {
    category: "Data Visualization",
    name: "Tableau",
    icon: tableauLogo,
  },
  {
    category: "Data Visualization",
    name: "Matplotlib",
    icon: matplotlibLogo,
  },
  {
    category: "Machine Learning",
    name: "Scikit-Learn",
    icon: scikitLearnLogo,
  },
  {
    category: "Machine Learning",
    name: "TensorFlow",
    icon: tensorflowLogo,
  },
  {
    category: "Backend / AI",
    name: "FastAPI",
    icon: fastApiLogo,
  },
  {
    category: "Backend / AI",
    name: "OpenAI API",
    icon: openAiLogo,
  },
  {
    category: "Tools",
    name: "Git",
    icon: git,
  },
  {
    category: "Tools",
    name: "Docker",
    icon: docker,
  },
] as const;

// ================= EXPERIENCE =================
export const EXPERIENCES = [
  {
    title: "B.Tech Student – Electronics and telecommunication",
    company_name: "Dwarkadas J. Sanghvi College of Engineering",
    icon: backend,
    iconBg: "#383E56",
    date: "2023 – Present",
    points: [
      "Learning data analytics, statistics, and programming fundamentals.",
      "Hands-on experience with Excel, SQL, Python, and Power BI.",
      "Worked on academic mini-projects and data case studies.",
      "Actively preparing for internships and hackathons.",
    ],
  },
] as const;

// ================= PROJECTS =================
export const PROJECTS = [
  {
    name: "Customer Behavior Analysis",
    description:
      "Analyzed customer activity, purchase patterns, retention, and segmentation to understand what drives engagement and repeat behavior.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "sql",
        color: "green-text-gradient",
      },
      {
        name: "analytics",
        color: "pink-text-gradient",
      },
    ],
    image: customerBehaviorAnalysis,
    source_code_link: "https://github.com/manav252",
  },
  {
    name: "Healthcare Data Analysis",
    description:
      "Explored healthcare metrics such as patient flow, appointments, outcomes, and department performance using clean visual dashboards.",
    tags: [
      {
        name: "power bi",
        color: "blue-text-gradient",
      },
      {
        name: "excel",
        color: "green-text-gradient",
      },
      {
        name: "healthcare",
        color: "pink-text-gradient",
      },
    ],
    image: healthcareDataAnalysis,
    source_code_link: "https://github.com/manav252",
  },
  {
    name: "YouTube Trend Analyzer",
    description:
      "Studied video performance trends, category growth, engagement patterns, and watch-time signals to identify what content gains traction.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pandas",
        color: "green-text-gradient",
      },
      {
        name: "visualization",
        color: "pink-text-gradient",
      },
    ],
    image: youtubeTrendAnalyzer,
    source_code_link: "https://github.com/manav252",
  },
] as const;

// ================= RESEARCH =================
export const RESEARCH = [
  {
    name: "IoT Enabled Smart Helmet Breathalyzer",
    description:
      "Designed and developed an IoT-enabled smart helmet integrated with a breathalyzer for road safety. The system detects alcohol levels before vehicle operation, helping prevent drunk driving while enabling real-time monitoring and accident prevention.",
    tags: [
      {
        name: "iot",
        color: "blue-text-gradient",
      },
      {
        name: "embedded systems",
        color: "green-text-gradient",
      },
      {
        name: "road safety",
        color: "pink-text-gradient",
      },
    ],
    image: iotSmartHelmetHardware,
    links: [
      {
        label: "Paper",
        href: "/research/iot-smart-helmet-paper.pdf",
      },
      {
        label: "Certificate",
        href: "/research/iot-certificate-manav-doshi.pdf",
      },
      {
        label: "Hardware",
        href: "/research/iot-smart-helmet-hardware.jpg",
      },
    ],
  },
  {
    name: "Waste Segregation System",
    description:
      "Developed an intelligent waste segregation system using machine learning, image processing, sensors, and IoT technologies. The system automatically classifies waste into recyclable, organic, and general categories and achieved approximately 90% classification accuracy.",
    tags: [
      {
        name: "machine-learning",
        color: "blue-text-gradient",
      },
      {
        name: "iot",
        color: "green-text-gradient",
      },
      {
        name: "computer-vision",
        color: "pink-text-gradient",
      },
    ],
    image: wasteSegregationSystem,
    links: [
      {
        label: "Paper",
        href: "/research/waste-segregation-paper.pdf",
      },
      {
        label: "Sanitary Detection Demo",
        href: "/research/waste-sanitary-detection-ml-demo.mp4",
      },
    ],
  },
] as const;

// ================= SOCIAL LINKS =================
export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/manav-doshi-252baw/",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/manav252",
  },
] as const;

export const TESTIMONIALS = [] as const;
