import React from "react";
import Logo from "../Landing Page Assets/WhatsApp Image 2025-05-12 at 22.23.31_6253646a.jpg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Not a texter?</span>
          <span>No problem!</span>
          
          
          
        </div>
        <div className="footer-section-columns">
          <span>CALL US: +918075562609 </span>
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