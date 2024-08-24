import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about">
      <div className="particles"></div>
      <div className="about-content">
        <div className="about-header">
          <h2>About Me</h2>
        </div>
        <div className="about-body">
          <div className="about-image">
            <img src="/path/to/your/image.jpg" alt="Your Name" />
          </div>
          <div className="about-text">
            <p>Hello! I'm [Your Name], a passionate front-end developer with a love for creating clean, efficient, and visually appealing user interfaces.</p>
          </div>
        </div>
        <div className="experience-timeline">
          <h3>Experience</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2018</div>
              <div className="timeline-content">
                <h4>Job Title</h4>
                <p>Company Name</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2019-2021</div>
              <div className="timeline-content">
                <h4>Job Title</h4>
                <p>Company Name</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2021-2022</div>
              <div className="timeline-content">
                <h4>Job Title</h4>
                <p>Company Name</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2022-2023</div>
              <div className="timeline-content">
                <h4>Job Title</h4>
                <h5>Company Name</h5>
                <p>Description</p>
              </div>
            </div>
          </div>
        </div>
        <div className="why-buzzvel">
          <h3>Why Buzzvel</h3>
          <div className="buzzvel-text">
            <p>I'm excited about the opportunity at Buzzvel because it aligns with my passion for developing innovative digital solutions that make an impact. The company's focus on creativity, user-centric design, and cutting-edge technology resonates with my own professional values.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;