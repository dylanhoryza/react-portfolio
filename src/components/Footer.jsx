import React from "react";
import GithubIcon from '../assets/github-mark-white.png';
import FacebookIcon from '../assets/Facebook_Logo_Secondary.png';
import LinkedInIcon from '../assets/LI-In-Bug.png';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/dylanhoryza" target="_blank" rel="noopener noreferrer">
          <img src={GithubIcon} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/dylan-horyza-9b0ab4231/" target="_blank" rel="noopener noreferrer">
          <img src={LinkedInIcon} alt="LinkedIn" />
        </a>
        <a href="https://facebook.com/dylan.horyza" target="_blank" rel="noopener noreferrer">
          <img src={FacebookIcon} alt="Facebook" />
        </a>
      </div>
      
    </div>
  );
}
export default Footer;