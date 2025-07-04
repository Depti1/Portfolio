




// File: src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";
import profile from "../assets/deepti.png";
import Typewriter from "typewriter-effect";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Home() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section
      className="min-vh-100 d-flex align-items-center justify-content-center position-relative text-white"
      style={{
        background: "linear-gradient(to right, #667eea, #764ba2)",
        overflow: "hidden",
      }}
    >
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: { value: 60 },
            size: { value: 3 },
            color: { value: "#ffffff" },
            links: { enable: true, color: "#ffffff" },
            move: { enable: true, speed: 1 },
          },
        }}
        className="position-absolute w-100 h-100"
        style={{ zIndex: 0 }}
      />

      {/* Decorative SVG background */}
      <div
        className="position-absolute w-100 h-100"
        style={{
          top: 0,
          left: 0,
          backgroundImage:
            "radial-gradient(circle at top left, rgba(255,255,255,0.2), transparent 50%), radial-gradient(circle at bottom right, rgba(255,255,255,0.1), transparent 70%)",
          zIndex: 1,
        }}
      ></div>

      <motion.div
        className="container text-center p-5 rounded-4 bg-white bg-opacity-10 shadow-lg backdrop-blur position-relative"
        style={{ zIndex: 2 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="mb-4">
          <img
            src={profile}
            alt="Profile"
            className="rounded-circle border border-light shadow-lg mb-3"
            style={{ width: "180px", height: "180px", objectFit: "cover" }}
          />
        </div>
        <h1 className="display-4 fw-bold text-white mb-2">
          Hi, I'm <span className="text-warning">Deepti Soni</span>
        </h1>
        <div className="lead text-light mb-4">
          <Typewriter
            options={{
              strings: [
                "A Passionate CSE Student",
                "Frontend Web Developer",
                "Creative UI Designer",
                "A recent Graduate",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <a href="/portfolio" className="btn btn-warning px-4 py-2 fw-semibold shadow">
            View Portfolio <FaArrowRight className="ms-2" />
          </a>
          <a href="/contact" className="btn btn-outline-light px-4 py-2 fw-semibold">
            Contact Me <FaEnvelope className="ms-2" />
          </a>
        </div>
      </motion.div>

      <div className="position-absolute bottom-0 start-50 translate-middle-x pb-3" style={{ zIndex: 2 }}>
        <p className="text-white small">↓ Scroll down to explore more about me</p>
      </div>
    </section>
  );
}
