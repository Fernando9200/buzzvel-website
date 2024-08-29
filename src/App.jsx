import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Timeline from './components/Timeline/Timeline';
import Footer from './components/Footer/Footer';
import './App.css';
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>Fernando Carretto - Buzzvel Application</title>
        <meta name="description" content="Fernando Carretto's application for Buzzvel, showcasing experience, projects, and future goals as a front-end developer." />
        <meta name="keywords" content="Buzzvel, Front-End Developer, Fernando Carretto, Portfolio, React, SEO, GSAP, CSS3" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Fernando Carretto - Buzzvel Application" />
        <meta property="og:description" content="Showcasing Fernando Carretto's experience and future goals with Buzzvel." />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://fernando-carretto-buzzvel.vercel.app/" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fernando Carretto - Buzzvel Application" />
        <meta name="twitter:description" content="Fernando Carretto's professional journey and aspirations with Buzzvel." />
        <meta name="twitter:image" content="/assets/images/og-image.jpg" />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://fernando-carretto-buzzvel.vercel.app/" />

        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Fernando Carretto",
              "url": "https://fernando-carretto-buzzvel.vercel.app/",
              "jobTitle": "Front-End Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Buzzvel"
              },
              "sameAs": [
                "https://www.linkedin.com/in/fernando-carretto/",
                "https://github.com/Fernando9200"
              ]
            }
          `}
        </script>
      </Helmet>
      <Navbar />
      <section id="landing"><Landing /></section>
      <section id="about"><About /></section>
      <section id="portfolio"><Portfolio /></section>
      <section id="timeline"><Timeline /></section>
      <section id="footer"><Footer /></section>
    </>
  );
}

export default App;
