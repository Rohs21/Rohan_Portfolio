"use client";

import React, { useState } from "react";
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
  FaLaptopCode, // Using this instead of SiVisualstudiocode
} from "react-icons/fa";
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
} from "react-icons/si";

import "./Skills.css";

const technicalSkills = [
  {
    category: "Languages",
    skills: [
      { name: "C++", icon: <SiCplusplus /> },
      { name: "Java", icon: <FaJava /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "Node.js", icon: <FaNodeJs /> },
    ],
  },
  {
    category: "Libraries",
    skills: [
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "React Router", icon: <FaReact /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Recoil", icon: <SiRecoil /> },
    ],
  },
  {
    category: "Developer Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "VS Code", icon: <FaLaptopCode /> }, // ✅ Replaced SiVisualstudiocode
      { name: "Postman", icon: <SiPostman /> },
      { name: "NPM", icon: <FaNpm /> },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "SQL", icon: <FaDatabase /> },
    ],
  },
];

const otherSkills = [
  { name: "Data Structures", icon: <FaCode /> },
  { name: "Algorithms", icon: <FaCode /> },
  { name: "Object Oriented Programming", icon: <FaLaptopCode /> },
  { name: "Database Management", icon: <FaDatabase /> },
  { name: "Software Engineering", icon: <FaCode /> },
  { name: "Problem Solving", icon: <FaCode /> },
  { name: "Team Collaboration", icon: <FaCode /> },
  { name: "Communication", icon: <FaCode /> },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("technical");

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>

        {/* Tabs for switching skills */}
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

        {/* Skills Content */}
        <div className="skills-content">
          {activeTab === "technical" ? (
            <div className="skills-categories">
              {technicalSkills.map((categoryData, index) => (
                <div className="skill-category" key={index}>
                  <h3 className="category-title">{categoryData.category}</h3>
                  <div className="skills-grid">
                    {categoryData.skills.map((skill, skillIndex) => (
                      <div className="skill-card" key={skillIndex}>
                        <div className="skill-icon">{skill.icon}</div>
                        <h4 className="skill-name">{skill.name}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="skill-category">
              <div className="skills-grid">
                {otherSkills.map((skill, index) => (
                  <div className="skill-card" key={index}>
                    <div className="skill-icon">{skill.icon}</div>
                    <h4 className="skill-name">{skill.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
