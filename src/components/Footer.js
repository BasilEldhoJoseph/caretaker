import React from "react";

import Logo from "../Landing Page Assets/shine.jpg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          {/* <img src={Logo} alt="" /> */}

        </div>
        
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Not a texter?</span>
          <span>No problem!</span>
          
          
          
        </div>
        <div className="footer-section-columns">
          <span>CALL US: +917902506465 </span>
          <span>Shine mathew</span>
          <span>Puttumanoor </span>
          <span>Puthencruz </span>
          <span>Ernakulam </span>
          <span>Kerala</span>
        </div>
        <div className="footer-section-columns">
         
        </div>
      </div>
      
    </div>
    
    
    
  );
};



export default Footer;