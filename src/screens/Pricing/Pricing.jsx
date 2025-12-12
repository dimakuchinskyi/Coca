import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './Pricing.css';

const iconStarter = require('../../assets/img/pricing/Icon(6).png');
const iconPopular = require('../../assets/img/pricing/Icon(5).png');
const iconEnterprise = require('../../assets/img/pricing/Icon(7).png');

export default function Pricing() {
	useEffect(() => {
		const items = document.querySelectorAll('.pricing-faq .faq-item');
		const handlers = [];
		items.forEach((el) => {
			const content = el.querySelector('.faq-answer');
			if (!content) return;
			if (el.hasAttribute('open')) {
				content.style.maxHeight = content.scrollHeight + 'px';
				content.style.opacity = '1';
				content.style.transform = 'translateY(0)';
			} else {
				content.style.maxHeight = '0px';
				content.style.opacity = '0';
				content.style.transform = 'translateY(-6px)';
			}
			const onToggle = () => {
				if (el.open) {
					content.style.maxHeight = content.scrollHeight + 'px';
					content.style.opacity = '1';
					content.style.transform = 'translateY(0)';
					const clear = () => {
						content.style.maxHeight = 'none';
						content.removeEventListener('transitionend', clear);
					};
					content.addEventListener('transitionend', clear);
				} else {
					content.style.maxHeight = content.scrollHeight + 'px';
					// eslint-disable-next-line
					content.offsetHeight;
					content.style.maxHeight = '0px';
					content.style.opacity = '0';
					content.style.transform = 'translateY(-6px)';
				}
			};

			el.addEventListener('toggle', onToggle);
			handlers.push(() => el.removeEventListener('toggle', onToggle));
		});

		return () => {
			handlers.forEach((h) => h());
		};
	}, []);

	return (
		<div className="pricing-page">
			<Header />

			<main>
				<section className="pricing-hero">
					<div className="container">
						<div className="pricing-badge">Pricing plans <span aria-hidden="true">🤑</span></div>
						<h1 className="pricing-title pricing-title-desktop">Choose a plan for a more advanced business</h1>
						<h1 className="pricing-title pricing-title-mobile" style={{display: 'none'}}>Choose a plan for a<br/>more advanced<br/>business</h1>
						<div className="pricing-toggle">
							<button className="toggle-btn" aria-pressed="true" aria-label="Toggle annual pricing" disabled aria-disabled="true">
								<span className="toggle-knob" />
							</button>
							<span className="toggle-label">Annual pricing (save 20%)</span>
						</div>
					</div>
				</section>

				<section className="pricing-content">
					<div className="container">
						<div className="pricing-cards">
							<div className="pricing-card">
								<div className="card-icon"><img src={iconStarter} alt="starter icon"/></div>
								<h3 className="card-title">Starter</h3>
								<p className="card-desc">Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
								<div className="card-price"><span className="price-amount">$100</span><span className="price-suffix">/mo</span></div>
								<div className="features-title">What's included:</div>
								<ul className="card-features">
									<li>Unlimited Upload</li>
									<li>Advanced Statistic</li>
									<li>Profile Badge</li>
									<li>Access to the community</li>
									<li className="muted">History of all Liked Photos</li>
									<li className="muted">Directory Listing</li>
									<li className="muted">Customize Your Profile</li>
									<li className="muted">Display Your Workshops</li>
								</ul>
								<Link to="/contact#contact-top" className="card-cta">Choose Plan</Link>
							</div>

							<div className="pricing-card pricing-card--featured">
								<div className="card-top-badge"><span className="badge-text">Best Offers</span><span className="badge-emoji" aria-hidden="true">🔥</span></div>
								<div className="card-icon"><img src={iconPopular} alt="popular icon"/></div>
								<h3 className="card-title">Popular</h3>
								<p className="card-desc small">Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
								<div className="card-price"><span className="price-amount">$1400</span><span className="price-suffix">/mo</span></div>
								<div className="features-title">What's included:</div>
								<ul className="card-features">
									<li>Unlimited Upload</li>
									<li>Advanced Statistic</li>
									<li>Profile Badge</li>
									<li>Access to the community</li>
									<li className="muted">History of all Liked Photos</li>
									<li>Directory Listing</li>
									<li className="muted">Customize Your Profile</li>
									<li className="muted">Display Your Workshops</li>
								</ul>
								<Link to="/contact#contact-top" className="card-cta card-cta--white">Choose Plan</Link>
							</div>

							<div className="pricing-card">
								<div className="card-icon"><img src={iconEnterprise} alt="enterprise icon"/></div>
								<h3 className="card-title">Enterprise</h3>
								<p className="card-desc">Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
								<div className="card-price"><span className="price-amount">$2100</span><span className="price-suffix">/mo</span></div>
								<div className="features-title">What's included:</div>
								<ul className="card-features">
									<li>Unlimited Upload</li>
									<li>Advanced Statistic</li>
									<li>Profile Badge</li>
									<li>Access to the community</li>
									<li>History of all Liked Photos</li>
									<li>Directory Listing</li>
									<li>Customize Your Profile</li>
									<li>Display Your Workshops</li>
								</ul>
								<Link to="/contact#contact-top" className="card-cta">Choose Plan</Link>
							</div>
						</div>
					</div>
				</section>
			</main>

			<section className="pricing-faq">
				<div className="container">
					<h2 className="faq-title">Frequently asked questions</h2>
					<p className="faq-desc">Everything you need to know about the product and billing.</p>
					<div className="faq-list">
						<details className="faq-item" open>
							<summary>Is there a free trial available?</summary>
							<div className="faq-answer">Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</div>
						</details>
						<details className="faq-item">
							<summary>How Can I Add More Emails To My Account?</summary>
							<div className="faq-answer">You can add more emails from your account settings under the Team section or by inviting teammates from the dashboard.</div>
						</details>
						<details className="faq-item">
							<summary>Can I Change Plans Or Cancel My Subscription At Any Time</summary>
							<div className="faq-answer">Yes — you can upgrade, downgrade or cancel at any time from your billing settings. Changes will apply from the next billing cycle.</div>
						</details>
						<details className="faq-item">
							<summary>How Secure Is My Data With Sans CRM</summary>
							<div className="faq-answer">We use industry standard encryption and best practices to protect your data. Please see our Security page for full details.</div>
						</details>
						<details className="faq-item">
							<summary>What Is The Uptime Guarantee</summary>
							<div className="faq-answer">Our SLA guarantees 99.9% uptime. If you experience issues, contact support and we'll investigate immediately.</div>
						</details>
					</div>
				</div>
			</section>

			<section className="site-cta">
				<div className="container cta-inner">
					<div className="cta-left">
						<h2 className="cta-title">Think beyond the wave</h2>
						<div className="cta-desc-wrapper">
							<span className="cta-desc-line"></span>
							<p className="cta-desc">Ask about Sans products, pricing, implementation, or anything else. Our highly trained reps are standing by, ready to help</p>
						</div>
					</div>

					<div className="cta-right">
						<Link to="/contact#contact-top" className="cta-button">Try for free</Link>
					</div>
				</div>
			</section>

			<Footer variant="about" />
		</div>
	);
}
