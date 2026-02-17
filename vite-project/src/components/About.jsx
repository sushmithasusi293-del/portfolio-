import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>

      <div className="card about-card">
        <p>
          I am a motivated MERN Stack Developer with hands-on experience
          in building responsive and scalable web applications.

          I enjoy transforming real-world problems into digital solutions.
          I have worked with React for frontend and Node.js & Express
          for backend development.

          I am a quick learner, adaptable, and a strong team player
          aiming to deliver high-quality software.
        </p>
      </div>

      {/* 🔥 CONTACT INFO WITH ICONS */}
      <div className="about-info">
        <div className="info-box">
          <div className="info-icon">
            <MdEmail />
          </div>
          <h4>Email</h4>
          <p>sushmithasusi293@gmai.com</p>
        </div>

        <div className="info-box">
          <div className="info-icon">
            <FaPhoneAlt />
          </div>
          <h4>Phone</h4>
          <p>6382444517</p>
        </div>

        <div className="info-box">
          <div className="info-icon">
            <FaMapMarkerAlt />
          </div>
          <h4>Location</h4>
          <p>puliyampatti, Tamil Nadu</p>
        </div>
      </div>
    </section>
  );
}
