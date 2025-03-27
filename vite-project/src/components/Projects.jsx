"use client"

import { useState } from "react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import "./Projects.css"
import tripallyImg from '../images/tripally.png';
import BooksImg from '../images/books-app.png';


const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Trip-Ally",
      description:
        "A secure and efficient trip booking platform with JWT authentication and password hashing for robust data protection.",
      image: tripallyImg,
      techStack: ["Node.js", "Express.js", "React.js", "MongoDB Atlas", "Tailwind CSS"],
      liveLink: "https://trip-ally.vercel.app",
      githubLink: "https://github.com/Rohs21/Trip-Ally",
      features: [
        "Developed a secure and efficient trip booking platform using React for a seamless user experience",
        "Integrated JWT authentication and password hashing for robust data protection",
        "Optimized backend workflows to streamline booking operations",
        "Implemented a structured authentication system that safeguards user credentials",
      ],
    },
    {
      id: 2,
      title: "BOOKS-HUB",
      description:
        "An interactive React-based Book Hub web app featuring book search and trending titles with effective state management.",
      image: BooksImg,
      techStack: ["React.js", "HTML", "CSS", "JavaScript", "API", "Git"],
      liveLink: "https://github.com/Rohs21/Books-app",
      githubLink: "https://github.com/Rohs21/Books-app",
      features: [
        "Built an interactive React-based Book Hub web app featuring book search and trending titles",
        "Implemented effective state management and utilized Git for version control",
        "Integrated a third-party API to fetch real-time book data",
        "Delivered a high-performance application with responsive design",
      ],
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div
              className="project-card"
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="project-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className={`project-overlay ${hoveredProject === project.id ? "active" : ""}`}>
                  <div className="project-links">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="tech-stack">
                  <h4>Tech Stack:</h4>
                  <div className="tech-tags">
                    {project.techStack.map((tech, index) => (
                      <span className="tech-tag" key={index}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

