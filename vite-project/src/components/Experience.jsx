import { FaBriefcase } from "react-icons/fa"
import "./Experience.css"

const Experience = () => {
  const experiences = [
    
    {
      title: "Web Developer and Design Intern",
      company: "Akash Dayal Groups",
      period: "December 2024 - March 2025",
      responsibilities: [
        "Developed and optimized 15+ responsive, user-friendly pages with reusable components, ensuring seamless performance across devices.",
        "Conducted thorough testing and debugging to enhance page functionality, accessibility, and cross-browser compatibility.",
        "Collaborated on UI/UX improvements, refining layouts and design consistency to elevate user engagement and overall experience.",
      ],
    },
    {
      title: "Full Stack Web Development Intern",
      company: "Edunet Foundation (in Collaboration with EY GDS & AICTE)",
      period: "February 2025 - March 2025",
      responsibilities: [
        "Completed an intensive MERN Stack development program, working with industry experts to master modern web technologies and best practices.",
        "Developed ‘QuickMeal’, a full-stack food delivery platform with JWT authentication, secure credential handling, and a responsive UI.",
        "Engaged in mentorship sessions with senior professionals, refining skills in UI/UX design, authentication, and scalable web application development."
      ],      
    },
    {
      title: "CP and DSA Team Member",
      company: "Google Developer Groups",
      period: "August 2024 - Present",
      responsibilities: [
        "Provided guidance and resolved doubts related to Competitive Programming (CP) and Data Structures & Algorithms (DSA).",
        "Led a dedicated CP/DSA cohort, fostering growth among aspiring programmers by curating and sharing daily practice problems, encouraging consistent learning and skill enhancement.",
        "Organized Contests and facilitated post-contest discussions, promoting collaborative learning and deeper understanding of problem-solving strategies.",
      ],
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-icon">
                <FaBriefcase />
              </div>

              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <span className="company">{exp.company}</span>
                  <span className="period">{exp.period}</span>
                </div>

                <div className="timeline-body">
                  <ul>
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
