import React from "react";
import AboutBackground from "../Landing Page Assets/about-background.png";
import AboutBackgroundImage from "../Landing Page Assets/workimage.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () =>
{
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
          I’m the Caretaker – So You Don’t Have to Be.
        </h1>

        <p className="primary-text">
          Dust bunnies? Mystery stains? Bathroom horrors? Don’t worry — We will tackle the mess so your Kerala home looks like a postcard when you arrive.
        </p>
        
        <p className="primary-text">
          Trustworthy, efficient, and allergic to dirt.  
          You relax while we handle the chaos.
        </p>

        <div className="about-buttons-container">
          <button className="secondary-button"  
          onClick={() => 
            {
                const contactSection = document.getElementById("work");
                if (contactSection) 
                  {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                  }
            }}>Learn More
            </button>


         {/* <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>*/}
        </div>
      </div>
    </div>
  );
};

export default About;