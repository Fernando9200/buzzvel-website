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
            <a href="https://buzzvel.com/portfolio/traquinices" target="_blank" rel="noreferrer">
            <img src={traquinices} alt="Traquinices" />
            </a>
            <h3>Traquinices</h3>
            <p>Traquinices is a company that specializes in the distribution of premium Childcare products.</p>
          </div>
          <div className="portfolio-item">
            <a href="https://buzzvel.com/portfolio/dbs" target="_blank" rel="noreferrer">
            <img src={dbs} alt="DBS" />
            </a>
            <h3>DBS</h3>
            <p>This platform and APP allows primary users to track medical tests.</p>
          </div>
          <div className="portfolio-item">
            <a href="https://buzzvel.com/portfolio/miss-can" target="_blank" rel="noreferrer">
            <img src={misscan} alt="Miss Can" />
            </a>
            <h3>Miss Can</h3>
            <p>Canned food produced in Portugal, with Portuguese fish and artisanal.</p>
          </div>
          <div className="portfolio-item">
            <a href="https://buzzvel.com/portfolio/thinkferidas" target="_blank" rel="noreferrer">
            <img src={thinkferidas} alt="ThinkFeridas" />
            </a>
            <h3>ThinkFeridas</h3>
            <p>This is an application to help health professionals for treating complex wounds.</p>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Portfolio;
