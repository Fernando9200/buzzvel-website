import React from 'react';
import './Timeline.css';

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline-bar">
        <div className="year">2011</div>
        <div className="year">2012</div>
        <div className="year">2013</div>
        <div className="year">2014</div>
        <div className="year">2015</div>
        <div className="year">2016</div>
        <div className="year">2017</div>
        <div className="year">Now</div>
      </div>
      <div className="timeline-entries">
        <div className="entry entry-top" style={{ left: '5%' }}>
          <div className="entry-content">
            <h3>Company Name <span>(Designation)</span></h3>
            <p>Country Name</p>
          </div>
        </div>
        <div className="entry entry-bottom" style={{ left: '20%' }}>
          <div className="entry-content">
            <h3>Company Name <span>(Designation)</span></h3>
            <p>Country Name</p>
          </div>
        </div>
        <div className="entry entry-top" style={{ left: '35%' }}>
          <div className="entry-content">
            <h3>Company Name <span>(Designation)</span></h3>
            <p>Country Name</p>
          </div>
        </div>
        <div className="entry entry-bottom" style={{ left: '50%' }}>
          <div className="entry-content">
            <h3>Company Name <span>(Designation)</span></h3>
            <p>Country Name</p>
          </div>
        </div>
        <div className="entry entry-top" style={{ left: '65%' }}>
          <div className="entry-content">
            <h3>Company Name <span>(Designation)</span></h3>
            <p>Country Name</p>
          </div>
        </div>
        <div className="entry entry-bottom" style={{ left: '80%' }}>
          <div className="entry-content">
            <h3>Company Name <span>(Designation)</span></h3>
            <p>Country Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
