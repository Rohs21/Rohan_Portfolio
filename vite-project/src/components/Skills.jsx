"use client"

import { useState } from "react"
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaCode,
} from "react-icons/fa"
import { SiVscode, SiVisualstudio } from "react-icons/si";
import {
  SiCplusplus,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiRedux,
  SiRecoil,
  SiPostgresql,
  SiMongodb,
  SiPostman,
} from "react-icons/si"

import "./Skills.css"

const Skills = () => {
  const [activeTab, setActiveTab] = useState("technical")

  const technicalSkills = {
    Languages: [
      { name: "C++", icon: <SiCplusplus /> },
      { name: "Java", icon: <FaJava /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
    ],
    Frameworks: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "Node.js", icon: <FaNodeJs /> },
    ],
    Libraries: [
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "React Router", icon: <FaReact /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Recoil", icon: <SiRecoil /> },
    ],
    "Developer Tools": [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Visual Studio", icon: <SiVisualstudio /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "NPM", icon: <FaNpm /> },
    ],
    Databases: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "SQL", icon: <FaDatabase /> },
    ],
  }

  const otherSkills = [
    { name: "Data Structures", icon: <FaCode /> },
    { name: "Algorithms", icon: <FaCode /> },
    { name: "Object Oriented Programming", icon: <FaCode /> },
    { name: "Database Management", icon: <FaDatabase /> },
    { name: "Software Engineering", icon: <FaCode /> },
    { name: "Problem Solving", icon: <FaCode /> },
    { name: "Team Collaboration", icon: <FaCode /> },
    { name: "Communication", icon: <FaCode /> },
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
            <div className="skills-categories">
              {Object.entries(technicalSkills).map(([category, skills]) => (
                <div className="skill-category" key={category}>
                  <h3 className="category-title">{category}</h3>
                  <div className="skills-grid">
                    {skills.map((skill, index) => (
                      <div className="skill-box" key={index}>
                        <div className="skill-icon">{skill.icon}</div>
                        <h4 className="skill-name">{skill.name}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="other-skills-grid">
              {otherSkills.map((skill, index) => (
                <div className="skill-box" key={index}>
                  <div className="skill-icon">{skill.icon}</div>
                  <h4 className="skill-name">{skill.name}</h4>
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
