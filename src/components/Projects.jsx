import './Projects.css';
import projectimg1 from '../assets/projectimg1.jpg';

const projects = [
  {
    title: 'SRM Fusion Feast',
    description: 'Simple and elegant HTML/CSS website showcasing basic web design skills',
    github: 'https://github.com/SaiKartheekMV/TPH-technical-task',
    live: 'https://saikartheekmv.github.io/TPH-technical-task/',
    image: projectimg1, 
  },
  {
    title: 'Project Two',
    description: 'A brief description of project two.',
    github: 'https://github.com/yourusername/project-two',
    live: 'https://yourwebsite.com/project-two',
    image: 'https://via.placeholder.com/300', 
  },
  {
    title: 'Project Three',
    description: 'A brief description of project three.',
    github: 'https://github.com/yourusername/project-three',
    live: 'https://yourwebsite.com/project-three',
    image: 'https://via.placeholder.com/300',
  },
];

const Projects = () => {
  return (
    <section id='projects' data-aos="fade-right">
      <h2>My Projects</h2>
      <div className="projectsContainer">
        {projects.map((project, index) => (
          <div key={index} className="projectCard" data-aos="flip-left">
            <img src={project.image} alt={project.title} className="projectImage" />
            <h3 className="projectTitle">{project.title}</h3>
            <p className="projectDescription">{project.description}</p>
            <div className="projectButtons">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="projectGitBtn">GitHub</a>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="projectLiveBtn">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
