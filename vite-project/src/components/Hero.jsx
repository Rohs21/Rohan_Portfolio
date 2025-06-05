"use client"

import { useEffect, useRef, useState } from "react"
import { FaLinkedin, FaGithub, FaEnvelope, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { Palette, Check } from "lucide-react";

import "./Hero.css"
import rohanImg from '../images/Rohan_portfolio_img.png';

const Hero = () => {
  const typingRef = useRef(null)
  const [currentTheme, setCurrentTheme] = useState('default')
  const [showThemePicker, setShowThemePicker] = useState(false)

  // Define color themes
  const themes = {
    default: {
      name: 'Default',
      primary: '#1e3a8a',
      secondary: '#0d9488',
      accent: '#f59e0b',
      background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.05) 0%, rgba(13, 148, 136, 0.1) 100%)'
    },
    ocean: {
      name: 'Ocean',
      primary: '#0ea5e9',
      secondary: '#06b6d4',
      accent: '#3b82f6',
      background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.05) 0%, rgba(6, 182, 212, 0.1) 100%)'
    },
    sunset: {
      name: 'Sunset',
      primary: '#f97316',
      secondary: '#ef4444',
      accent: '#eab308',
      background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.05) 0%, rgba(239, 68, 68, 0.1) 100%)'
    },
    forest: {
      name: 'Forest',
      primary: '#16a34a',
      secondary: '#059669',
      accent: '#65a30d',
      background: 'linear-gradient(135deg, rgba(22, 163, 74, 0.05) 0%, rgba(5, 150, 105, 0.1) 100%)'
    },
    galaxy: {
      name: 'Galaxy',
      primary: '#7c3aed',
      secondary: '#a855f7',
      accent: '#ec4899',
      background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.05) 0%, rgba(168, 85, 247, 0.1) 100%)'
    },
    fire: {
      name: 'Fire',
      primary: '#dc2626',
      secondary: '#ea580c',
      accent: '#f59e0b',
      background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.05) 0%, rgba(234, 88, 12, 0.1) 100%)'
    },
    ice: {
      name: 'Ice',
      primary: '#0891b2',
      secondary: '#0284c7',
      accent: '#06b6d4',
      background: 'linear-gradient(135deg, rgba(8, 145, 178, 0.05) 0%, rgba(2, 132, 199, 0.1) 100%)'
    },
    royal: {
      name: 'Royal',
      primary: '#7c2d12',
      secondary: '#a21caf',
      accent: '#7c3aed',
      background: 'linear-gradient(135deg, rgba(124, 45, 18, 0.05) 0%, rgba(162, 28, 175, 0.1) 100%)'
    }
  }

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

  // Apply theme to CSS variables
  useEffect(() => {
    const theme = themes[currentTheme]
    const root = document.documentElement
    root.style.setProperty('--primary', theme.primary)
    root.style.setProperty('--secondary', theme.secondary)
    root.style.setProperty('--accent', theme.accent)
    
    // Update the hero background
    const heroElement = document.querySelector('.hero')
    if (heroElement) {
      heroElement.style.background = theme.background
    }
  }, [currentTheme])

  const changeTheme = (themeKey) => {
    setCurrentTheme(themeKey)
    setShowThemePicker(false)
  }

  return (
    <>
      {/* Theme Switcher - positioned absolutely */}
      <div style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 1000
      }}>
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setShowThemePicker(!showThemePicker)}
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
              color: 'var(--primary)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.1)'
              e.target.style.background = 'rgba(255, 255, 255, 1)'
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)'
              e.target.style.background = 'rgba(255, 255, 255, 0.9)'
            }}
            aria-label="Change theme"
          >
            <Palette size={24} />
          </button>

          {showThemePicker && (
            <div style={{
              position: 'absolute',
              top: '60px',
              right: '0',
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '16px',
              padding: '16px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
              minWidth: '250px',
              animation: 'fadeInDown 0.3s ease'
            }}>
              <h3 style={{
                margin: '0 0 12px 0',
                fontSize: '14px',
                fontWeight: '600',
                color: 'var(--primary)'
              }}>
                Choose Theme
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px'
              }}>
                {Object.entries(themes).map(([key, theme]) => (
                  <button
                    key={key}
                    onClick={() => changeTheme(key)}
                    style={{
                      position: 'relative',
                      padding: '12px',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      background: theme.background,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.05)'
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.6)'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)'
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '8px'
                    }}>
                      <span style={{
                        fontSize: '12px',
                        fontWeight: '500',
                        color: '#333'
                      }}>
                        {theme.name}
                      </span>
                      {currentTheme === key && (
                        <Check size={16} style={{ color: '#333' }} />
                      )}
                    </div>
                    <div style={{
                      display: 'flex',
                      gap: '4px'
                    }}>
                      <div style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: theme.primary,
                        border: '1px solid rgba(255, 255, 255, 0.5)'
                      }} />
                      <div style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: theme.secondary,
                        border: '1px solid rgba(255, 255, 255, 0.5)'
                      }} />
                      <div style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: theme.accent,
                        border: '1px solid rgba(255, 255, 255, 0.5)'
                      }} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Original Hero Section */}
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
              <a href="https://drive.google.com/file/d/1xSehp2aTZ7tuT3w-lANk9OUpQ1k6kpyK/view" className="btn">
                My Resume
              </a>
              <a href="#projects" className="btn btn-outline">
                View Projects
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/rohan-singh-8872322b8/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a href="https://leetcode.com/u/Rohan_s21/" className="social-icon" aria-label="LeetCode">
                <SiLeetcode />
              </a>
              <a
                href="https://github.com/Rohs21"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://x.com/Skull278458"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <FaXTwitter />
              </a>
              <a href="mailto:rohans212004@gmail.com" className="social-icon" aria-label="Email">
                <FaEnvelope />
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

      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}

export default Hero