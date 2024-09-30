import React from "react";
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>DAPIXEL</h2>
          <p>
            REBORN STUDIO AB <br />
            Org.nr: 559264-1871 <br />
            Lunar Holding LDA <br />
            info@dapixel.io <br />
            +467-20478390
          </p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="footer-middle">
          <h3>Company</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Lunar Blog</a></li>
            <li><a href="#">Our Specialists</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy & Policy</a></li>
          </ul>
        </div>
        <div className="footer-right">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Digital Marketing</a></li>
            <li><a href="#">Free Audit</a></li>
            <li><a href="#">Google Ads</a></li>
            <li><a href="#">Cryptocurrency Marketing</a></li>
            <li><a href="#">SEO</a></li>
            <li><a href="#">SAAS Marketing</a></li>
            <li><a href="#">Website & SEO</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

