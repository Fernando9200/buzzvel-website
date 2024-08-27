import React, { useCallback, useEffect, useState } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Typewriter from 'typewriter-effect';
import './Landing.css';

function Landing() {
  const [particlesKey, setParticlesKey] = useState(Date.now());

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setParticlesKey(Date.now());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getParticlesConfig = () => {
    const isMobile = window.innerWidth <= 768;
    return {
      fullScreen: { enable: false },
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: !isMobile,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: isMobile ? 100 : 175,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: isMobile ? 100 : 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: isMobile ? 1 : 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: isMobile ? 600 : 800,
          },
          value: isMobile ? 40 : 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: isMobile ? 3 : 5 },
        },
      },
      detectRetina: true,
    };
  };

  return (
    <div className="landing">
      <div className="landing-content">
        <h1 className="fade-in">I'm Fernando Carretto</h1>
        <div className="typewriter">
          <Typewriter
            options={{
              strings: ['Software Developer', 'Creative Problem Solver', 'Technology Enthusiast'],
              autoStart: true,
              loop: true,
              cursor: "|",
            }}
          />
        </div>
      </div>
      <Particles
        key={particlesKey}
        id="tsparticles"
        init={particlesInit}
        options={getParticlesConfig()}
      />
    </div>
  );
}

export default Landing;