import React from "react";
import "./Navbar.scss";
// import logo from "../../../public/logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wraper">
        <img src="/logo.png" alt="logo" className="logo" />
        <div className="icons">
          <a
            href="https://www.instagram.com/gpkchaitanya/?next=%2F"
            target="_blank"
          >
            <InstagramIcon />
          </a>
          <a href="https://www.linkedin.com/in/bgpkchaitanya/" target="_blank">
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
