"use client"

import { useState } from "react"
import "./Skills.css"

const Skills = () => {
  const [activeTab, setActiveTab] = useState("technical")

  const technicalSkills = [
    { name: "C++", level: 90 },
    { name: "Java", level: 85 },
    { name: "JavaScript", level: 88 },
    { name: "Python", level: 80 },
    { name: "SQL", level: 75 },
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "Tailwind CSS", level: 85 },
    { name: "React", level: 85 },
  ]

  const otherSkills = [
    { name: "Data Structures", level: 90 },
    { name: "Algorithms", level: 88 },
    { name: "Object Oriented Programming", level: 85 },
    { name: "Database Management", level: 80 },
    { name: "Software Engineering", level: 75 },
    { name: "Problem Solving", level: 92 },
    { name: "Team Collaboration", level: 88 },
    { name: "Communication", level: 85 },
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>

        <div className="skills-tabs">
          <button
            className={`tab-btn ${activeTab === "technical" ? "active" : ""}`}
            onClick={() => setActiveTab("technical")}
          >
            Technical Skills
          </button>
          <button className={`tab-btn ${activeTab === "other" ? "active" : ""}`} onClick={() => setActiveTab("other")}>
            Other Skills
          </button>
        </div>

        <div className="skills-content">
          {activeTab === "technical" ? (
            <div className="skills-grid">
              {technicalSkills.map((skill, index) => (
                <div className="skill-card" key={index}>
                  <div className="skill-info">
                    <h3 className="skill-name">{skill.name}</h3>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="skills-grid">
              {otherSkills.map((skill, index) => (
                <div className="skill-card" key={index}>
                  <div className="skill-info">
                    <h3 className="skill-name">{skill.name}</h3>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Skills

