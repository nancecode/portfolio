import { Link } from "react-scroll";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-link-container">
        <div>
          <img src="/img/logo-black.png" alt="NM Logo" />
        </div>
        <div className="footer-items">
          <ul>
            <li>
              <Link
                activeClass="navbar-active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="text-footer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar-active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="myPortfolio"
                className="text-footer"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar-active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="aboutMe"
                className="text-footer"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar-active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="contact"
                className="text-footer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-social-icon">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/nancymouwannes"
                className="navbar-content"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin style={{ color: "black", fontSize: "2rem" }} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/nancecode"
                className="navbar-content"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub style={{ color: "black", fontSize: "2rem" }} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer-content-container">
        <div className="footer-social-icon">
          <ul>
            <li>
              <Link
                activeClass="navbar-active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="privacyPolicy"
                className="text-sm"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar-active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="termsOfService"
                className="text-sm"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar-active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="cookiesSettings"
                className="text-sm"
              >
                Cookies Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
