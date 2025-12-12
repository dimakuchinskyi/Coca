import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './Contact.css';

const mapImg = require('../../assets/img/contactUs/Location.png');
const mapImgMobile = require('../../assets/img/contactUs/Map(1).png');

// Ініціалізуємо Supabase (замініть на ваші дані)
const SUPABASE_URL = 'https://yyayoewguahxjqpdryjl.supabase.co';
const SUPABASE_KEY = 'sb_publishable_UsmySmOwrsxRvRHjhOeILw_XU2m7iEl';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default function Contact() {
  const location = useLocation();
  const formRef = React.useRef(null);
  // Зчитування email з query-параметра (окремий useEffect)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const emailFromQuery = params.get('email');
    if (emailFromQuery) {
      setFormData(prev => ({ ...prev, email: emailFromQuery }));
    }
  }, [location.search]);
  // Скрол до форми, якщо є #contact-top у url
  useEffect(() => {
    if (location.hash === '#contact-top' && formRef.current) {
      setTimeout(() => {
        formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Можна також сфокусувати email input:
        const emailInput = formRef.current.querySelector('input[name="email"]');
        if (emailInput) emailInput.focus();
      }, 200);
    }
  }, [location]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Перевіримо обов'язкові поля
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      alert('Будь ласка, заповніть всі обов\'язкові поля!');
      return;
    }
    
    console.log('Відправляємо форму в Supabase:', formData);
    
    try {
      // Зберігаємо в Supabase
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            phone: formData.phone || null,
            message: formData.message
          }
        ])
        .select();
      
      if (error) {
        console.error('Supabase помилка:', error);
        throw error;
      }
      
      console.log('Успішно збережено в Supabase:', data);
      
      setSubmitted(true);
      setShowToast(true);
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      setTimeout(() => {
        setSubmitted(false);
        setShowToast(false);
      }, 3000);
      
    } catch (error) {
      console.error(' Помилка:', error.message);
      alert(' Помилка: ' + error.message);
    }
  };

  useEffect(() => {
    // When navigated to /contact#contact-top (or any link to Contact), ensure we scroll to the top of the contact page.
    const scrollToTopAnchor = () => {
      try {
        const el = document.getElementById('contact-top');
        if (el) {
          // small delay to allow layout to settle
          window.requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }));
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } catch (e) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    if (location.hash === '#contact-top') {
      // prefer scrolling to the element matching the hash
      setTimeout(scrollToTopAnchor, 20);
    } else {
      // default: ensure top of page when opening contact
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'auto' }), 10);
    }
  }, [location]);

  return (
    <div className="contact-page" id="contact-top">
      <Header />

      <main>
        <section className="contact-hero">
          <div className="container contact-grid">
            <div className="contact-left">
              <h1 className="contact-title">Contact our team to<br/>find out more</h1>
            </div>

            <div className="contact-map-wrap">
              {typeof window !== 'undefined' && window.innerWidth <= 640 ? (
                <img src={mapImgMobile} alt="world map" className="contact-map" />
              ) : (
                <img src={mapImg} alt="world map" className="contact-map" />
              )}
            </div>

            {/* Partners section copied from Home */}

            <aside className="contact-sidebar">
              <div className="contact-block">
                <h4 className="contact-block-title">Support</h4>
                <p className="contact-block-sub">Our friendly team is<br/>here to help.</p>
                <a className="contact-block-link" href="mailto:support@sans.com">support@sans.com</a>
              </div>

              <div className="contact-block">
                <h4 className="contact-block-title">Sales</h4>
                <p className="contact-block-sub">Questions or queries?<br/>Get in touch!</p>
                <a className="contact-block-link" href="mailto:sales@sans.com">sales@sans.com</a>
              </div>

              <div className="contact-block">
                <h4 className="contact-block-title">Phone</h4>
                <p className="contact-block-sub">Mon-Fri from 8am to<br/>5pm.</p>
                <a className="contact-block-link" href="tel:+14353457655">+1 (435) 345-7655</a>
              </div>
            </aside>
          </div>
        </section>
        <div className="partners-section contact-partners">
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
                      <img src={require('../../assets/img/home/Google Logo.png')} alt="google" className="partner-logo google-logo" loading="lazy" />
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
            </div>
            {/* Contact form section (from provided screenshot) */}
            <section className="contact-form-section">
              <div className="container contact-form-inner">
                <div className="contact-form-left">
                  <div className="contact-card">
                    <h2 className="contact-card-title">Let’s level up your brand</h2>
                    <p className="contact-card-sub">You can reach us anytime <a className="contact-email" href="mailto:hellosansbrothers@gmail.com">hellosansbrothers@gmail.com</a></p>

                    <form className="contact-card-form" onSubmit={handleSubmit} ref={formRef}>
                      {submitted && <div style={{color: '#4CAF50', marginBottom: '16px', fontSize: '14px'}}>✓ Спасибо! Ваше сообщение отправлено!</div>}
                      
                      <div className="cf-row cf-names">
                        <label>
                          <div className="cf-label">First name</div>
                          <input 
                            className="cf-input" 
                            type="text" 
                            name="firstName"
                            placeholder="First name" 
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                          />
                        </label>
                        <label>
                          <div className="cf-label">Last name</div>
                          <input 
                            className="cf-input" 
                            type="text" 
                            name="lastName"
                            placeholder="Last name" 
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                          />
                        </label>
                      </div>

                      <label className="cf-single">
                        <div className="cf-label">Email</div>
                        <input 
                          className="cf-input" 
                          type="email" 
                          name="email"
                          placeholder="you@company.com" 
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </label>

                      <label className="cf-single">
                        <div className="cf-label">Phone number</div>
                        <input 
                          className="cf-input" 
                          type="tel" 
                          name="phone"
                          placeholder="+1 (555) 000-0000" 
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </label>

                      <label className="cf-single">
                        <div className="cf-label">Message</div>
                        <textarea 
                          className="cf-textarea" 
                          name="message"
                          placeholder="Leave us a message..."
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                        ></textarea>
                      </label>

                      <div>
                        <button type="submit" className="cf-submit">Get Started</button>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="contact-form-right">
                  <img src={require('../../assets/img/contactUs/Image(4).png')} alt="team" className="contact-form-image" />
                </div>
              </div>
            </section>

          </main>
          <section className="site-cta">
            <div className="container cta-inner">
              <div className="cta-left">
                <h2 className="cta-title">Think beyond the wave</h2>
                <div className="cta-desc-line-mobile"></div>
                <p className="cta-desc">Ask about Sans products, pricing, implementation, or anything else. Our highly trained reps are standing by, ready to help</p>
              </div>

              <div className="cta-right">
                <button className="cta-button">Try for free</button>
              </div>
            </div>
          </section>

          <Footer variant="about" />

          {/* Toast Notification */}
          {showToast && (
            <div className="toast-notification">
              <div className="toast-content">
                <svg className="toast-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#4CAF50"/>
                  <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="toast-text">
                  <div className="toast-title">Успішно відправлено!</div>
                  <div className="toast-message">Ваше повідомлення було збережено. Ми зв'яжемося з вами найближчим часом.</div>
                </div>
              </div>
            </div>
          )}
    </div>
  );
}
