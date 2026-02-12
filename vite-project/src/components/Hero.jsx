// export default function Hero() {
//   return (
//     <section className="hero">
//       <img src="https://i.pravatar.cc/200?img=5" alt="profile" />

//       <h1>Hi, I'm <span>Sushmitha K</span></h1>

//       <p>MERN Stack Developer</p>

//       <div className="buttons">
//         <a href="#projects" className="primary">View Projects</a>
//         <a href="/resume.pdf" className="secondary">Download CV</a>
//       </div>
//     </section>
//   );
// }
import { FaDownload, FaEye } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero">
      <img src="https://i.pravatar.cc/200?img=5" alt="profile" />

      <h1>Hi, I'm <span>Sushmitha K</span></h1>

      <p>MERN Stack Developer</p>

      <div className="buttons">
        <a href="#projects" className="primary">
          <FaEye /> View Projects
        </a>

        <a href="/resume.pdf" className="secondary">
          <FaDownload /> Download CV
        </a>
      </div>
    </section>
  );
}
