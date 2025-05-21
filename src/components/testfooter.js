import React from "react";
import OwnerPic from "../Landing Page Assets/WhatsApp Image 2025-05-12 at 22.23.31_6253646a.jpg"; // Replace with actual owner picture path
import { BsTelephoneFill, BsEnvelopeFill } from "react-icons/bs";
import { FaMapMarkerAlt, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-wrapper" style={styles.footerWrapper}>
      {/* Main content: Owner pic + Contact info side by side */}
      <div style={styles.mainContent}>
        {/* Owner Picture Section */}
        <div
          className="footer-owner-pic"
          style={styles.ownerPicSection}
          onMouseEnter={(e) => e.currentTarget.classList.add("hovered")}
          onMouseLeave={(e) => e.currentTarget.classList.remove("hovered")}
        >
          <img
            src={OwnerPic}
            alt="Company Owner"
            style={styles.ownerImage}
            className="owner-image"
          />
          <p style={styles.ownerName}>Shine Mathew</p>
        </div>

        {/* Contact Info Section */}
        <div className="footer-contact-info" style={styles.contactInfo}>
          <h3 style={styles.contactTitle}>Contact Us</h3>
          {[
            {
              icon: <BsTelephoneFill style={styles.icon} />,
              text: "+91 7902506465",
            },
            {
              icon: <BsEnvelopeFill style={styles.icon} />,
              text: "shine.mathew@example.com",
            },
            {
              icon: <FaMapMarkerAlt style={styles.icon} />,
              text: (
                <address style={{ margin: 0 }}>
                  Puttumanoor, Puthencruz,
                  <br />
                  Ernakulam, Kerala
                </address>
              ),
            },
          ].map(({ icon, text }, idx) => (
            <div key={idx} style={styles.contactItem} className="contact-item">
              {icon}
              <span>{text}</span>
            </div>
          ))}

          {/* Social Media Icons */}
          <div style={styles.socialIcons}>
            {[
              { Icon: FaFacebookF, link: "https://facebook.com/shine" },
              { Icon: FaInstagram, link: "https://instagram.com/shine" },
            ].map(({ Icon, link }, idx) => (
              <a
                key={idx}
                href={link}
                target="_blank"
                rel="noreferrer"
                style={styles.socialLink}
                className="social-icon"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Developer credit inside footer, full width below main content */}
      <div style={styles.developerBar}>
        👨‍💻 Crafted with code & creativity by{" "}
        <a
          href="https://basileldhojoseph.github.io/Basil-EJ-Portfolio/#"
          style={styles.developerLink}
          target="_blank"
          rel="noreferrer"
        >
          Basil Studios
        </a>
        . Ready to launch your digital journey? Let’s connect!
        {/* Call and Mail icons */}
        <a
          href="tel:+917902506465"
          style={styles.inlineIconLink}
          title="Call us"
        >
          <BsTelephoneFill />
        </a>
        <a
          href="mailto:basil.eldho1414@gmail.com"
          style={styles.inlineIconLink}
          title="Email us"
        >
          <BsEnvelopeFill />
        </a>
      </div>

      <style>
        {`
          .owner-image {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .footer-owner-pic:hover .owner-image {
            transform: scale(1.05);
            box-shadow: 0 0 15px rgba(255, 204, 0, 0.7);
          }

          .contact-item {
            cursor: default;
            transition: color 0.3s ease;
            display: flex;
            align-items: center;
          }
          .contact-item:hover {
            color: #ffcc00;
          }

          .social-icon {
            color: #fff;
            font-size: 1.5rem;
            transition: color 0.3s ease, transform 0.3s ease;
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .social-icon:hover {
            color: #ffcc00;
            transform: scale(1.2);
          }
        `}
      </style>
    </footer>
  );
};

const styles = {
  footerWrapper: {
    display: "flex",
    flexDirection: "column",
    padding: "2rem",
    backgroundColor: "#222",
    color: "#fff",
    width: "100vw",
    position: "relative",
    left: "50%",
    right: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw",
    boxSizing: "border-box",
    marginBottom: 0,
  },
  mainContent: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  ownerPicSection: {
    flex: "1",
    minWidth: "200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "1rem",
  },
  ownerImage: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "0.5rem",
    border: "3px solid #fff",
  },
  ownerName: {
    fontSize: "1.2rem",
    fontWeight: "600",
  },
  contactInfo: {
    flex: "2",
    minWidth: "250px",
  },
  contactTitle: {
    marginBottom: "1rem",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    margin: "0.5rem 0",
    fontSize: "1rem",
  },
  icon: {
    marginRight: "0.75rem",
    color: "#ffcc00",
    fontSize: "1.2rem",
    flexShrink: 0,
  },
  socialIcons: {
    marginTop: "1rem",
    display: "flex",
    gap: "1rem",
  },
  socialLink: {
    color: "#fff",
  },
  developerBar: {
    marginTop: "2rem",
    paddingTop: "1rem",
    borderTop: "1px solid #444",
    textAlign: "center",
    fontSize: "0.9rem",
    color: "#aaa",
  },
  developerLink: {
    color: "#ffcc00",
    textDecoration: "none",
    fontWeight: "600",
  },
  inlineIconLink: {
    color: "#ffcc00",
    marginLeft: "0.75rem",
    fontSize: "1.1rem",
    textDecoration: "none",
    verticalAlign: "middle",
    transition: "transform 0.3s ease",
  },
};

export default Footer;
