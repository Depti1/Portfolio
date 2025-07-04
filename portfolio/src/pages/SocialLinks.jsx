import React from "react";

import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const links = [
  {
    icon: <FaGithub size={32} />, name: "GitHub", url: "https://github.com/Depti1",
    color: "#333", bg: "#f0f0f0", hoverBg: "#dcdcdc"
  },
  {
    icon: <FaLinkedin size={32} />, name: "LinkedIn", url: "www.linkedin.com/in/deepti-soni-aa9565236",
    color: "#0e76a8", bg: "#e6f2ff", hoverBg: "#cbe0ff"
  },
  {
    icon: <FaInstagram size={32} />, name: "Instagram", url: "https://instagram.com/yourusername",
    color: "#e1306c", bg: "#fff0f5", hoverBg: "#ffd6e8"
  },
  {
    icon: <FaEnvelope size={32} />, name: "Email", url: "mailto:deeptisoni0208@gmail.com",
    color: "#c71610", bg: "#fdecea", hoverBg: "#ffdad4"
  },
];

export default function SocialLinks() {
  return (
    <motion.section 
      className="container-fluid py-5" 
      style={{ marginTop:"200px",paddingTop: "20px", background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-5">
        <h2 className="fw-bold text-primary display-5">🌐 Connect with Me</h2>
        <p className="text-muted">Click on a card to visit my social profiles</p>
      </div>

      <div className="row g-4 justify-content-center">
        {links.map((link, index) => (
          <motion.div
            key={index}
            className="col-sm-6 col-md-4 col-lg-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6, type: "spring" }}
            whileHover={{ scale: 1.08 }}
          >
            <a
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none"
            >
              <div
                className="p-4 rounded-4 shadow text-center h-100 d-flex flex-column justify-content-center align-items-center"
                style={{
                  backgroundColor: link.bg,
                  color: link.color,
                  transition: "all 0.4s ease",
                  cursor: "pointer",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = link.hoverBg;
                  e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = link.bg;
                  e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
                }}
              >
                {link.icon}
                <h5 className="mt-3 fw-semibold">{link.name}</h5>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
