import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        {/* LEFT */}
        <div className="hero-left">
          <h4>Hello, It's Me</h4>

          <h1>
            Sushmitha K
          </h1>

          <h3>
            And I'm a <span>MERN Stack Developer</span>
          </h3>

          <p>
            I build responsive websites and scalable web applications.
            Passionate about creating modern UI and solving real world problems.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>

            <a href="/resume.pdf" className="btn-outline">
              <FaDownload /> Download CV
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>

            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <div className="image-wrapper">
            <img src="https://i.pravatar.cc/300?img=5" alt="profile" />
          </div>
        </div>

      </div>
    </section>
  );
}
