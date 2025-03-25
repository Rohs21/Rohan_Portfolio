import "./About.css"

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-image">
            <div className="image-frame">
              <img src="https://placehold.co/400x500" alt="Rohan Singh" />
            </div>
          </div>

          <div className="about-text">
            <h3>
              Hello, I'm <span className="highlight">Rohan Singh</span>
            </h3>
            <p>
              I am a passionate Computer Engineering student at Zeal College of Engineering and Research, Pune.
              Currently working as a Web Developer and Design Intern at Akash Dayal Groups, I specialize in creating
              responsive and user-friendly web applications.
            </p>
            <p>
              With a strong foundation in Data Structures and Algorithms, I've solved over 300 problems across coding
              platforms like LeetCode and CodeChef. I'm also an active member of Google Developer Groups, where I
              provide guidance on Competitive Programming and DSA.
            </p>
            <p>
              I'm dedicated to continuous learning and applying my skills to create innovative solutions. My goal is to
              leverage technology to solve real-world problems and make a positive impact.
            </p>

            <div className="personal-info">
              <div className="info-item">
                <span className="info-title">Name:</span>
                <span className="info-value">Rohan Singh</span>
              </div>
              <div className="info-item">
                <span className="info-title">Email:</span>
                <span className="info-value">rohans212004@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="info-title">Phone:</span>
                <span className="info-value">+91-7843032325</span>
              </div>
              <div className="info-item">
                <span className="info-title">Location:</span>
                <span className="info-value">Pune, Maharashtra, India</span>
              </div>
            </div>

            <a href="#contact" className="btn">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

