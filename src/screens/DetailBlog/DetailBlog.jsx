import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './DetailBlog.css';

import heroImage from '../../assets/img/blog/Rectangle 34.png';
import woman from '../../assets/img/detailBlog/Rectangle 45(1).png';
import authorAvatar from '../../assets/img/detailBlog/Rectangle 45(1).png';
import shareFacebook from '../../assets/img/detailBlog/Social Icons(3).png';
import shareTwitter from '../../assets/img/detailBlog/Social Icons(4).png';
import shareLinkedin from '../../assets/img/detailBlog/Social Icons(5).png';
import shareInstagram from '../../assets/img/detailBlog/Social Icons(6).png';

export default function DetailBlog() {
	return (
		<div className="detail-blog-page">
			<Header />
			<main className="detail-blog-main">
				<div className="detail-blog-container">
					<h1 className="detail-blog-title">How we perform long-running tasks using AWS services</h1>

					<div className="detail-meta">
					<div className="meta-author">
						<img src={authorAvatar} alt="Renee Wells" className="author-avatar" />
						<div className="author-text">
							<div className="author-name">Renee Wells</div>
							<div className="author-role">Product Designer, Quotient</div>
						</div>
					</div>
						<div className="meta-right">
							<span className="meta-read">10 min read</span>
							<span className="meta-date">November 10, 2023</span>
						</div>
					</div>

					<div className="detail-hero">
						<img src={heroImage} alt="Desk workspace" />
					</div>

					<article className="detail-body">
						<p>
							Depending on the input, this can result in using a lot of processing power and time. The whole process would take approximately
							  5 seconds to return a result to the client. Keep in mind we're talking about 1 item, a contact from a contact book. After a while,
							a new requirement is added. Solution must support companies that manage their contacts organized in files. We agreed to develop a
							web application that would support upload of dataset files, like .csv. The new web application should support third party
							  integrations. Some of them are the ESP/CRM services, like Mailchimp. User does not need to see the result immediately. System can
							  later notify the user about the result, when the process finishes. This third party is the key that we need to leverage on when
							  developing our solution. So here's how we did it.
						</p>

						<h2 className="detail-section-title">Initial approach</h2>
						<p>
							Our initial approach went like this: The web application would read a .csv file line-by-line and submit an array of entries to the
							backend REST API. Processing is in real time, immediately after the user makes a request for the process to start, he expects a
							result. Another approach is to apply vertical scaling to AWS architecture. Meaning we used larger, more expensive instances that
							have more RAM and processing power. This system worked well for smaller datasets, maybe up to 5k entries, but for larger datasets
							multiple problems arose. This solution is prone to failure due to long request time. Also, because of some 3rd party services that
							  aren't optimized for large scale loads or they don't have batch endpoints. 3rd party services also tend to protect their
							architecture from making a huge bill on their end. The whole process was done in real-time. The request can take a lot of time
							hanging in there while the backend would do all the work and return the result to the client. The request was limited to 300
							  seconds (at time of writing the article) before AWS would cancel it... Also I need to mention that the user has to wait a few
							  minutes to see the results. They can't use the app during the process, which makes for a bad user experience.
						</p>
					</article>

					<div className="detail-author-card">
						<div className="author-card-left">
							<img src={woman} alt="Renee Wells" className="author-avatar-large" />
						</div>
						<div className="author-card-right">
							<div className="detail-share">
								<div className="share-icons">
									<a href="https://www.facebook.com/sharer/sharer.php" target="_blank" rel="noopener noreferrer" className="share-icon-link">
										<img src={shareFacebook} alt="Share on Facebook" />
									</a>
									<a href="https://twitter.com/intent/tweet" target="_blank" rel="noopener noreferrer" className="share-icon-link">
										<img src={shareTwitter} alt="Share on Twitter" />
									</a>
									<a href="https://www.linkedin.com/sharing/share-offsite/" target="_blank" rel="noopener noreferrer" className="share-icon-link">
										<img src={shareLinkedin} alt="Share on LinkedIn" />
									</a>
									<a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="share-icon-link">
										<img src={shareInstagram} alt="Share on Instagram" />
									</a>
								</div>
								<span className="share-label">Share this article</span>
							</div>
							<div className="author-written">Written by</div>
							<div className="author-name">Renee Wells</div>
							<div className="author-role">Product Designer, Quotient</div>
						</div>
					</div>

					<div className="author-description">
						Skilled in React Native, iOS and backend, Toni has a demonstrated knowledge of the information technology and services industry,
						with plenty of hands-on experience to back it up.
					</div>
				</div>
			</main>

			<div className="dark-footer-section">
				<section className="site-cta">
					<div className="container cta-inner">
						<div className="cta-left">
							<h2 className="cta-title">Think beyond the wave</h2>
							<p className="cta-desc">Ask about Sans products, pricing, implementation, or anything else. Our highly trained reps are standing by, ready to help</p>
						</div>

						<div className="cta-right">
							<Link to="/contact#contact-top" className="cta-button">Try for free</Link>
						</div>
					</div>
				</section>

				<Footer variant="about" />
			</div>
		</div>
	);
}
