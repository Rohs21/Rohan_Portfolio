"use client"

import { useState } from "react"
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa"
import {  FaXTwitter } from "react-icons/fa6";
import "./Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send the form data to a server
    console.log("Form submitted:", formData)
    setFormSubmitted(true)

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    // Reset submission status after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false)
    }, 5000)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Feel free to reach out to me for any questions or opportunities.</p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:rohans212004@gmail.com">rohans212004@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaPhone />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>
                    <a href="tel:+917843032325">+91-7843032325</a>
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Pune, Maharashtra, India</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/rohan-singh-8872322b8/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Rohs21"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaGithub />
              </a>
          <a
            href="https://x.com/Skull278458"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <FaXTwitter />
          </a>
          <a href="mailto:rohans212004@gmail.com" className="social-link" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
          </div>

          <div className="contact-form">
            <h3>Send Me a Message</h3>

            {formSubmitted && <div className="form-success">Message sent successfully! I'll get back to you soon.</div>}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

