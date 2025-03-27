"use client";

import React, { useState } from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, 
  FaDatabase, FaGitAlt, FaGithub, FaNpm, FaCode, 
  FaLaptopCode, FaNetworkWired, FaUserFriends, FaCogs
} from "react-icons/fa";
import {
  SiCplusplus, SiTypescript, SiTailwindcss, SiExpress, 
  SiRedux, SiRecoil, SiPostgresql, SiMongodb, 
  SiPostman
} from "react-icons/si";

const technicalSkills = [
  {
    category: "Languages",
    skills: [
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "Java", icon: FaJava, color: "#E41B23" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "HTML", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Recoil", icon: SiRecoil, color: "#3578E5" },
    ],
  },
  {
    category: "Developer Tools",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F1502F" },
      { name: "GitHub", icon: FaGithub, color: "#181717" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "NPM", icon: FaNpm, color: "#CB3837" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "SQL", icon: FaDatabase, color: "#4479A1" },
    ],
  }
];

const otherSkills = [
  {
    category: "Soft Skills",
    skills: [
      { name: "Problem Solving", icon: FaCode, color: "#4A90E2" },
      { name: "Team Collaboration", icon: FaUserFriends, color: "#2ECC71" },
      { name: "Communication", icon: FaNetworkWired, color: "#9B59B6" },
      { name: "Adaptability", icon: FaCogs, color: "#F39C12" },
    ]
  },
  {
    category: "Professional Skills",
    skills: [
      { name: "Software Engineering", icon: FaLaptopCode, color: "#3498DB" },
      { name: "Object Oriented Programming", icon: FaCode, color: "#E74C3C" },
      { name: "Database Management", icon: FaDatabase, color: "#1ABC9C" },
      { name: " Data Structure and Algorithm", icon: FaCogs, color: "#34495E" },
    ]
  }
  
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("technical");

  const renderSkillCards = (skills) => (
    <div className="skills-grid">
      {skills.map((category, catIndex) => (
        <div key={catIndex} className="skill-category">
          <h3 className="category-title">{category.category || "Skills"}</h3>
          <div className="skills-list">
            {(category.skills || skills).map((skill, skillIndex) => {
              const SkillIcon = skill.icon;
              return (
                <div key={skillIndex} className="skill-card">
                  <div 
                    className="skill-icon-wrapper"
                    style={{ 
                      backgroundColor: skill.color ? skill.color + '20' : 'rgba(255,255,255,0.1)', 
                      color: skill.color || '#6B7280' 
                    }}
                  >
                    <SkillIcon className="skill-icon" />
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">Professional Skills</h2>
        <p className="skills-description">
          Continuously evolving and mastering technologies to create exceptional digital solutions
        </p>

        <div className="skills-tabs">
          <button
            className={`tab-btn ${activeTab === "technical" ? "active" : ""}`}
            onClick={() => setActiveTab("technical")}
          >
            Technical Skills
          </button>
          <button
            className={`tab-btn ${activeTab === "other" ? "active" : ""}`}
            onClick={() => setActiveTab("other")}
          >
            Other Skills
          </button>
        </div>

        <div className="skills-content">
          {activeTab === "technical" 
            ? renderSkillCards(technicalSkills)
            : renderSkillCards(otherSkills)}
        </div>
      </div>
    </section>
  );
};

export default Skills;

