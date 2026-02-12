

// export default function Navbar() {
//   return (
//     <nav className="navbar">
//       <h2>Sushmitha K</h2>
//       <ul>
//         <li><a href="#about">About</a></li>
//         <li><a href="#skills">Skills</a></li>
//         <li><a href="#projects">Project</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>
//     </nav>
//   );
// }
import { FaUser, FaLaptopCode, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>Sushmitha K</h2>
      <ul>
        <li><a href="#about"><FaUser /> About</a></li>
        <li><a href="#skills"><FaLaptopCode /> Skills</a></li>
        <li><a href="#projects"><FaProjectDiagram /> Project</a></li>
        <li><a href="#contact"><FaEnvelope /> Contact</a></li>
      </ul>
    </nav>
  );
}
