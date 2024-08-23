import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <img src="/path/to/your/image.jpg" alt="Your Name" />
        </div>
        <div className="about-text">
          <p>Hello! I'm [Your Name], a passionate front-end developer with a love for creating clean, efficient, and visually appealing user interfaces.</p>
          <h3>Work Experience</h3>
          <ul>
            <li>Front-End Developer - Company X (2021 - Present)</li>
            <li>UI/UX Designer - Company Y (2019 - 2021)</li>
          </ul>
          <h3>Motivation for Joining Buzzvel</h3>
          <p>I'm excited about the opportunity at Buzzvel because it aligns with my passion for developing innovative digital solutions that make an impact. The company’s focus on creativity, user-centric design, and cutting-edge technology resonates with my own professional values.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
