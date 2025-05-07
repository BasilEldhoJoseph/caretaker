import React from 'react'
import Navbar from './Navbar'
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
          "I Am the Caretaker" – Your Home's Best Friend 

          </h1>
          <p className="primary-text">
          Are you planning to enjoy your vacation at your home in Kerala?
But… is your house not ready? Dusty floors? Unclean bathrooms? Don’t worry.

          </p>
          <button className="secondary-button">
            Book Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>

    </div>
  );
};

export default Home