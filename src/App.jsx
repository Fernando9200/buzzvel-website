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
        <meta name="description" content="Fernando Carretto's application for Buzzvel, showcasing experience, projects, and future goals." />
        <meta name="keywords" content="Buzzvel, Front-End Developer, Portfolio, Fernando Carretto, React, SEO" />
        <meta property="og:title" content="Fernando Carretto - Buzzvel Application" />
        <meta property="og:description" content="Explore Fernando Carretto's professional experience and future goals with Buzzvel." />
        <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
        <meta property="og:url" content="https://fernando-carretto-buzzvel.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
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