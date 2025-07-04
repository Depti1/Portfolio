// File: src/pages/Portfolio.jsx
import React from "react";
import { motion } from "framer-motion";

import Bharat from "../assets/Bharat.png";
import api from "../assets/api.png";
import bank from "../assets/bank.png"; // Replace with correct image or use placeholder

const projects = [
  {
    title: "Bharat Bhraman",
    description: "Tour and travel web app to explore Indian destinations with local info.",
    image: Bharat,
    link: "#",
  },
  {
    title: "Jewellery Website",
    description: "Built an API testing-based website using React.",
    image: api,
    link: "#",
  },
  {
    title: "Secure Banking System",
    description: "Core Java + JDBC-based secure bank app with admin & user login.",
    image: bank,
    link: "#",
  },
];

export default function Portfolio() {
  const cardColors = [
    "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
    "linear-gradient(to right, #4568dc, #b06ab3)",
    "linear-gradient(to right, #1e3c72, #2a5298)",
  ];

  return (
    <section className="py-5 mt-5" style={{ background: "linear-gradient(to right, #667eea, #764ba2)" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container"
      >
        <h2 className="fw-bold text-center mb-5 display-5 text-dark">🚀 My Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="col-md-4 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div
                className="card h-100 shadow-lg border-0 text-white"
                style={{
                  background: cardColors[index % cardColors.length],
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                  e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
                }}
              >
                <img
                  src={project.image}
                  className="card-img-top rounded-top"
                  alt={project.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{project.title}</h5>
                  <p className="card-text text-light small">{project.description}</p>
                </div>
                <div className="card-footer bg-transparent border-0 text-end">
                  <a
                    href={project.link}
                    className="btn btn-outline-light btn-sm rounded-pill"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
