import React, { useState } from "react";
import Logo from "../Landing Page Assets/Orange Black Modern Building Logo Design (1).svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import {
    Box,
    Drawer,
    ListItem,
    ListItemButton,
    ListItemlcon,
    ListItemText,
    } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { WhatsApp } from "@mui/icons-material";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
      { text: "Home", icon: <HomeIcon />, href: "#home" },
      { text: "About", icon: <InfoIcon />, href: "#about" },
      { text: "Testimonials", icon: <CommentRoundedIcon />, href: "#testimonials" },
      { text: "Contact", icon: <PhoneRoundedIcon />, href: "#contact" },
      { text: "Cart", icon: <ShoppingCartRoundedIcon />, href: "#contact" }, // or wherever cart leads
    ];
    

  return (
    <nav>
        
    <div className="nav-logo-container">
      <img src={Logo} alt="" />
    </div>
    <div className="navbar-links-container">
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#testimonials">Testimonials</a>
  <a href="#contact">Contact</a>
  <a href="#contact">
    <BsCart2 className="navbar-cart-icon" />
  </a>
  <button className="primary-button">
  <a 
  href="#contact"
  style={{ 
    color: "black", 
    textDecoration: "none" 
  }}
  onMouseOver={(e) => e.currentTarget.style.textDecoration = "underline"}
  onMouseOut={(e) => e.currentTarget.style.textDecoration = "none"}
>
      Book Now 
    </a>
  </button>
</div>

    <div className="navbar-menu-container">
      <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
    </div>
    <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <a href={item.href} style={{ textDecoration: 'none', color: 'inherit' }}>
  <ListItemButton>
    <ListItemIcon>{item.icon}</ListItemIcon>
    <ListItemText primary={item.text} />
  </ListItemButton>
</a>

              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
    
  );
};

export default Navbar