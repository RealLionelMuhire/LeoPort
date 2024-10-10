import React from "react";
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Lionel</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/lionel-muhire/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/RealLionelMuhire/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>

          <a
            href="https://x.com/lionelmuhire_sr"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-twitter"></i>
          </a>

          <a
            href="https://www.instagram.com/lionelmuhire_sr/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; {currentYear} lionelmuhire. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
