import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Get In Touch</h2>

      <div className="contact-grid">

        <div className="contact-card">
          <div className="icon-circle">
            <FaEnvelope />
          </div>
          <h3>Email</h3>
          <p>sushmithasusi293@gmail.com</p>
        </div>

        <div className="contact-card">
          <div className="icon-circle">
            <FaPhone />
          </div>
          <h3>Phone</h3>
          <p>6382444517</p>
        </div>

        <div className="contact-card">
          <div className="icon-circle">
            <FaGithub />
          </div>
          <h3>GitHub</h3>
          <p>https://github.com</p>
        </div>

        <div className="contact-card">
          <div className="icon-circle">
            <FaLinkedin />
          </div>
          <h3>LinkedIn</h3>
          <p>https://linkedin.com</p>
        </div>

      </div>
    </section>
  );
}
