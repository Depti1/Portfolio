import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 text-primary fw-bold margin-top-120px">Contact Me</h2>

      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg rounded-4 p-4">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">Name</label>
                <input
                  type="text"
                  className="form-control rounded-pill"
                  id="name"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  className="form-control rounded-pill"
                  id="email"
                  placeholder="you@example.com"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-semibold">Message</label>
                <textarea
                  className="form-control rounded"
                  id="message"
                  rows="5"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100 rounded-pill">
                Send Message
              </button>
            </form>

            <div className="text-center mt-4">
              <p className="fw-semibold mb-2">Or connect with me:</p>
              <div className="d-flex justify-content-center gap-4 fs-4">
                <a
                  href="https://linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noreferrer"
                  className="text-dark"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;



