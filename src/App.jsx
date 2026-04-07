import "./App.css";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Highlights", href: "#highlights" },
  { label: "Contact", href: "#contact" },
];

const impactMetrics = [
  { value: "30%", label: "MongoDB query latency reduced through indexing optimization" },
  { value: "90%", label: "fewer merge conflicts after CI/CD automation improvements" },
  { value: "10K+", label: "logs processed per second in realtime system design" },
  { value: "9.67", label: "current CGPA in Computer Science and Blockchain" },
];

const experience = {
  role: "Backend Developer Intern",
  company: "ICM",
  mode: "Remote",
  period: "Sep 2025 - Dec 2025",
  summary:
    "Built production-ready backend features focused on performance, authentication, API design, and smoother engineering workflows.",
  bullets: [
    "Built scalable REST APIs with Node.js and Express using a clean MVC structure.",
    "Optimized MongoDB indexing strategy and reduced query latency by 30%.",
    "Implemented JWT authentication and role-based access control for secure access flows.",
    "Automated CI/CD with GitHub Actions and reduced merge conflicts by 90%.",
  ],
};

const projects = [
  {
    name: "LogVizPro",
    category: "Microservices | Realtime Systems | ML",
    description:
      "A microservices-based log monitoring platform designed for throughput, anomaly detection, and operational visibility.",
    highlights: [
      "Processed 10,000+ logs per second with WebSockets and event-driven architecture.",
      "Deployed Dockerized services behind Nginx and achieved 99.9% uptime.",
      "Integrated an Isolation Forest model and reduced anomaly workflow latency by 70%.",
    ],
  },
  {
    name: "Vaultis",
    category: "Web3 | Security | Full Stack",
    description:
      "A decentralized secure file storage product combining blockchain verification, encryption workflows, and a usable frontend.",
    highlights: [
      "Built Solidity smart contract flows with IPFS-based storage integration.",
      "Applied post-quantum cryptography concepts for secure file encryption.",
      "Developed a React frontend with Python backend services for encrypted uploads and access.",
    ],
  },
  {
    name: "Pulmo-Track",
    category: "AI/ML | Healthcare | NLP",
    description:
      "An AI-based lung cancer monitoring system focused on medical text understanding and intelligent report retrieval.",
    highlights: [
      "Created a Transformer-based NLP pipeline for patient report analysis.",
      "Integrated vector database search for similarity matching and trend analysis.",
      "Improved model accuracy by 20% through dataset optimization and tuning.",
    ],
  },
];

const skillGroups = [
  {
    title: "Languages",
    items: ["C++", "Python", "Java", "JavaScript", "Solidity"],
  },
  {
    title: "Frontend & Backend",
    items: ["React", "Next.js", "Node.js", "Express", "Flask"],
  },
  {
    title: "Data & Cloud",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Docker", "AWS"],
  },
  {
    title: "AI & Engineering",
    items: ["NumPy", "Pandas", "Scikit-Learn", "Transformers", "Git", "Linux"],
  },
];

const highlights = [
  {
    title: "Leadership",
    body: "Technical Team Member at ACM-W and TPHX, SRMIST. Conducted technical workshops for 100+ students and collaborated on full-stack and Web3 initiatives.",
  },
  {
    title: "Inclusive AI Work",
    body: "Contributed to improving facial recognition inclusivity through better dataset refinement and evaluation.",
  },
  {
    title: "Awards",
    body: "Won 3rd Prize at Digithon 2.0 for Pulmo-Track and 1st Prize at TechKnow for an Arduino Parking Alarm System.",
  },
  {
    title: "Certifications",
    body: "Completed Java Programming by NPTEL, AWS Cloud Virtual Internship by AICTE, and UiPath RPA Virtual Internship by AICTE.",
  },
];

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Sai Kartheek home">
          <span className="brand-mark">SK</span>
          <span className="brand-text">
            <strong>Venkata Sai Kartheek Mulukutla</strong>
            <small>Software Engineer Portfolio</small>
          </span>
        </a>

        <nav className="nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Computer Science Undergraduate | Backend | AI | Web3</p>
            <h1>Engineering secure, scalable software for modern products.</h1>
            <p className="hero-text">
              Computer Science student at SRM Institute of Science and Technology with hands-on backend internship
              experience and strong project work across distributed systems, AI, security, and blockchain-backed
              applications.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="/Sai_Kartheek_Resume.pdf" target="_blank" rel="noreferrer">
                View Resume
              </a>
              <a className="button button-secondary" href="#projects">
                Explore Projects
              </a>
            </div>

            <div className="contact-strip">
              <a href="mailto:venkatasaikartheekm@gmail.com">venkatasaikartheekm@gmail.com</a>
              <a href="tel:+916303351901">+91 63033 51901</a>
              <span>Chennai, India</span>
            </div>
          </div>

          <aside className="hero-side">
            <div className="photo-card">
              <div className="photo-orbit photo-orbit-one" />
              <div className="photo-orbit photo-orbit-two" />
              <div className="photo-frame">
                <img className="profile-photo" src="/kartheek.jpeg" alt="Venkata Sai Kartheek Mulukutla" />
              </div>
              <div className="photo-badge">Open to Software Engineering Opportunities</div>
            </div>

            <div className="hero-panel">
              <span className="panel-label">Current Focus</span>
              <ul>
                <li>Backend systems with Node.js, Express, MongoDB, and JWT security</li>
                <li>Realtime and distributed application design</li>
                <li>AI-enhanced products using NLP, vector search, and ML models</li>
                <li>Blockchain-backed products with Solidity and IPFS</li>
              </ul>
            </div>
          </aside>
        </section>

        <section className="metrics-grid" aria-label="Key metrics">
          {impactMetrics.map((metric) => (
            <article className="metric-card" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <p>About</p>
            <h2>A sharp overview for recruiters, hiring managers, and technical teams.</h2>
          </div>

          <div className="about-grid">
            <article className="card">
              <h3>Education</h3>
              <p>SRM Institute of Science and Technology</p>
              <p>B.Tech in Computer Science and Engineering with Blockchain specialization</p>
              <p>2023 - Present</p>
            </article>

            <article className="card">
              <h3>Core Coursework</h3>
              <p>Data Structures and Algorithms, Object-Oriented Programming, Operating Systems, and COA.</p>
            </article>

            <article className="card">
              <h3>Strengths</h3>
              <p>
                Strong implementation skills, fast learning ability, and a practical approach to building reliable
                software that balances performance, usability, and maintainability.
              </p>
            </article>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <p>Experience</p>
            <h2>Professional backend work with measurable engineering impact.</h2>
          </div>

          <article className="timeline-card">
            <div className="timeline-topline">
              <div>
                <h3>{experience.role}</h3>
                <p>
                  {experience.company} | {experience.mode}
                </p>
              </div>
              <span>{experience.period}</span>
            </div>
            <p className="timeline-summary">{experience.summary}</p>
            <ul className="detail-list">
              {experience.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <p>Projects</p>
            <h2>Selected work across distributed systems, secure platforms, and AI applications.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <span className="project-tag">{project.category}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ul className="detail-list">
                  {project.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <p>Skills</p>
            <h2>A practical stack across software engineering, cloud, data, and intelligent systems.</h2>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="chip-row">
                  {group.items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="highlights">
          <div className="section-heading">
            <p>Highlights</p>
            <h2>Leadership, recognition, and credentials that support the profile.</h2>
          </div>

          <div className="highlights-grid">
            {highlights.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-card">
            <div>
              <p className="contact-kicker">Contact</p>
              <h2>Ready for internships, software engineering roles, and strong product teams.</h2>
              <p>
                If you are hiring for backend, full-stack, AI, or blockchain-oriented roles, I would be glad to share
                more about my experience and work.
              </p>
            </div>

            <div className="contact-actions">
              <a className="button button-primary" href="mailto:venkatasaikartheekm@gmail.com">
                Email Me
              </a>
              <a
                className="button button-secondary"
                href="https://linkedin.com/in/saikartheekmv"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="button button-secondary"
                href="https://github.com/SaiKartheekMV"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
