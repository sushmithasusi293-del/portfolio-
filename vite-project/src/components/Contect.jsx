// export default function Contact() {
//   return (
//     <section id="contact" className="section">
//       <h2>Contact</h2>

//       <div className="grid">
//         <div className="card">
//           <h4>Email</h4>
//           <p>sushmithasusi293@gmail.com</p>
//         </div>

//         <div className="card">
//           <h4>Phone</h4>
//           <p>6382444517</p>
//         </div>

//         <div className="card">
//           <h4>Location</h4>
//           <p>Coimbatore, Tamil Nadu</p>
//         </div>
//       </div>
//     </section>
//   );
// }
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>

      <div className="grid">
        <div className="card">
          <h4><FaEnvelope /> Email</h4>
          <p>sushmithasusi293@gmail.com</p>
        </div>

        <div className="card">
          <h4><FaPhone /> Phone</h4>
          <p>6382444517</p>
        </div>

        <div className="card">
          <h4><FaMapMarkerAlt /> Location</h4>
          <p>Coimbatore, Tamil Nadu</p>
        </div>
      </div>
    </section>
  );
}
