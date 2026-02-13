import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit
} from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { FaBrain, FaUsers, FaSyncAlt, FaClock, FaBolt } from "react-icons/fa";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      <div className="skills-main">

        {/* Technical */}
        <div className="skills-block">
          <h3>Technical Skills</h3>

          <div className="skills-grid">
            <div className="skill-card"><FaHtml5 /> HTML</div>
            <div className="skill-card"><FaCss3Alt /> CSS</div>
            <div className="skill-card"><FaJs /> JavaScript</div>
            <div className="skill-card"><FaReact /> React</div>
            <div className="skill-card"><FaNodeJs /> Node.js</div>
            <div className="skill-card"><SiExpress /> Express</div>
            <div className="skill-card"><SiMongodb /> MongoDB</div>
            <div className="skill-card"><FaGit /> Git</div>
          </div>
        </div>

        {/* Soft */}
        <div className="skills-block">
          <h3>Soft Skills</h3>

          <div className="skills-grid">
            <div className="skill-card"><FaBrain /> Problem Solving</div>
            <div className="skill-card"><FaUsers /> Team Player</div>
            <div className="skill-card"><FaSyncAlt /> Adaptable</div>
            <div className="skill-card"><FaClock /> Time Management</div>
            <div className="skill-card"><FaBolt /> Quick Learner</div>
          </div>
        </div>

      </div>
    </section>
  );
}
