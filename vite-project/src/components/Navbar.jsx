
import { FaUser, FaLaptopCode, FaProjectDiagram, FaEnvelope, FaMoon, FaSun } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", dark);
  }, [dark]);

  return (
    <nav className="navbar">
      <h2>Sushmitha K</h2>
      <button className="theme-toggle" onClick={() => setDark(!dark)}>
        {/* {dark ? <FaSun /> : <FaMoon />} */}
      </button>
      <ul>
        <li><a href="#about"><FaUser /> About</a></li>
        <li><a href="#skills"><FaLaptopCode /> Skills</a></li>
        <li><a href="#projects"><FaProjectDiagram /> Projects</a></li>
        <li><a href="#contact"><FaEnvelope /> Contact</a></li>
      </ul>
    </nav>
  );
}
