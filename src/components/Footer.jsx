import React, { useEffect, useState } from 'react';
import './Footer.css';

export default function Footer({ variant }){
  const logoHome = require('../assets/img/home/Logo.png');
  const logoAbout = require('../assets/img/about/Logo(1).png');
  const [logo, setLogo] = useState(logoHome);
  const [isAbout, setIsAbout] = useState(false);

  useEffect(() => {
    try {
      if (variant === 'about') {
        setLogo(logoAbout);
        setIsAbout(true);
      } else if (typeof document !== 'undefined' && document.querySelector('.about-page')) {
        setLogo(logoAbout);
        setIsAbout(true);
      } else {
        setIsAbout(false);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  return (
    <footer className={"site-footer" + (variant === 'about' ? ' site-footer--about' : '')}>
      <div className="container footer-inner">
        <div className="footer-left">
          <img src={logo} alt="logo" className="footer-logo" />
          <p className="footer-desc">We built an elegant solution. <span className="break-after-our">Our</span> team created a fully integrated <span className="break-after-sales">sales</span> and marketing solution for SMBs</p>
        </div>
        <div className="footer-cols">
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#pricing" className="footer-link">Pricing</a></li>
              <li><a href="#jobs" className="footer-link">Jobs</a></li>
              <li><a href="#blog" className="footer-link">Blog</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Product</h4>
            <ul>
              <li><a href="#sales" className="footer-link">Sales Software</a></li>
              <li><a href="#marketplace" className="footer-link">Marketplace</a></li>
              <li><a href="#terms" className="footer-link">Terms &amp; Conditions</a></li>
              <li><a href="#privacy" className="footer-link">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Discover</h4>
            <ul>
              <li><a href="#crm" className="footer-link">CRM Comparison</a></li>
              <li><a href="#partners" className="footer-link">Partner Program</a></li>
              <li><a href="#whatiscrm" className="footer-link">What is CRM</a></li>
              <li><a href="#resource" className="footer-link">Resource</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Help Center</h4>
            <ul>
              <li><a href="#community" className="footer-link">Community</a></li>
              <li><a href="#knowledge" className="footer-link">Knowledge Base</a></li>
              <li><a href="#academy" className="footer-link">Academy</a></li>
              <li><a href="#support" className="footer-link">Support</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        {isAbout ? (
          <div className="container footer-bottom-inner about-footer">
            <div className="footer-divider-mobile"></div>
            <div className="footer-bottom-left">
              <div className="social-list">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="facebook" className="social-link"><img src={require('../assets/img/about/Social icon.png')} alt="facebook"/></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="twitter" className="social-link"><img src={require('../assets/img/about/Social icon(1).png')} alt="twitter"/></a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="instagram" className="social-link"><img src={require('../assets/img/about/Group(1).png')} alt="instagram"/></a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="linkedin" className="social-link"><img src={require('../assets/img/about/Social icon(2).png')} alt="linkedin"/></a>
              </div>
            </div>
            <div className="footer-bottom-center">
              <nav className="footer-bottom-links">
                <a href="#privacy" className="footer-bottom-link">Privacy Policy</a>
                <a href="#terms" className="footer-bottom-link">Terms &amp; Conditions</a>
                <a href="#support" className="footer-bottom-link">Support</a>
              </nav>
            </div>
            <div className="footer-bottom-right">© Copyright 2023, All Rights Reserved</div>
          </div>
        ) : (
          <div className="footer-bottom-inner home-footer-bottom">
            <div className="social-list home-social-list">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="facebook" className="social-link"><img src={require('../assets/img/home/Social icon(3).png')} alt="facebook"/></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="twitter" className="social-link"><img src={require('../assets/img/home/Social icon(4).png')} alt="twitter"/></a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="instagram" className="social-link"><img src={require('../assets/img/home/Social icon(5).png')} alt="instagram"/></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="linkedin" className="social-link"><img src={require('../assets/img/home/Social icon(6).png')} alt="linkedin"/></a>
            </div>
            <nav className="footer-bottom-links home-footer-links">
              <a href="#privacy" className="footer-bottom-link">Privacy Policy</a>
              <a href="#terms" className="footer-bottom-link">Terms &amp; Conditions</a>
              <a href="#support" className="footer-bottom-link">Support</a>
            </nav>
            <div className="footer-copyright">© Copyright 2023, All Rights Reserved</div>
          </div>
        )}
      </div>
    </footer>
  );
}
