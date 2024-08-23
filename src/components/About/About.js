import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>Your introduction and personal information here.</p>
          <h3>Work Experience</h3>
          <ul>
            <li>Job Title 1 - Company Name (Year - Year)</li>
            <li>Job Title 2 - Company Name (Year - Year)</li>
          </ul>
        </div>
        <div className="about-image">
          <img src="/path/to/your/image.jpg" alt="Your Name" />
        </div>
      </div>
    </section>
  );
}

export default About;