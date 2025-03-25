"use client"

import { useEffect, useRef } from "react"
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa"
import "./Hero.css"
import rohanImg from '../images/Rohan_portfolio_img.png';

const Hero = () => {
  const typingRef = useRef(null)

  useEffect(() => {
    const roles = ["Web Developer", "CP & DSA Enthusiast", "Computer Engineer"]
    let roleIndex = 0
    let charIndex = 0
    let isDeleting = false
    let typingSpeed = 100

    const type = () => {
      const currentRole = roles[roleIndex]

      if (isDeleting) {
        typingRef.current.textContent = currentRole.substring(0, charIndex - 1)
        charIndex--
        typingSpeed = 50
      } else {
        typingRef.current.textContent = currentRole.substring(0, charIndex + 1)
        charIndex++
        typingSpeed = 100
      }

      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true
        typingSpeed = 1500 // Pause at the end
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        roleIndex = (roleIndex + 1) % roles.length
        typingSpeed = 500 // Pause before typing next role
      }

      setTimeout(type, typingSpeed)
    }

    type()
  }, [])

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>
            Hi, I'm <span className="highlight">Rohan Singh</span>
          </h1>
          <h2>
            I'm a <span ref={typingRef} className="typing"></span>
            <span className="cursor">|</span>
          </h2>
          <p>Passionate about building innovative web solutions and solving complex problems</p>

          <div className="hero-buttons">
            <a href="#contact" className="btn">
              Contact Me
            </a>
            <a href="#projects" className="btn btn-outline">
              View Projects
            </a>
          </div>

          <div className="social-links">
            <a href="mailto:rohans212004@gmail.com" className="social-icon" aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="tel:+917843032325" className="social-icon" aria-label="Phone">
              <FaPhone />
            </a>
            <a
              href="https://www.linkedin.com/in/rohan-singh"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/rohan-singh"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-container">
          <img src={rohanImg} alt="Rohan Singh" />
          </div>
        </div>
      </div>

      <div className="scroll-down">
        <a href="#about">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div>
            <span className="scroll-text">Scroll Down</span>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero

