import React, { useState } from 'react';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <Header />

      <main>
        <section className="hero-section">
          <div className="container hero-content">
            <div className="hero-left">
              <h1 className="hero-title">Everything you need to get the attention of your audience</h1>
              
              <div className="hero-paragraph">
                <img src={require('../../assets/img/about/Line.png')} alt="line" className="linked-line" />
                <p className="hero-description">Our digital agency helps clients<br />develop, implement and maintain<br />successful digital marketing strategies<br />across all channels. Also work with you<br />to build your website and create<br />online businesses that grow.</p>
              </div>
            </div>

            <div className="hero-right">
              <a href="/contact">
                <img src={require('../../assets/img/about/LinkedPath.png')} alt="showcase" className="dashboard-img linked-path" />
              </a>
            </div>
          </div>
        </section>

      </main>

        <section className="cards-section">
          <div className="container cards-inner">
            
            <CardsCarousel />
          </div>
        </section>

        <hr className="about-cta-mobile-divider" />
        <section className="two-column-section about-cta">
          <div className="container two-column about-two-column">
            <div className="two-column-left">
              <h2 className="two-column-title">Powerful ideas &<br/>sales acceleration</h2>
            </div>

            <div className="two-column-right">
              <p className="two-column-desc">We are a software development firm<br/>specializing in digital products. We build<br/>beautiful, functional and cross-platform<br/>solutions that are accessible to all.</p>
            </div>
          </div>
        </section>

        
        <hr className="about-team-mobile-divider" />
        <section className="team-section">
          <div className="container team-inner">
            <div className="team-left">
              <h2 className="team-title">Meet our team of creators,<br/>designers, and world-class<br/>problem solvers</h2>
              <p className="team-desc">To become the company that customers want, it takes a group of passionate people. Get to know the people who lead</p>
              <p className="team-desc-mobile" style={{display: 'none'}}>To become the company that customers want,<br/>it takes a group of passionate people.<br/>Get to know the people who lead</p>
            </div>

            <div className="team-right">
            </div>
          </div>
        </section>
        
          
          <section className="team-members">
            <div className="container team-members-inner">
              <div className="team-grid">
                <div className="team-card">
                  <div className="photo">
                    <img src={require('../../assets/img/about/Rectangle 4.png')} alt="Arlyne Stefano" />
                  </div>
                  <div className="card-body">
                    <div className="card-header">
                      <h4 className="card-name">Arlyne Stefano</h4>
                      <div className="social-icons">
                          <a className="social-link" href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <img src={require('../../assets/img/about/Social Icons.png')} alt="twitter" />
                          </a>
                          <a className="social-link" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <img src={require('../../assets/img/about/Social Icons(1).png')} alt="linkedin" />
                          </a>
                          <a className="social-link" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <img src={require('../../assets/img/about/Social Icons(2).png')} alt="instagram" />
                          </a>
                      </div>
                    </div>
                    <p className="card-role">Founder & CEO</p>
                  </div>
                </div>

                
                <img src={require('../../assets/img/about/Group 3258.png')} alt="decorative group" className="team-separator" />

                <div className="team-card">
                  <div className="photo">
                    <img src={require('../../assets/img/about/Rectangle 5.png')} alt="Katy Cristy" />
                  </div>
                  <div className="card-body">
                    <div className="card-header">
                      <h4 className="card-name">Katy Cristy</h4>
                      <div className="social-icons">
                          <a className="social-link" href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <img src={require('../../assets/img/about/Social Icons.png')} alt="twitter" />
                          </a>
                          <a className="social-link" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <img src={require('../../assets/img/about/Social Icons(1).png')} alt="linkedin" />
                          </a>
                          <a className="social-link" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <img src={require('../../assets/img/about/Social Icons(2).png')} alt="instagram" />
                          </a>
                      </div>
                    </div>
                    <p className="card-role">Chief Technology Officer</p>
                  </div>
                </div>

                <div className="team-card team-card--roger">
                  <div className="photo">
                    <img src={require('../../assets/img/about/Rectangle 6.png')} alt="Roger Dzawin" />
                  </div>
                  <div className="card-body">
                    <div className="card-header">
                      <h4 className="card-name">Roger Dzawin</h4>
                      <div className="social-icons">
                          <a className="social-link" href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <img src={require('../../assets/img/about/Social Icons.png')} alt="twitter" />
                          </a>
                          <a className="social-link" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <img src={require('../../assets/img/about/Social Icons(1).png')} alt="linkedin" />
                          </a>
                          <a className="social-link" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <img src={require('../../assets/img/about/Social Icons(2).png')} alt="instagram" />
                          </a>
                      </div>
                    </div>
                    <p className="card-role">Chief Technology Officer</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="two-column-section join-section">
            <div className="container two-column about-two-column">
              <div className="two-column-left">
                <h2 className="two-column-title">Join our team, The one<br/>with the master touch</h2>
              </div>

              <div className="two-column-right">
                <p className="two-column-desc">We believe it takes great people to make a great product. That's why we hire not only the perfect professional fits, but people who embody our company values.</p>
                <a className="footer-bottom-link" href="/careers">See Open Position →</a>
              </div>
            </div>
          </section>

      
      <section className="site-cta">
        <div className="container cta-inner">
          <div className="cta-left">
            <h2 className="cta-title">Think beyond the wave</h2>
            <div className="cta-desc-wrapper">
              <div className="cta-desc-line"></div>
              <p className="cta-desc">Ask about Sans products, pricing, implementation, or anything else. Our highly trained reps are standing by, ready to help</p>
            </div>
          </div>

          <div className="cta-right">
            <Link to="/contact#contact-top" className="cta-button">Try for free</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}



function CardsCarousel() {
  const imgLeft = require('../../assets/img/about/Rectangle 13.png');
  const imgMiddle = require('../../assets/img/about/Rectangle 37.png');
  const imgRight = require('../../assets/img/about/Rectangle 38.png');
  const imgControls = require('../../assets/img/about/Group 3258.png');

  const [cards] = useState([
    { src: imgLeft, alt: 'left' },
    { src: imgMiddle, alt: 'middle' },
    { src: imgRight, alt: 'right' },
  ]);

  // const rotateNext = () => {
  //   setCards(prev => [prev[2], prev[0], prev[1]]);
  // };

  // const rotatePrev = () => {
  //   setCards(prev => [prev[1], prev[2], prev[0]]);
  // };

  return (
    <>
      <div className="cards-grid">
        <div className="card card-image-only card-left">
          <div className="card-media"><img src={cards[0].src} alt={cards[0].alt} /></div>
        </div>

        <div className="card card-with-text card-center">
          <div className="card-media"><img src={cards[1].src} alt={cards[1].alt} /></div>
          <div className="card-body">
            <h4>What we believe in</h4>
            <p>Over the years at Sans, we've put a lot of thought into what it is that makes us who we are. The qualities that unite us, that make us such an effective team, and...</p>
            <button className="card-cta">See Details →</button>
          </div>
        </div>

        <div className="card card-image-only card-right">
          <div className="card-media"><img src={cards[2].src} alt={cards[2].alt} /></div>
        </div>
      </div>


        <img src={imgControls} alt="controls" className="cards-overlay" />
    </>
  );
}
