export const interstellarProfile = {
  name: "Venkata Sai Kartheek Mulukutla",
  callsign: "Kartheek",
  tagline: "Exploring Frontiers in AI Systems, Backend Architecture & Blockchain",
  bio: "Computer Science Engineer at SRMIST specializing in Blockchain and AI engineering. I build agentic multi-signal intelligence platforms, sub-200ms fraud detection engines, high-performance distributed backends, and explainable ML pipelines.",
  location: "Chennai, Tamil Nadu, India",
  email: "venkatasaikartheekm@gmail.com",
  phone: "+91 6303351901",
  resumeUrl: "/Sai_Kartheek_Resume.pdf",
  links: {
    github: "https://github.com/SaiKartheekMV",
    linkedin: "https://linkedin.com/in/saikartheekmv",
    leetcode: "https://leetcode.com/u/SaiKartheekMV",
    email: "mailto:venkatasaikartheekm@gmail.com",
    phone: "tel:+916303351901",
  },
  missionMetrics: [
    { label: "Academic CGPA", value: "9.70 / 10", detail: "SRMIST Blockchain Specialization" },
    { label: "API Query Optimization", value: "30% Cut", detail: "MongoDB 340ms → 238ms latency reduction" },
    { label: "ML Inference Speed", value: "< 200ms", detail: "Autoencoder + Ensemble fraud detection" },
    { label: "Hackathon Standing", value: "Top 3 / 200+", detail: "3rd Prize Digithon 2.0 & 1st Prize TechKnow" },
  ],
  status: "ORBITAL OPERATIONS READY",
  coordinates: "13.0827° N, 80.2707° E // GARGANTUA SECTOR",
};

export const interstellarQuotes = [
  {
    quote: "Mankind was born on Earth, it was never meant to die here.",
    author: "Joseph Cooper",
  },
  {
    quote: "Do not go gentle into that good night. Rage, rage against the dying of the light.",
    author: "Prof. Brand / Dylan Thomas",
  },
  {
    quote: "It's not possible. — No, it's necessary.",
    author: "Cooper & CASE",
  },
  {
    quote: "Love is the one thing that transcends time and space.",
    author: "Dr. Amelia Brand",
  },
];

export const navigationSectors = [
  { id: "hero", label: "Orbit", code: "01" },
  { id: "projects", label: "Missions", code: "02" },
  { id: "experience", label: "Trajectory", code: "03" },
  { id: "skills", label: "Tesseract", code: "04" },
  { id: "education", label: "Academy", code: "05" },
  { id: "terminal", label: "Telemetry", code: "06" },
  { id: "contact", label: "Transmissions", code: "07" },
];

export const planetaryProjects = [
  {
    slug: "swiftpath-ai",
    title: "SwiftPath AI",
    subtitle: "Agentic Supplier Risk Intelligence Platform",
    planet: "Miller's World",
    orbitSector: "Sector 01 // Multi-Agent Horizon",
    status: "MISSION ACCOMPLISHED",
    category: "Agentic AI / Full-Stack Platform",
    featured: true,
    github: "https://github.com/SaiKartheekMV",
    summary:
      "A distributed multi-agent supplier risk platform synthesizing 5 autonomous signals across global news, live weather, financial health, compliance, and geopolitical tensions into a single explainable risk index.",
    highlights: [
      "Built multi-agent intelligence combining 5 independent signals into a deterministic weighted supplier risk score.",
      "Engineered parallel ingestion pipelines utilizing GDELT, Open-Meteo, Yahoo Finance, and sanctions screening with zero-API-key fallback logic.",
      "Implemented tiered risk escalation routing critical alerts to Groq LLM reasoning with persistent audit trails and PDF/CSV reporting.",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Groq / OpenAI",
      "GDELT",
      "Open-Meteo",
      "Yahoo Finance API",
      "Recharts",
      "Tailwind CSS",
    ],
    metrics: [
      { label: "Signals Synthesized", value: "5 Streams" },
      { label: "Fallback Resilience", value: "100% Deterministic" },
      { label: "Escalation Logic", value: "Tiered Groq LLM" },
    ],
    color: "#f59e0b",
    gradient: "from-amber-500/20 via-amber-900/10 to-transparent",
  },
  {
    slug: "securepay",
    title: "SecurePay",
    subtitle: "AI-Powered Fraud Detection & Explainability Platform",
    planet: "Mann's Outpost",
    orbitSector: "Sector 02 // Deep Anomaly Core",
    status: "SYSTEM OPERATIONAL",
    category: "Machine Learning / Distributed Backend",
    featured: true,
    github: "https://github.com/SaiKartheekMV",
    summary:
      "An enterprise-grade fraud anomaly detection engine using deep Autoencoders and Ensemble ML, delivering sub-200ms real-time transaction scoring with SHAP model interpretability across 4 risk classifications.",
    highlights: [
      "Trained an Autoencoder + Ensemble ML architecture scoring transaction fraud risks on 0.0–1.0 scale with sub-200ms latency.",
      "Applied SHAP explainability to decompose model decisions and classify transactions into 4 risk tiers (LOW / MEDIUM / HIGH / CRITICAL).",
      "Engineered data pipelines and feature store on PostgreSQL with Redis cache, containerized into a 3-tier microservice architecture.",
    ],
    techStack: [
      "Python",
      "PyTorch",
      "Scikit-Learn",
      "SHAP",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Next.js",
    ],
    metrics: [
      { label: "Inference Latency", value: "< 200ms" },
      { label: "Explainability", value: "SHAP Decomposition" },
      { label: "Architecture", value: "3-Tier Containerized" },
    ],
    color: "#38bdf8",
    gradient: "from-sky-500/20 via-sky-900/10 to-transparent",
  },
  {
    slug: "pulmo-track",
    title: "Pulmo-Track",
    subtitle: "AI Lung Cancer Monitoring System",
    planet: "Edmunds' Sanctuary",
    orbitSector: "Sector 03 // Neural Diagnostics",
    status: "AWARDED 3RD PRIZE",
    awardBadge: "Digithon 2.0 Hackathon Top 3 / 200+ Teams",
    category: "Biomedical AI / NLP / Vector Search",
    featured: true,
    github: "https://github.com/SaiKartheekMV",
    summary:
      "A biomedical NLP pipeline leveraging Transformer architectures to parse unstructured clinical oncology reports, paired with high-dimensional vector search for semantic case retrieval and prognostic tracking.",
    highlights: [
      "Engineered a Transformer-based clinical NLP pipeline extracting diagnostic findings from complex unstructured oncology texts.",
      "Connected vector database similarity search for ultra-fast historic case comparison and longitudinal tracking.",
      "Elevated model F1 score from 0.71 to 0.85 via systematic dataset augmentation and error boundary optimization.",
      "Awarded 3rd Prize at Digithon 2.0 Hackathon among 200+ competing collegiate engineering teams.",
    ],
    techStack: [
      "Python",
      "Transformers",
      "PyTorch",
      "Vector DB",
      "FastAPI",
      "NLP Augmentation",
    ],
    metrics: [
      { label: "Model F1 Score", value: "0.71 → 0.85" },
      { label: "Competitive Rank", value: "Top 3 / 200+ Teams" },
      { label: "Search Paradigm", value: "Vector Similarity" },
    ],
    color: "#a855f7",
    gradient: "from-purple-500/20 via-purple-900/10 to-transparent",
  },
];

export const flightTrajectory = [
  {
    timeframe: "Sep 2025 – Feb 2026",
    role: "Backend Developer Intern",
    organization: "Remote Enterprise",
    missionType: "PRODUCTION BACKEND & INFRASTRUCTURE",
    points: [
      "Engineered and maintained 12+ RESTful APIs using Node.js and Express, powering mission-critical analytics and reporting with JWT auth and granular RBAC.",
      "Optimized MongoDB query throughput by 30% (slashing latency from 340ms to 238ms) through compound indexing and database query execution plan tuning.",
      "Architected automated CI/CD deployment pipelines using GitHub Actions, eliminating manual release friction and accelerating deployment velocity by 40%.",
    ],
    badge: "Enterprise Systems",
    telemetry: "12+ APIs // 30% Latency Drop // 40% Faster Deployments",
  },
  {
    timeframe: "Mar 2026 – Present",
    role: "Technical Lead",
    organization: "Blockchain Club, SRMIST",
    missionType: "LEADERSHIP & ARCHITECTURE",
    points: [
      "Spearheading a 15-member elite technical crew architecting decentralized Web3 and blockchain protocols.",
      "Mentoring developers across distributed system design, smart contract verification, and cryptographic fundamentals.",
      "Revamped onboarding pipelines around hands-on engineering challenges, drastically accelerating new developer contribution cycles.",
    ],
    badge: "Engineering Leadership",
    telemetry: "15 Crew Members // Web3 & Smart Contracts // System Architecture",
  },
  {
    timeframe: "Jan 2025 – Feb 2026",
    role: "Technical Team Member",
    organization: "ACM-W & TPHX, SRMIST",
    missionType: "ACADEMIC & COMMUNITY OUTREACH",
    points: [
      "Delivered 6+ technical masterclasses and hands-on workshops covering Full-Stack architecture and AI to 100+ students.",
      "Contributed to an advanced facial recognition initiative, systematically rebalancing training datasets to eradicate performance disparities across demographic segments.",
    ],
    badge: "Community & AI Research",
    telemetry: "6+ Workshops // 100+ Students Mentored // AI Dataset Rebalancing",
  },
];

export const tesseractSkills = [
  {
    category: "Languages & Core",
    icon: "code",
    telemetryCode: "SYNTAX-01",
    skills: [
      { name: "C++", level: 92, descriptor: "High Performance / DSA" },
      { name: "Python", level: 95, descriptor: "AI / ML / FastAPI" },
      { name: "JavaScript", level: 90, descriptor: "ESNext / Full-Stack" },
      { name: "TypeScript", level: 92, descriptor: "Type Safety & Next.js" },
      { name: "Java", level: 86, descriptor: "OOP & Foundations" },
      { name: "SQL", level: 90, descriptor: "Relational Queries" },
    ],
  },
  {
    category: "AI & Machine Learning",
    icon: "brain",
    telemetryCode: "NEURAL-02",
    skills: [
      { name: "PyTorch", level: 90, descriptor: "Deep Learning & Tensors" },
      { name: "Transformers", level: 88, descriptor: "HuggingFace NLP" },
      { name: "Scikit-Learn", level: 92, descriptor: "Ensemble Models" },
      { name: "SHAP", level: 88, descriptor: "Explainable AI (XAI)" },
      { name: "Feature Engineering", level: 90, descriptor: "Data Preprocessing" },
      { name: "Pandas & NumPy", level: 94, descriptor: "Array Vectorization" },
    ],
  },
  {
    category: "Agentic AI & Generative AI",
    icon: "sparkles",
    telemetryCode: "AGENT-03",
    skills: [
      { name: "Multi-Agent Pipelines", level: 92, descriptor: "Autonomous Workflows" },
      { name: "LLM Orchestration", level: 94, descriptor: "Groq, OpenAI, Gemini" },
      { name: "RAG & Vector DBs", level: 89, descriptor: "Semantic Retrieval" },
      { name: "Prompt Engineering", level: 95, descriptor: "System Directives" },
      { name: "Deterministic Fallbacks", level: 92, descriptor: "Reliable Synthesis" },
    ],
  },
  {
    category: "Backend & Frameworks",
    icon: "server",
    telemetryCode: "DISTRIB-04",
    skills: [
      { name: "FastAPI", level: 92, descriptor: "Asynchronous Python" },
      { name: "Node.js & Express", level: 93, descriptor: "RESTful Services" },
      { name: "Next.js (App Router)", level: 94, descriptor: "Server Components" },
      { name: "React 19", level: 92, descriptor: "Reactive Interfaces" },
      { name: "JWT & RBAC", level: 90, descriptor: "Auth & Access Control" },
      { name: "Recharts & Visuals", level: 88, descriptor: "Telemetry Graphs" },
    ],
  },
  {
    category: "Databases & Infrastructure",
    icon: "database",
    telemetryCode: "INFRA-05",
    skills: [
      { name: "PostgreSQL", level: 92, descriptor: "Relational Schemas" },
      { name: "MongoDB", level: 90, descriptor: "Compound Indexing" },
      { name: "Redis", level: 88, descriptor: "In-Memory Caching" },
      { name: "Docker", level: 89, descriptor: "Containerized Microservices" },
      { name: "CI/CD & GitHub Actions", level: 90, descriptor: "Automated Releases" },
      { name: "Linux & AWS", level: 86, descriptor: "Cloud & Virtual Machines" },
    ],
  },
];

export const academicAcademy = [
  {
    institution: "SRM Institute of Science and Technology, KTR",
    location: "Chennai, Tamil Nadu",
    period: "Aug 2023 – Present",
    degree: "B.Tech in Computer Science and Engineering",
    specialization: "Blockchain Specialization",
    score: "CGPA: 9.70 / 10",
    highlights: [
      "Top-tier academic ranking in Computer Science & Engineering department.",
      "In-depth research and project orientation across decentralized architectures and AI.",
      "Active leader in university technical ecosystem.",
    ],
  },
  {
    institution: "Narayana Junior College",
    location: "Nellore, Andhra Pradesh",
    period: "Jun 2021 – Jun 2023",
    degree: "Intermediate (Class 12)",
    specialization: "Physics, Chemistry, Mathematics (PCM)",
    score: "88.6%",
    highlights: ["Strong foundation in computational logic, calculus, and physics."],
  },
  {
    institution: "Dr. Viswasai SRK EM High School",
    location: "Nellore, Andhra Pradesh",
    period: "Jun 2014 – Mar 2021",
    degree: "Secondary School Certificate (Class 10)",
    specialization: "General Sciences & Mathematics",
    score: "99.2%",
    highlights: ["Academic excellence with top percentile achievement."],
  },
];

export const missionAccolades = [
  {
    title: "1st Prize — TechKnow",
    detail: "Arduino-based Smart Parking Alarm System",
    category: "Hardware & IoT Innovation",
    icon: "trophy",
  },
  {
    title: "3rd Prize — Digithon 2.0 Hackathon",
    detail: "Pulmo-Track AI Lung Cancer Diagnostic Pipeline among 200+ competing engineering teams",
    category: "AI & Healthcare Hackathon",
    icon: "medal",
  },
  {
    title: "IBM Generative AI Certification",
    detail: "Generative AI: Introduction and Applications — IBM (Coursera)",
    category: "Certified GenAI",
    icon: "award",
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    detail: "AWS Cloud Infrastructure & Foundational Cloud Services — AWS (Coursera)",
    category: "Cloud Architecture",
    icon: "cloud",
  },
  {
    title: "IBM DevOps Certification",
    detail: "Introduction to DevOps, CI/CD, and Microservices — IBM (Coursera)",
    category: "DevOps & Infrastructure",
    icon: "layers",
  },
  {
    title: "NPTEL Java Certification",
    detail: "Java Programming Master Certification — NPTEL IIT",
    category: "Systems & OOP",
    icon: "check-circle",
  },
];

export const coreCoursework = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Database Management Systems",
  "Operating Systems",
  "Computer Networks",
  "System Design",
  "Data Science",
  "Cryptography",
  "Linux and Containers",
  "Compiler Design",
];
