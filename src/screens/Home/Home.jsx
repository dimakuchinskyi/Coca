import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';
import logo from '../../assets/img/home/Logo.png';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Home() {
  const navigate = useNavigate();
  const testimonials = [
    {
      quoteLines: [
        '“With Agency the results are very satisfying,',
        'wrapped with Hight quality and innovative design,',
        'that makes a surge of visitors on my website”'
      ],
      rating: '5.0',
      authorName: 'Renee Wells',
      authorRole: 'Product Designer, Quotient',
      avatar: require('../../assets/img/home/Ellipse 15.png')
    },
    {
      quoteLines: [
        '“We saw a 3x increase in signups after using the platform,',
        'support was fast and the onboarding was smooth,',
        'highly recommended for small teams”'
      ],
      rating: '5.0',
      authorName: 'Marcus Lee',
      authorRole: 'Head of Growth, Nova',
      avatar: require('../../assets/img/home/Ellipse 15.png')
    }
  ];
  const [tIndex, setTIndex] = useState(0);
  const prevTestimonial = () => setTIndex((tIndex - 1 + testimonials.length) % testimonials.length);
  const nextTestimonial = () => setTIndex((tIndex + 1) % testimonials.length);

  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleTryForFree = (e) => {
    e.preventDefault();
    if (email) {
      navigate(`/contact?email=${encodeURIComponent(email)}#contact-top`);
    } else {
      navigate(`/contact#contact-top`);
    }
  };
  return (
    <div className="home-page">
      <style>{`
        .home-page .hero-section .hero-form input.email-input {
          color: #222222 !important;
          border-bottom: 2px solid #808D9E !important;
          background: transparent !important;
        }
        .home-page .hero-section .hero-form input.email-input::placeholder {
          color: #808D9E !important;
          opacity: 1 !important;
        }
        .home-page .hero-section .hero-form input.email-input::-webkit-input-placeholder { color: #808D9E !important; }
        .home-page .hero-section .hero-form input.email-input::-moz-placeholder { color: #808D9E !important; opacity:1 !important; }
        .home-page .hero-section .hero-form input.email-input:-ms-input-placeholder { color: #808D9E !important; }
      `}</style>
      <Header />

      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-left">
              <div className="hero-ellipse-bg">
              </div>
              <div className="hero-content-on-bg">
                <h1 className="hero-title"><span className="nowrap">Digitally forward</span><br/>creative</h1>
                <div className="hero-lead">
                  <span className="hero-divider" aria-hidden="true"></span>
                  <p className="hero-description">
                    When it comes to interactive<br/>
                    <span className="no-break-line">marketing, we've got you covered.</span><br/>
                    Be where the world is going
                  </p>
                </div>
                <div className="hero-form">
                  <input type="email" placeholder="Enter your email" className="email-input" value={email} onChange={handleEmailChange} />
                  <button className="cta-button" onClick={handleTryForFree}>Try for free</button>
                </div>
              </div>
            </div>

            <div className="hero-right">
              <div className="dashboard-card dashboard-wrapper">
                <img src={require('../../assets/img/home/Sales - Light.png')} alt="Sales dashboard" className="dashboard-img" loading="lazy" />

                <div className="growth-card" aria-hidden>
                  <img src={require('../../assets/img/home/Customer Growth - Light.png')} alt="Customer Growth" className="growth-img" loading="lazy" />
                </div>
                  
                  <div className="dashboard-stats" aria-hidden>
                    <div className="stat-small-card">
                      <div className="stat-block">
                        <div className="stat-label">Sales</div>
                        <div className="stat-value">$31,092</div>
                        <div className="stat-growth green">4.2% <span className="stat-meta">from last year</span></div>
                      </div>
                      <div className="stat-block">
                        <div className="stat-label">Marketing</div>
                        <div className="stat-value">$29,128</div>
                        <div className="stat-growth red">1.2% <span className="stat-meta">from last year</span></div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="features-section">
        <div className="container">
          <div className="features-content">
            <div className="features-header">
              <h2 className="features-title">
                <span className="nowrap">Coca help our client solve</span><br/>
                <span className="nowrap">complex customer problems</span><br/>
                with date that does more.
              </h2>
              <p className="features-description">Our platform offers the modern enterprise full control of how date can be access and used with industry leading software solutions for identity, activation, and date collaboration.</p>
            </div>

            <div className="features-grid">
              <div className="feature-card">
                <img src={require('../../assets/img/home/Icon.png')} alt="icon" className="feature-icon" />
                <h3 className="feature-title">Build your date fundamental</h3>
                <p className="feature-description">Build access to date, develop valuable business insights and drive revenue while maintaining full control over access and use of date at all times.</p>
              </div>

              <div className="feature-card">
                <img src={require('../../assets/img/home/Icon(1).png')} alt="icon" className="feature-icon" />
                <h3 className="feature-title">Measure more effective</h3>
                <p className="feature-description">Effectively measure people-based campaigns with the freedom to choose from best-of-breed partners to optimize and drive media innovation.</p>
              </div>

              <div className="feature-card">
                <img src={require('../../assets/img/home/Icon(2).png')} alt="icon" className="feature-icon" />
                <h3 className="feature-title">Activate your date</h3>
                <p className="feature-description">Accurately address your specific audiences at scale across any channel, platform, publisher or network and safely translate date between identity space to improve results.</p>
              </div>

              <div className="feature-card">
                <img src={require('../../assets/img/home/Icon(3).png')} alt="icon" className="feature-icon" />
                <h3 className="feature-title">Strengthen consumer privacy</h3>
                <p className="feature-description">Protect your customer date with leading privacy-preserving technologies and advanced techniques to minimize date movement while still enabling insight generation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="two-column-section">
        <div className="container two-column">
          <div className="two-column-image-wrapper">
            <img src={require('../../assets/img/home/Image(2).png')} alt="office" className="two-column-image" />
            <div className="bar-chart-overlay" aria-hidden>
              <img src={require('../../assets/img/home/Bar Chart.png')} alt="Bar Chart" className="bar-chart-img" />
            </div>
          </div>
          <div className="two-column-content">
            <h3 className="two-column-title">Passion to increase<br/>company revenue{"\u00A0"}up<br/>to 85%</h3>
            <p className="two-column-desc">Automate your sales, marketing and<br/>service in one platform. Avoid date leaks<br/>and enable consistent messaging.</p>
            <ul className="two-column-list">
              <li>
                <img src={require('../../assets/img/home/Icon(4).png')} alt="" className="check-icon" aria-hidden="true" />
                <span>Close more deals with single-page<br/>contact management</span>
              </li>
              <li>
                <img src={require('../../assets/img/home/Icon(4).png')} alt="" className="check-icon" aria-hidden="true" />
                <span>Enjoy one-click calling, call scripts and<br/>voicemail automation</span>
              </li>
              <li>
                <img src={require('../../assets/img/home/Icon(4).png')} alt="" className="check-icon" aria-hidden="true" />
                <span>Take stages and milestones of your<br/>deals to keep the sales process on track</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      
      <section className="stats-section">
        <div className="container stats-row">
          <div className="stat-item">
            <div className="stat-value">17k</div>
            <div className="stat-label">happy customers on worldwide</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">15+</div>
            <div className="stat-label">Hours of work experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">50+</div>
            <div className="stat-label">Creativity & passionate members</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">100+</div>
            <div className="stat-label">Integrations lorem ipsum integrations</div>
          </div>
        </div>
      </section>

      
      <section className="lift-section">
        <div className="container">
          <div className="lift-image">
            <img src={require('../../assets/img/home/Image(3).png')} alt="team" className="lift-photo" />
          </div>

          <div className="lift-content">
            <div className="lift-left">
              <h2 className="lift-title">Lift your business to new<br/>heights with our digital<br/>marketing services</h2>
            </div>
            <div className="lift-right">
              <p className="lift-desc">To build software that gives customer facing teams in small and medium-sized businesses the ability to create rewarding and long-lasting relationships with customers</p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="partners-section">
        <div className="container partners-inner">
          <div className="partners-left">
            <div className="partners-count">890+</div>
            <div className="partners-label">some big companies that we work with, and trust us very much</div>
          </div>
          <div className="partners-logos">
              <a href="https://www.airbnb.com" className="partner-link" target="_blank" rel="noopener noreferrer" aria-label="Airbnb">
                <img src={require('../../assets/img/home/Airbnb Logo.png')} alt="airbnb" className="partner-logo" loading="lazy" />
              </a>
              <a href="https://www.amazon.com" className="partner-link" target="_blank" rel="noopener noreferrer" aria-label="Amazon">
                <img src={require('../../assets/img/home/Amazon Logo.png')} alt="amazon" className="partner-logo" loading="lazy" />
              </a>
              <a href="https://www.fedex.com" className="partner-link" target="_blank" rel="noopener noreferrer" aria-label="FedEx">
                <img src={require('../../assets/img/home/FedEx Logo.png')} alt="fedex" className="partner-logo" loading="lazy" />
              </a>
              <a href="https://www.microsoft.com" className="partner-link" target="_blank" rel="noopener noreferrer" aria-label="Microsoft">
                <img src={require('../../assets/img/home/Microsoft Logo.png')} alt="microsoft" className="partner-logo" loading="lazy" />
              </a>
              <a href="https://www.google.com" className="partner-link" target="_blank" rel="noopener noreferrer" aria-label="Google">
                <img src={require('../../assets/img/home/Google Logo.png')} alt="google" className="partner-logo" loading="lazy" />
              </a>
              <a href="https://www.olacabs.com" className="partner-link" target="_blank" rel="noopener noreferrer" aria-label="OLA">
                <img src={require('../../assets/img/home/Group.png')} alt="ola" className="partner-logo ola-logo" loading="lazy" />
              </a>
              <a href="https://www.walmart.com" className="partner-link" target="_blank" rel="noopener noreferrer" aria-label="Walmart">
                <img src={require('../../assets/img/home/Walmart Logo.png')} alt="walmart" className="partner-logo" loading="lazy" />
              </a>
              <a href="https://www.oyorooms.com" className="partner-link" target="_blank" rel="noopener noreferrer" aria-label="OYO">
                <img src={require('../../assets/img/home/OYO Logo.png')} alt="oyo" className="partner-logo" loading="lazy" />
              </a>
          </div>
        </div>
      </section>

      
      <div className="thin-sep" aria-hidden />

      
      <section className="advertise-section">
        <div className="container">
          <div className="advertise-inner">
            <h3 className="advertise-title">Advertise, analyze, and<br/>optimize! We do it all for<br/>you</h3>
            <p className="advertise-sub">Build more meaningful and lasting relationships - <br/>better understand their needs, identify new <br/>opportunities to help address any problems faster</p>

            <div className="advertise-grid">
              <div className="adv-card">
                <div className="adv-img">
                  <img src={require('../../assets/img/home/Frame 1171275175.png')} alt="feature" className="adv-img-img" loading="lazy" />
                </div>
                <div className="adv-content">
                  <h4>Lead happiness for customers</h4>
                  <p>Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster</p>
                </div>
              </div>
              <div className="adv-card rev">
                <div className="adv-img">
                  <img src={require('../../assets/img/home/Frame 1171275176.png')} alt="feature" className="adv-img-img" loading="lazy" />
                </div>
                <div className="adv-content">
                  <h4>Mutually support each other</h4>
                  <p>Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster</p>
                </div>
              </div>
              <div className="adv-card">
                <div className="adv-img">
                  <img src={require('../../assets/img/home/Frame 1171275178.png')} alt="feature" className="adv-img-img" loading="lazy" />
                </div>
                <div className="adv-content">
                  <h4>Have fun growing together</h4>
                  <p>Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster</p>
                </div>
              </div>
              <div className="adv-card rev">
                <div className="adv-img">
                  <img src={require('../../assets/img/home/Frame 1171275177.png')} alt="feature" className="adv-img-img" loading="lazy" />
                </div>
                <div className="adv-content">
                  <h4>Make Your Business Grow</h4>
                  <p>Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="news-section">
        <div className="container">
          <h3 className="news-title">Trending news from Coca</h3>
          <p className="news-sub">we have some new Service to pamper you</p>
          <div className="news-grid">
            <div className="news-card">
              <img src={require('../../assets/img/home/Rectangle 5650.png')} alt="news" className="news-img" loading="lazy" />
              <div className="news-meta"><span className="news-date">Published in Insight Jan 30, 2021</span><span className="news-author">by : Albert Sans</span></div>
              <h4>What makes an authentic employee profile, and why does it matter ?</h4>
            </div>

            <div className="news-carousel-toggle" aria-hidden>
              <img src={require('../../assets/img/home/Group 3260.png')} alt="carousel control" className="news-carousel-toggle-img" />
            </div>

            <div className="news-card">
              <img src={require('../../assets/img/home/Rectangle 5651.png')} alt="news" className="news-img" loading="lazy" />
              <div className="news-meta"><span className="news-date">Published in Insight Jan 30, 2021</span><span className="news-author">by : Albert Sans</span></div>
              <h4>How to build a Kaylen relationship with a good company</h4>
            </div>
          </div>
        </div>
      </section>

      
      <section className="testimonials-section">
        <div className="container testimonials-inner">
            <div className="test-left">
            <h3 className="test-title"><span className="nowrap">What our customer</span><br/>are saying</h3>
            <span className="quote-mark-img" aria-hidden="true" />
            <div className="test-side-text">We are trusted numerous companies from different business to meet their needs</div>
          </div>
          <div className="test-right">
            <div className="test-stars">
              <img src={require('../../assets/img/home/Rating.png')} alt="rating" className="test-rating-img" />
            </div>
            <p className="test-quote">
              {testimonials[tIndex].quoteLines.map((line, i) => (
                <span key={i}>{line}</span>
              ))}
            </p>
            <div className="test-author">
              <img src={testimonials[tIndex].avatar} alt={testimonials[tIndex].authorName} className="author-img" />
              <div className="author-meta">
                <div className="author-name">{testimonials[tIndex].authorName}</div>
                <div className="author-role">{testimonials[tIndex].authorRole}</div>
              </div>
            </div>
              <div className="test-controls">
                <button className="test-prev" aria-label="previous" onClick={prevTestimonial}>
                  <img src={require('../../assets/img/home/Frame 1171275052.png')} alt="previous" />
                </button>
                <button className="test-next" aria-label="next" onClick={nextTestimonial}>
                  <img src={require('../../assets/img/home/Frame 1171275053.png')} alt="next" />
                </button>
              </div>
          </div>
        </div>
      </section>

      
      <section className="cta-bottom cta-extended">
        <div className="container cta-inner">
          <div className="cta-left">
            <h3 className="cta-title">Think beyond the wave</h3>
              <div className="cta-lead">
              <span className="cta-divider" aria-hidden="true"></span>
              <p className="cta-sub">
                Ask about Sans products, pricing<br/>
                implementation, or anything else. <span className="nowrap">Our highly</span> trained reps are standing by, ready to help
              </p>
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
