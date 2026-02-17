import { 
  FaUser, 
  FaLaptopCode, 
  FaProjectDiagram, 
  FaEnvelope, 
  FaGraduationCap 
} from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Sushmitha K</h2>

      <ul>
        <li><a href="#about"><FaUser /> About</a></li>
        <li><a href="#skills"><FaLaptopCode /> Skills</a></li>
        <li><a href="#projects"><FaProjectDiagram /> Projects</a></li>
        <li><a href="#education"><FaGraduationCap /> Education</a></li>
        <li><a href="#contact"><FaEnvelope /> Contact</a></li>
      </ul>
    </nav>
  );
}
