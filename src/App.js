import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Timeline from './components/Timeline/Timeline';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="landing"><Landing /></section>
      <section id="about"><About /></section>
      <section id="portfolio"><Portfolio /></section>
      <section id="timeline"><Timeline /></section>
    </div>
  );
}

export default App;