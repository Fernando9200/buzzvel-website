import './About.css';
import perfilImage from '../../assets/images/perfil.jpg';

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
            <img src={perfilImage} alt="Fernando Carretto" />
          </div>
          <div className="about-text">
            <p>Hello! I&apos;m Fernando, a passionate front-end developer with a love for creating clean, efficient, and visually appealing user interfaces.</p>
          </div>
        </div>
        <div className="experience-chronology">
          <h3 className="experience-title">Experience</h3>
          <div className="chronology">
            <div className="chronology-item">
              <div className="chronology-date">2018-2019</div>
              <div className="chronology-content">
                <h4>Mathematics Tutor</h4>
                <p
            >
              I acted as a Calculus 2 tutor at{" "}
              <a
                className="experience-link"
                href="https://www.linkedin.com/school/univ-federal-do-espirito-santo/"
                target="_blank"
                rel="noreferrer"
              >
                Federal University of Espírito Santo
              </a>
              .
            </p>
              </div>
            </div>
            <div className="chronology-item">
              <div className="chronology-date">2019-2021</div>
              <div className="chronology-content">
                <h4>SEO Content Specialist Freelancer</h4>
                <p
            >
              I worked as a freelancer at{" "}
              <a
                className="experience-link"
                href="https://www.linkedin.com/company/brainly-com/"
                target="_blank"
                rel="noreferrer"
              >
                Brainly
              </a>
              , applying improvements in their online content using Search
              Engine Optimization (SEO).
            </p>
              </div>
            </div>
            <div className="chronology-item">
              <div className="chronology-date">2021-2022</div>
              <div className="chronology-content">
                <h4>Software Developer Intern</h4>
                <p
            >
              I worked as an intern full-stack developer at a Brazilian company
              called{" "}
              <a
                className="experience-link"
                href="https://www.linkedin.com/company/locus-custom-software/"
                target="_blank"
                rel="noreferrer"
              >
                Locus Custom Software
              </a>
              , performing modifications and fixing bugs in web applications
              using React.js and Django and mobile applications using Flutter.
            </p>
              </div>
            </div>
            <div className="chronology-item">
              <div className="chronology-date">2022-Now</div>
              <div className="chronology-content">
                <h4>Frontend Developer</h4>
                <p
            >
              I currently work as a Frontend Developer at{" "}
              <a
                className="experience-link"
                href="https://www.linkedin.com/company/hahn-softwareentwicklung/"
                target="_blank"
                rel="noreferrer"
              >
                Hahn Software
              </a>
              , a software company from Germany specialized in customized
              solutions for its customers, implementing new features and fixing
              bugs in web applications using the vue.js framework and
              JavaScript, HTML and CSS languages.
            </p>
              </div>
            </div>
          </div>
        </div>
        <div className="why-buzzvel">
          <h3 className="why-buzzvel-title">Why Buzzvel</h3>
          <div className="buzzvel-text">
            <p>I&apos;m excited about the opportunity at Buzzvel because it aligns with my passion for developing innovative digital solutions that make an impact. The company&apos;s focus on creativity, user-centric design, and cutting-edge technology resonates with my own professional values.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;