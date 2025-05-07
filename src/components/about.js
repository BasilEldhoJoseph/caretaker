import React from "react";
import AboutBackground from "../Landing Page Assets/about-background.png";
import AboutBackgroundImage from "../Landing Page Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        I am here.
I am the Caretaker.

        </h1>
        <p className="primary-text">
        From deep cleaning to regular maintenance, I make sure your home is fresh, neat, and fully ready for your arrival.

        </p>
        <p className="primary-text">
        Reliable. Trustworthy. Just like family.
        Let your vacation begin with peace of mind.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;