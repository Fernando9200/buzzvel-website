import React from 'react';
import './Timeline.css';

function Timeline() {
  return (
    <div className="timeline-container">
      <div className="timeline">
        <div className="timeline-bar">
          <div className="year">2011</div>
          <div className="year">2012</div>
          <div className="year">2013</div>
          <div className="year">2014</div>
          <div className="year">2015</div>
        </div>
        <div className="timeline-entries">
          <div className="entry entry-top" style={{ left: '-7%' }}>
            <div className="entry-content">
              <h3>Company Name</h3>
              <p>Country Name</p>
            </div>
          </div>
          <div className="entry entry-bottom" style={{ left: '17%' }}>
            <div className="entry-content">
              <h3>Company Name</h3>
              <p>Country Name</p>
            </div>
          </div>
          <div className="entry entry-top" style={{ left: '41%' }}>
            <div className="entry-content">
              <h3>Company Name</h3>
              <p>Country Name</p>
            </div>
          </div>
          <div className="entry entry-bottom" style={{ left: '65%' }}>
            <div className="entry-content">
              <h3>Company Name</h3>
              <p>Country Name</p>
            </div>
          </div>
          <div className="entry entry-top" style={{ left: '89%' }}>
            <div className="entry-content">
              <h3>Company Name</h3>
              <p>Country Name</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
