// File: src/pages/Resume.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaAward, FaCertificate } from "react-icons/fa";

import aws from "../assets/aws.png";
import cisco from "../assets/cisco.png";
import zscaler from "../assets/Zscaler.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

export default function Education() {
  return (
    <section className="container py-5 px-4 my-4 rounded-4 shadow-lg" style={{ background: "linear-gradient(to right, #667eea, #764ba2)" }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        
      </motion.div>

      {/* Education Section */}
      <div className="mb-5">
        <motion.h4 className="text-dark mb-4 mt-5 border-bottom pb-2">🎓 Education</motion.h4>
        <div className="row g-4">
          {[{
            degree: "B.Tech – Computer Science Engineering",
            place: "Baderia Global Group of Institute",
            duration: "2022 – 2025",
            detail: "CGPA: 8.5",
          },
          {
            degree: "Senior Secondary (PCM)",
            place: "Ashoka Hall Senior Secondary School",
            duration: "2021",
            detail: "Percentage: 87%"
          }].map((edu, i) => (
            <div className="col-md-6" key={i}>
              <motion.div className="card h-100 border-0 rounded-4 shadow" variants={fadeUp} custom={i} initial="hidden" animate="visible"
                style={{
                  background: "linear-gradient(to right,rgb(129, 167, 214),rgb(172, 141, 229))",
                  color: "#fff",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease"
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.03)" }}
                onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)" }}
              >
                <div className="card-body">
                  <h5 className="card-title fw-semibold">{edu.degree}</h5>
                  <p className="card-text">{edu.place} | {edu.duration} <br /> <strong>{edu.detail}</strong></p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
       <div className="mb-5">
        <motion.h4 className="text-dark mb-4 border-bottom pb-2">💼 Experience</motion.h4>
        <div className="row g-4">
          {[{
            title: "Web Development Intern",
            place: "Bharat Intern",
            date: "Jan 2024 – June 2024"
          }, {
            title: "NGO Intern",
            place: "Remote",
            date: "May 2025"
          }].map((exp, i) => (
            <div className="col-md-6" key={i}>
              <motion.div className="card h-100 border-0 shadow rounded-4 text-white" variants={fadeUp} custom={i + 2} initial="hidden" animate="visible"
                style={{
                  background: "linear-gradient(to right,rgb(129, 167, 214),rgb(172, 141, 229))",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease"
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.03)" }}
                onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)" }}
              >
                <div className="card-body">
                  <h5 className="card-title fw-semibold">{exp.title}</h5>
                  <p className="card-text">{exp.place} | {exp.date}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      {/* Certifications */}
      <div className="mb-5">
        <motion.h4 className="text-dark mb-4 border-bottom pb-2">📜 Certifications</motion.h4>
        <div className="row g-4">
          {[{
            title: "AWS Cloud Foundation",
            issuedBy: "Amazon Web Services",
            date: "May 2022",
            link: "https://drive.google.com/file/d/1AXCCCw7796Y9DXw8USSejjcA4U9tpX9J/view?usp=drive_link",
            image: aws
          }, {
            title: "Introduction to Networks",
            issuedBy: "Zscaler Networking",
            date: "Feb 2024",
            link: "https://drive.google.com/file/d/1bqn6RuCJEb7uyNLhquHEgiPYkhxjqQhc/view?usp=sharing",
            image: zscaler
          }, {
            title: "Introduction to Networks",
            issuedBy: "Cisco Networking",
            date: "Feb 2024",
            link: "https://drive.google.com/file/d/1POZqsLq8O23x_yKvFj_uAwa3sVv3m9b4/view?usp=drive_link",
            image: cisco
          }].map((cert, i) => (
            <div className="col-md-4" key={i}>
              <motion.div className="card h-100 shadow-sm border-0 rounded-4" variants={fadeUp} custom={i + 4} initial="hidden" animate="visible">
                <img src={cert.image} className="card-img-top rounded-top" alt={cert.title} style={{ height: "150px", objectFit: "contain" }} />
                <div className="card-body">
                  <h5 className="card-title fw-semibold">{cert.title}</h5>
                  <p className="card-text text-muted small">
                    <strong>Issued by:</strong> {cert.issuedBy} <br />
                    <strong>Date:</strong> {cert.date}
                  </p>
                  <a href={cert.link} className="btn btn-outline-primary btn-sm rounded-pill" target="_blank" rel="noreferrer">
                    <FaCertificate className="me-1" /> View Certificate
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div>
        <motion.h4 className="text-dark mb-4 border-bottom pb-2">🏆 Achievements</motion.h4>
        <ul className="list-group list-group-flush">
          {["Winner - Intercollege Hackathon 2023", "Organized Women in Tech Webinar at DAY Foundation", "Selected as College Top Performer in Java Projects"].map((item, i) => (
            <motion.li
              key={i}
              className="list-group-item bg-light rounded mb-2"
              custom={i + 8}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <FaAward className="text-warning me-2" /> {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
