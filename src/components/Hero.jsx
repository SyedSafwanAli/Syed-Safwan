// src/components/Hero.jsx

import React from 'react';
// 🌟 IMPORTANT: This path must be correct based on your file structure 🌟
import heroImage from '../assets/images/image-removebg-preview.webp'; 

function Hero({ toggleAppointmentModal }) {
  return (
    <section className="hero" id="home">
      {/* IMAGE AT TOP (Mobile Order 1) */}
      <div className="img-wrapper">
        <img src={heroImage} alt="me" />
      </div>

      {/* LEFT CONTENT (Mobile Order 2) */}
      <div className="hero-left">
        <div className="intro"><i className="fa-solid fa-code"></i> Web Developer</div>
        <h1>
          {' '}
          Hi, I'm <span>Syed Safwan</span>
          <br /> A Creative Web Developer{' '}
        </h1>
        <div className="tagline"> I build modern and responsive websites. </div>
        <div className="buttons">
          <button className="btn btn-primary" onClick={toggleAppointmentModal}>Hire Me</button>
          <button className="btn btn-outline" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>View My Work</button>
        </div>
      </div>

      {/* RIGHT CONTENT (Mobile Order 3) */}
      <div className="hero-right">
        <div className="tab">
          <h3>2+</h3>
          <p>Years Experience</p>
        </div>
        <div className="tab">
          <h3>30+</h3>
          <p>Projects Completed</p>
        </div>
        <div className="tab">
          <h3>17+</h3>
          <p>Happy Clients</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;