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
    slidesToScroll: 1
  };

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <Slider {...settings}>
        <div className="portfolio-item">
          <img src="/path/to/project1.jpg" alt="Project 1" />
          <h3>Project 1</h3>
          <p>Description of Project 1</p>
        </div>
        <div className="portfolio-item">
          <img src="/path/to/project2.jpg" alt="Project 2" />
          <h3>Project 2</h3>
          <p>Description of Project 2</p>
        </div>
        {/* Add more portfolio items as needed */}
      </Slider>
    </section>
  );
}

export default Portfolio;