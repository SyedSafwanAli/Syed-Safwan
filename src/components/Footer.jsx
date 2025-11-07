// src/components/Footer.jsx

import React, { useState } from 'react';
import AppointmentModal from './AppointmentModal';

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  // Logic to calculate the current year (Replaces the inline JS script)
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer>
        <div className="footer-container">

          {/* About */}
          <div className="footer-about">
            <h2>Syed Safwan Ali</h2>
            <p>Frontend Developer passionate about building modern, responsive web applications with clean UI and smooth UX.
              Currently working with <b>TheTechio.com</b> and <b>FreelanceWR in Pakistan</b> as a frontend developer.</p>
            <button onClick={openModal} className="hire-btn">Hire Me</button>
          </div>

          {/* Education & Work */}
          <div className="footer-info">
            <h3>Background</h3>
            <div className="info-item"><i className="fas fa-graduation-cap"></i> Diploma in Software Engineering — Aptech</div>
            <div className="info-item"><i className="fas fa-university"></i> BSCS (Continue) — Virtual University</div>
            <div className="info-item"><i className="fas fa-briefcase"></i> Frontend Developer at
              <a href="https://thetechio.com" target="_blank" rel="noopener noreferrer">TheTechio</a>
            </div>
            <div className="info-item"><i className="fas fa-briefcase"></i> Frontend Developer at
              <a href="https://freelancerinpakistan.com" target="_blank" rel="noopener noreferrer">Freelancer in Pakistan</a>
            </div>
          </div>

          {/* Social Links */}
          <div className="footer-social">
            <h3>Connect</h3>
            <div className="social-links">
              <a href="https://github.com/yourusername" target="_blank" aria-label="GitHub"><i className="fab fa-github"></i></a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://www.instagram.com/USERNAME/" target="_blank" aria-label="Twitter"><i className="fab fa-x-twitter"></i></a>
              <a href="mailto:syedsafwanali8802@gmail.com" aria-label="Email"><i className="fas fa-envelope"></i></a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          &copy; {currentYear} Syed Safwan Ali · All Rights Reserved
        </div>
      </footer>
      <AppointmentModal show={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default Footer;