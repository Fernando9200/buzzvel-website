import './Timeline.css';

function Timeline() {
  return (
    <div className="timeline-container">
      <h2>Projected Career Timeline at Buzzvel</h2>
      <div className="timeline">
        <div className="timeline-bar">
          <div className="year">2024</div>
          <div className="year">2026</div>
          <div className="year">2028</div>
          <div className="year">2030+</div>
        </div>
        <div className="timeline-entries">
          <div id="entry-top-year1" className="entry" style={{ left: '-7.5%' }}>
            <div className="entry-content">
              <h3>Year 1: Laying the Groundwork</h3>
              <p>I’ll get familiar with Buzzvel’s tools and workflows while contributing to key projects alongside my team.</p>
            </div>
          </div>
          <div id="entry-bottom-year2" className="entry entry-bottom" style={{ left: '13.5%' }}>
            <div className="entry-content">
              <h3>Year 2-3: Taking Ownership</h3>
              <p>I’ll start leading small to mid-sized projects and continue sharpen my skills in Buzzvel’s stacks. I’ll also start mentoring newer team members, sharing my knowledge.</p>
            </div>
          </div>
          <div id="entry-top-year3" className="entry entry-top" style={{ left: '34.5%' }}>
            <div className="entry-content">
              <h3>Year 4-5: Stepping into Leadership</h3>
              <p>I aim to step into a leadership or senior developer role, where I can have a greater impact on our projects. My goal is to keep learning and bring fresh ideas to the team, continuously improving our work.</p>
            </div>
          </div>
          <div id="entry-bottom-year4" className="entry entry-bottom" style={{ left: '56%' }}>
            <div className="entry-content">
              <h3>Year 6 and Beyond: Growing Further</h3>
              <p>I envision a strategic role where I shape Buzzvel’s technology and drive long-term growth. I’ll keep learning, mentoring, and leading initiatives that push our boundaries.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
