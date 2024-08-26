import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Portfolio.css';
import traquinices from '../../assets/images/traquinices.jpg';
import dbs from '../../assets/images/dbs.jpg';
import misscan from '../../assets/images/misscan.jpg';
import thinkferidas from '../../assets/images/thinkferidas.jpg';

function Portfolio() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
  };

  return (
    <section className="portfolio">
      <h2>Buzzvel Projects</h2>
      <div className="portfolio-slider">
        <Slider {...settings}>
          <div className="portfolio-item">
            <img src={traquinices} alt="Project 2" />
            <h3>Project 2</h3>
            <p>A brief description of Project 2, highlighting key features and technologies used.</p>
          </div>
          <div className="portfolio-item">
            <img src={dbs} alt="Project 2" />
            <h3>Project 2</h3>
            <p>A brief description of Project 2, highlighting key features and technologies used.</p>
          </div>
          <div className="portfolio-item">
            <img src={misscan} alt="Project 2" />
            <h3>Project 2</h3>
            <p>A brief description of Project 2, highlighting key features and technologies used.</p>
          </div>
          <div className="portfolio-item">
            <img src={thinkferidas} alt="Project 2" />
            <h3>Project 2</h3>
            <p>A brief description of Project 2, highlighting key features and technologies used.</p>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Portfolio;
