// src/components/AboutSection.jsx

import React from 'react';

function AboutSection() {
  return (
    // Replaced 'class' with 'className'
    <section className="about-section" id="about">
      {/* Image Section */}
      <div className="image-section">
        <div className="main-image">
          {/* Ensure self-closing tag: <img /> */}
          <img src="https://html.webtend.net/noxfolio/assets/images/about/about.jpg" alt="Web Developer" />
        </div>

        <div className="profile-card card1">
          <div className="profile-avatar"><i className="fas fa-code"></i></div>
          <div className="profile-info">
            <div className="profile-name">Frontend Dev</div>
          </div>
          <span className="arrow-icon"><i className="fas fa-arrow-up-right"></i></span>
        </div>

        <div className="profile-card card2">
          <div className="profile-avatar"><i className="fas fa-laptop-code"></i></div>
          <div className="profile-info">
            <div className="profile-name">Web Dev</div>
          </div>
          <span className="arrow-icon"><i className="fas fa-arrow-up-right"></i></span>
        </div>

        <div className="green-dot"></div>
      </div>

      {/* Content Section */}
      <div className="content-wrapper">
        <div className="section-label"><i className="fa-solid fa-asterisk"></i> About Me</div>

        <h2 className="main-heading">
          Web <span className="highlight">Developer</span>
          {/* Ensure self-closing tag: <br /> */}
          <br />
          2+ Years Experience
        </h2>

        <p className="description">I’m a Frontend Web Developer with 2+ years of experience building responsive and modern
          websites. I love turning ideas into clean, interactive designs.
          <br />
          I work with HTML, CSS, JavaScript, React, and WordPress to create fast, SEO-friendly, and user-focused web
          solutions.
        </p>
        <h3>Core Skills</h3>
        <ul className="services-grid">
          <li className="about-service-item">
            <div className="checkmark"></div><span>Frontend Development</span>
          </li>
          <li className="about-service-item">
            <div className="checkmark"></div><span>React &amp; JavaScript</span>
            {/* Note: &nbsp; in HTML often becomes &amp;nbsp; or just a space in JSX if copied directly, but simple text works fine. */}
          </li>
          <li className="about-service-item">
            <div className="checkmark"></div><span>Responsive Design</span>
          </li>
          <li className="about-service-item">
            <div className="checkmark"></div><span>API Integration</span>
          </li>
        </ul>

      </div>
    </section>
  );
}

export default AboutSection;