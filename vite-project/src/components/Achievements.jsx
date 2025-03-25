import { FaTrophy, FaCode, FaRankingStar, FaUsers } from "react-icons/fa6"
import "./Achievements.css"

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Coding Proficiency",
      description: "Solved 300+ problems across coding platforms like LeetCode and CodeChef.",
      icon: <FaCode />,
    },
    {
      id: 2,
      title: "Hackathon Winner",
      description: "3rd Rank Winner of Snap-AR Quiz Hackathon - Mumbai.",
      icon: <FaTrophy />,
    },
    {
      id: 3,
      title: "CodeChef Ranking",
      description: "Institute Rank Top 5 in CodeChef over all the Students.",
      icon: <FaRankingStar />,
    },
    {
      id: 4,
      title: "MHT-CET 2022",
      description: "Secured rank in Top 15% among 400000+ students in MHT-CET 2022 engineering entrance exam.",
      icon: <FaRankingStar />,
    },
    {
      id: 5,
      title: "ISKCON Technical Team",
      description: "Working as a part of Technical Team & Social-Media manager of ISKCON since 2022.",
      icon: <FaUsers />,
    },
  ]

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <h2 className="section-title">Achievements</h2>

        <div className="achievements-grid">
          {achievements.map((achievement) => (
            <div className="achievement-card" key={achievement.id}>
              <div className="achievement-icon">{achievement.icon}</div>
              <div className="achievement-content">
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements

