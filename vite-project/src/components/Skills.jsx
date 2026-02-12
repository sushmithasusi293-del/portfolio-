// export default function Skills() {
//   return (
//     <section id="skills" className="section">
//       <h2>Skills</h2>

//       <div className="grid">
//         <div className="card">HTML</div>
//         <div className="card">CSS</div>
//         <div className="card">JavaScript</div>
//         <div className="card">React</div>
//         <div className="card">Node.js</div>
//         <div className="card">Express.js</div>
//         <div className="card">MongoDB</div>
//         <div className="card">Git</div>
//       </div>
//     </section>
//   );
// }
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit 
} from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      <div className="grid">
        <div className="card"><FaHtml5 /> HTML</div>
        <div className="card"><FaCss3Alt /> CSS</div>
        <div className="card"><FaJs /> JavaScript</div>
        <div className="card"><FaReact /> React</div>
        <div className="card"><FaNodeJs /> Node.js</div>
        <div className="card"><SiExpress /> Express.js</div>
        <div className="card"><SiMongodb /> MongoDB</div>
        <div className="card"><FaGit /> Git</div>
      </div>
    </section>
  );
}

