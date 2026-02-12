export default function Education() {
  return (
    <section id="education" className="section">
      <h2>Education</h2>

      {/* College */}
      <div className="card">
        <h3>Bachelor of Computer Science with Data Analytics</h3>
        <p>Dr.N.G.P Arts and Science College, Coimbatore</p>
        <p>2022 – 2025</p>
        <p><strong>CGPA: 8.9</strong></p>
      </div>

      {/* MERN Course */}
      <div className="card">
        <h3>MERN Stack Development</h3>
        <p>AITECH Academy</p>
        <p>
          Completed a MERN Stack Development course with hands-on experience
          in building full-stack web applications.
        </p>
        <p>
          Gained practical skills in MongoDB, Express.js, React.js,
          and Node.js by developing responsive and dynamic solutions.
        </p>
        <p>
          Built and deployed multiple real-world projects
          using modern JavaScript.
        </p>
      </div>

    </section>
  );
}
