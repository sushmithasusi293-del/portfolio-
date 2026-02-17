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
          <a href="mailto:sushmithasusi293@gmail.com">
            sushmithasusi293@gmail.com
          </a>
        </div>

        <div className="contact-card">
          <div className="icon-circle">
            <FaPhone />
          </div>
          <h3>Phone</h3>
          <a href="tel:6382444517">
            6382444517
          </a>
        </div>

        <div className="contact-card">
          <div className="icon-circle">
            <FaGithub />
          </div>
          <h3>GitHub</h3>
          <a 
            href="https://github.com/sushmithasusi293-del" 
            target="_blank" 
            rel="noreferrer"
          >
            github.com/sushmitha
          </a>
        </div>

        <div className="contact-card">
          <div className="icon-circle">
            <FaLinkedin />
          </div>
          <h3>LinkedIn</h3>
          <a 
            href="https://linkedin.com/in/Sushmithasusi" 
            target="_blank" 
            rel="noreferrer"
          >
            linkedin.com/in/sushmitha
          </a>
        </div>

      </div>
    </section>
  );
}
