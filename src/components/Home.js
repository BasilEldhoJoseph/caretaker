import React from 'react';
import Navbar from './Navbar';
import BannerBackground from "../Landing Page Assets/home-banner-background.png";
import BannerImage from "../Landing Page Assets/image-modified.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Want Your Kerala Home Vacation-Ready? We'll Handle That!
          </h1>
          <p className="primary-text">
            Dreaming of a stress-free getaway to your Kerala home? <br />Skip the cleaning worries—let us prepare your space to perfection before you arrive. <br />Book now, and leave the Dust to us.
          </p>
          <a href="#contact" style={{ textDecoration: "none" }}>
  <button className="secondary-button">
    Book Now <FiArrowRight />
  </button>
</a>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
