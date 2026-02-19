
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects-grid">

        {/* Project 1 */}
        <div className="project-card">
          <img src="/images/pas.jpg" alt="Project" />



          <div className="project-content">
            <h3>Fast Food Ordering Website</h3>
            <p>
              Responsive food ordering application using
              HTML, CSS and Bootstrap with reusable components.
            </p>

            <div className="project-buttons">
              <a href="https://github.com/sushmithasusi293-del/fastfood-.git" target="_blank">
                <FaGithub /> Code
              </a>
              <a href="https://fastfood-5c2v.onrender.com/" target="_blank" className="live">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <img src="/images/ear.jpg" alt="project" />

          <div className="project-content">
            <h3>Online E-Commerce Store</h3>
            <p>
              MERN stack application with authentication,
              product management and REST API integration.
            </p>

            <div className="project-buttons">
              <a href="https://github.com/sushmithasusi293-del/earrings-project.git" target="_blank">
                <FaGithub /> Code
              </a>
 <a href="https://earrings-project.onrender.com" target="_blank" className="live">
                <FaExternalLinkAlt /> Live Demo
              </a>

            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <img src="/images/skin.jpg" alt="project" />

          <div className="project-content">
            <h3>Skincare E-Commerce Platform</h3>
            <p>
              Full-stack beauty store with CRUD operations
              and dynamic product rendering.
            </p>

            <div className="project-buttons">
              <a href="https://github.com/sushmithasusi293-del/skinpractice-.git" target="_blank">
                <FaGithub /> Code
              </a>
              <a href="https://beauty-skin-care.onrender.com" target="_blank" className="live">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
