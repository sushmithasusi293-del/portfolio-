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
            <div className="icon-skill"><FaHtml5 /><span>HTML</span></div>
            <div className="icon-skill"><FaCss3Alt /><span>CSS</span></div>
            <div className="icon-skill"><FaJs /><span>JavaScript</span></div>
            <div className="icon-skill"><FaReact /><span>React</span></div>
            <div className="icon-skill"><FaNodeJs /><span>Node.js</span></div>
            <div className="icon-skill"><SiExpress /><span>Express</span></div>
            <div className="icon-skill"><SiMongodb /><span>MongoDB</span></div>
            <div className="icon-skill"><FaGit /><span>Git</span></div>
          </div>
        </div>

        {/* Soft */}
        <div className="skills-block">
          <h3>Soft Skills</h3>

          <div className="skills-grid">
            <div className="icon-skill"><FaBrain /><span>Problem Solving</span></div>
            <div className="icon-skill"><FaUsers /><span>Team Player</span></div>
            <div className="icon-skill"><FaSyncAlt /><span>Adaptable</span></div>
            <div className="icon-skill"><FaClock /><span>Time Management</span></div>
            <div className="icon-skill"><FaBolt /><span>Quick Learner</span></div>
          </div>
        </div>

      </div>
    </section>
  );
}
