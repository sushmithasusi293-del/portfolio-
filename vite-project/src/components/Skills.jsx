import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit,
  FaBrain, FaUsers, FaSyncAlt, FaBolt
} from "react-icons/fa";

import { SiExpress, SiMongodb, SiBootstrap } from "react-icons/si";
import { MdApi } from "react-icons/md";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      <div className="skills-wrapper">

        {/* TECHNICAL */}
        <div className="skills-block">
          <h3>Technical Skills</h3>

          <div className="skills-list tech-list">
            <div className="skill-bar"><FaHtml5 /> HTML</div>
            <div className="skill-bar"><FaCss3Alt /> CSS</div>
            <div className="skill-bar"><FaJs /> JavaScript</div>
            <div className="skill-bar"><FaReact /> React</div>
            <div className="skill-bar"><FaNodeJs /> Node.js</div>
            <div className="skill-bar"><SiExpress /> Express</div>
            <div className="skill-bar"><SiMongodb /> MongoDB</div>
            <div className="skill-bar"><SiBootstrap /> Bootstrap</div>
            <div className="skill-bar"><MdApi /> REST API</div>
            <div className="skill-bar"><FaGit /> Git/GitHub</div>
          </div>
        </div>

        {/* SOFT */}
        <div className="skills-block">
          <h3>Soft Skills</h3>

          <div className="skills-list soft-list">
            <div className="skill-bar"><FaBrain /> Problem Solving</div>
            <div className="skill-bar"><FaUsers /> Self Motivation</div>
            <div className="skill-bar"><FaSyncAlt /> Adaptable</div>
            <div className="skill-bar"><FaBolt /> Team Collaboration</div>
          </div>
        </div>

      </div>
    </section>
  );
}
