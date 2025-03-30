import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa"
import "./Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>
              Rohan<span>Singh</span>
            </h3>
            <p>Web Developer & CP/DSA Enthusiast</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#Skills">Skills</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Info</h4>
            <ul>
              <li>
                <FaEnvelope />
                <a href="mailto:rohans212004@gmail.com">rohans212004@gmail.com</a>
              </li>
              <li>
                <FaPhone />
                <a href="tel:+917843032325">+91-7843032325</a>
              </li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Follow Me</h4>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/rohan-singh" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/rohan-singh" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Rohan Singh. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

