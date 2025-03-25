"use client"

import { useState, useEffect } from "react"
import "./Navbar.css"

const Navbar = ({ scrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      let current = ""

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute("id")
        }
      })

      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container">
        <a href="#home" className="logo">
          Rohan<span>Singh</span>
        </a>

        <div className={`menu-toggle ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <div className="hamburger"></div>
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#home" className={activeSection === "home" ? "active" : ""} onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className={activeSection === "about" ? "active" : ""} onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" className={activeSection === "skills" ? "active" : ""} onClick={closeMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#experience" className={activeSection === "experience" ? "active" : ""} onClick={closeMenu}>
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className={activeSection === "projects" ? "active" : ""} onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#education" className={activeSection === "education" ? "active" : ""} onClick={closeMenu}>
              Education
            </a>
          </li>
          <li>
            <a href="#achievements" className={activeSection === "achievements" ? "active" : ""} onClick={closeMenu}>
              Achievements
            </a>
          </li>
          <li>
            <a href="#contact" className={activeSection === "contact" ? "active" : ""} onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

