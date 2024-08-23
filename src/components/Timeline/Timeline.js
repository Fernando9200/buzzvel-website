import React from 'react';
import './Timeline.css';

function Timeline() {
  return (
    <section className="timeline">
      <h2>Career Timeline</h2>
      <div className="timeline-container">
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>2023</h3>
            <p>Current Position - Company Name</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>2020</h3>
            <p>Previous Position - Company Name</p>
          </div>
        </div>
        {/* Add more timeline items as needed */}
      </div>
    </section>
  );
}

export default Timeline;