// File: src/pages/About.jsx
import "animate.css";
import profilePic from "../assets/deepti.png";
import htmlImg from "../assets/html.png";
import cssImg from "../assets/css.png";
import jsImg from "../assets/js.png";
import reactImg from "../assets/react.png";
import awsImg from "../assets/aws.png";
import javaImg from "../assets/java.png";
import mysqlImg from "../assets/mysql.png";
import biImg from "../assets/bi.png";

const About = () => {
  const skillData = [
    { name: "HTML", image: htmlImg },
    { name: "CSS", image: cssImg },
    { name: "JavaScript", image: jsImg },
    { name: "React", image: reactImg },
    { name: "AWS", image: awsImg },
    { name: "Java", image: javaImg },
    { name: "MySQL", image: mysqlImg },
    { name: "Power BI", image: biImg },
  ];

  const cardGradient = [
    "linear-gradient(to right, #ffecd2, #fcb69f)",
    "linear-gradient(to right, #a1c4fd, #c2e9fb)",
    "linear-gradient(to right, #fddb92, #d1fdff)",
    "linear-gradient(to right, #e0c3fc, #8ec5fc)",
    "linear-gradient(to right, #f6d365, #fda085)",
    "linear-gradient(to right, #cfd9df, #e2ebf0)",
    "linear-gradient(to right, #a1c4fd, #c2e9fb)",
    "linear-gradient(to right, #fbc2eb, #a6c1ee)"
  ];

  return (
    <div className="py-5" style={{ background: "linear-gradient(to right, #667eea, #764ba2)" }}>
      {/* Header */}
      <h2 className="text-center text-primary fw-bold  mt-40 animate__animated animate__fadeInDown display-5">
        About Me
      </h2>

      {/* Profile Section */}
      <div className="container">
        <div className="row align-items-center  mb-5 animate__animated animate__fadeInUp animate__delay-1s">
          <div className="col-md-4 text-center mb-3">
            <img
              src={profilePic}
              alt="Deepti"
              className="img-fluid rounded-circle shadow-lg border border-3 border-white"
              style={{ width: "280px", height: "280px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-8">
            <blockquote className="fs-5 fst-italic text-muted">
              "If you want to change the world then first change yourself" <br />
              <span className="fw-bold text-dark">– Deepti Soni</span>
            </blockquote>
            <p className="text-dark">
              Passionate and detail-driven Computer Science graduate with a strong grasp on modern web development, Java-based backend systems, and data analytics tools. Looking to join a dynamic tech team and bring real-world impact through code and innovation.
            </p>
            <a
              href="/resume.pdf"
              download="Deepti_Soni_Resume.pdf"
              className="btn btn-gradient mt-3 px-4 py-2 rounded-pill shadow animate__animated animate__pulse animate__infinite"
              style={{ background: "linear-gradient(45deg, #1d3557, #457b9d)", color: "white" }}
            >
              📄 Download Resume
            </a>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-5 animate__animated animate__fadeInLeft">
          <h3 className="text-secondary fw-semibold mb-4 text-black">🎓 Education</h3>
          <div className="row g-4">
            <div className="col-md-6">
              <div
                className="card border-0 shadow rounded-4 h-100 text-white"
                style={{
                  background: "linear-gradient(to right, #6a11cb, #2575fc)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
                }}
              >
                <div className="card-body">
                  <h5 className="card-title fw-bold">B.Tech – Computer Science Engineering</h5>
                  <p className="card-text mb-1">Baderia Global Group of Institute</p>
                  <p className="card-text mb-1">2022–2025</p>
                  <p className="card-text"><strong>CGPA:</strong> 8.5</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="card border-0 shadow rounded-4 h-100 text-white"
                style={{
                  background: "linear-gradient(to right, #43cea2, #185a9d)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
                }}
              >
                <div className="card-body">
                  <h5 className="card-title fw-bold">12th – PCM</h5>
                  <p className="card-text mb-1">Ashoka Hall Senior Secondary School</p>
                  <p className="card-text mb-1">2021</p>
                  <p className="card-text"><strong>Percentage:</strong> 87%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-5 animate__animated animate__fadeInRight">
          <h3 className="text-secondary fw-semibold mb-4 text-black">🛠️ My Skills</h3>
          <div className="row row-cols-2 row-cols-md-4 g-4">
            {skillData.map((skill, idx) => (
              <div key={idx} className="col">
                <div
                  className="card h-100 text-center border-0 shadow rounded-4 hover-shadow"
                  style={{
                    background: cardGradient[idx % cardGradient.length],
                    transition: "transform 0.3s ease, box-shadow 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.03)";
                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
                  }}
                >
                  <div className="card-body d-flex flex-column align-items-center justify-content-center">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      style={{ width: "60px", height: "60px", objectFit: "contain" }}
                      className="mb-3"
                    />
                    <h6 className="mt-2 fw-semibold text-dark">{skill.name}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hobbies Section */}
        <div className="mb-5 animate__animated animate__fadeInUp animate__delay-1s">
          <h3 className="text-secondary fw-semibold mb-4 text-black font-size 12px">🎨 Hobbies & Interests</h3>
          <ul className="list-group list-group-flush shadow-sm">
            <li className="list-group-item bg-light">🎨 Creating Mandala & Lippan Art</li>
            <li className="list-group-item bg-light">📖 Reading Books</li>
            <li className="list-group-item bg-light">🧒 Cooking</li>
            <li className="list-group-item bg-light">🌍 Exploring cultural & historical destinations</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
