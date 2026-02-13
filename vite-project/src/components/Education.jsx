
export default function Education() {
  return (
    <section id="education" className="section">
      <h2>Education</h2>

      <div className="edu-wrapper">

        {/* College */}
        <div className="edu-card">
          <h3>Bachelor of Computer Science with Data Analytics</h3>
          <h4>Dr.N.G.P Arts and Science College, Coimbatore</h4>

          <p>Affiliated to Bharathiar University</p>
          <p><strong>CGPA:</strong> 8.9</p>
          <p><strong>Duration:</strong> 2022 – 2025</p>
        </div>

        {/* MERN Course */}
        <div className="edu-card">
          <h3>MERN Stack Development</h3>
          <h4>AITECH Academy</h4>

          <p>
            Gained hands-on experience in full-stack web development
            by building responsive user interfaces using React and JavaScript.
          </p>

          <p>
            Worked on CRUD applications integrated with APIs and
            backend logic using Node.js, Express, and MongoDB.
          </p>

        </div>

      </div>
    </section>
  );
}
