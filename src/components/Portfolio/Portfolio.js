import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Portfolio.css';

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
      <h2>Portfolio</h2>
      <div className="portfolio-slider">
        <Slider {...settings}>
          <div className="portfolio-item">
            <img src="/path/to/project1.jpg" alt="Project 1" />
            <h3>Project 1</h3>
            <p>A brief description of Project 1, highlighting key features and technologies used.</p>
          </div>
          <div className="portfolio-item">
            <img src="/path/to/project2.jpg" alt="Project 2" />
            <h3>Project 2</h3>
            <p>A brief description of Project 2, highlighting key features and technologies used.</p>
          </div>
          {/* Add more portfolio items as needed */}
        </Slider>
      </div>
    </section>
  );
}

export default Portfolio;
