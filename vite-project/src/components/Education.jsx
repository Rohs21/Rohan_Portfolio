import { FaGraduationCap } from "react-icons/fa"
import "./Education.css"

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>

        <div className="education-card">
          <div className="education-icon">
            <FaGraduationCap />
          </div>

          <div className="education-content">
            <h3>Bachelor of Engineering (Computer Engineering)</h3>
            <h4>Zeal College of Engineering and Research, Pune</h4>
            <p className="education-period">August 2022 - May 2026 (Persuing)</p>
            <p className="education-location">Narhe, Pune</p>

            <div className="education-courses">
              <h4>Relevant Courses:</h4>
              <ul className="courses-list">
                <li>Data Structure and Algorithm</li>
                <li>Database and Management System</li>
                <li>Object Oriented Programming</li>
                <li>Software Engineering</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education

