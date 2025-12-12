import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './Blog.css';

// Reusing images
import img1 from '../../assets/img/home/Rectangle 5650.png';
import img2 from '../../assets/img/home/Rectangle 5651.png';
import img3 from '../../assets/img/home/Image(2).png';
import img4 from '../../assets/img/home/Image(3).png';
import img5 from '../../assets/img/home/Frame 1171275175.png';
import img6 from '../../assets/img/home/Frame 1171275176.png';

// New Blog Images
import blogRecent1 from '../../assets/img/blog/Rectangle 34.png';
import blogRecent2 from '../../assets/img/blog/Image(5).png';
import blogRecent3 from '../../assets/img/blog/Image(6).png';
import sliderIcon from '../../assets/img/blog/Group 3258(1).png';
import blogRect35 from '../../assets/img/blog/Rectangle 35.png';
import blogRect37 from '../../assets/img/blog/Rectangle 37(1).png';
import blogRect36 from '../../assets/img/blog/Rectangle 36.png';
import blogImage8 from '../../assets/img/blog/Image(8).png';
import blogImage9 from '../../assets/img/blog/Image(9).png';
import blogImage10 from '../../assets/img/blog/Image(10).png';
import navPrev from '../../assets/img/home/Frame 1171275052.png';
import navNext from '../../assets/img/home/Frame 1171275053.png';

export default function Blog() {
    const [activeTab, setActiveTab] = useState('View all');
    const articlesGridRef = useRef(null);
    const tabs = ['View all', 'Design', 'Articles', 'Product', 'Software Development', 'Customer Success'];

    const recentPosts = [
        {
            id: 1,
            image: require('../../assets/img/blog/Rectangle 34.png'),
            title: 'Practice making User Flow',
            date: 'Published in Insight Jan 30, 2021',
            excerpt: "In this article, we'll cover how to create user flows",
            author: 'Albert Sans'
        },
        {
            id: 2,
            image: blogRecent2,
            title: 'Overview of the Design Principles',
            date: 'Published in Insight Jan 30, 2021',
            excerpt: "What are Design Principles?... To understand design principles, we first discuss the principles.",
            author: 'Albert Sans'
        },
        {
            id: 3,
            image: blogRecent3,
            title: 'Using Grid in web design',
            date: 'Published in Insight Jan 30, 2021',
            excerpt: "Andi: \"What's the grid like?\" \"Like below...\"",
            author: 'Albert Sans'
        }
    ];

    const articles = [
        {
            id: 1,
            image: blogImage8,
            title: 'List of UX Designer Portfolio / Case Studies where you can make money',
            desc: 'Here are some portfolios / Case Studies from UX Designers that you can use as a reference for creating a portfolio. Two interesting things from their portfolio are:'
        },
        {
            id: 2,
            image: blogImage9,
            title: 'Skyrocketing in The Designing Career, Why Not?',
            desc: 'Ever thought of jumping into the world of design as a career? If not, you may want to look at what the word "design" actually means. Design is a method of designing aesthetic actions that are carried out.'
        },
        {
            id: 3,
            image: blogImage10,
            title: 'Elements that may be missed when designing the UI',
            desc: 'This is an article that talks about the little elements that are often overlooked when designing UI.'
        }
    ];

    const scrollArticles = (direction) => {
        if (articlesGridRef.current) {
            const scrollAmount = 400; // Width of one card plus gap
            if (direction === 'next') {
                articlesGridRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            } else {
                articlesGridRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="blog-page">
            <div className="hero-gradient-bg"></div>
            <Header />

            {/* Hero Section */}
            <section className="blog-hero">
                <div className="blog-container">
                    <h1 className="blog-title">Activity & Updates</h1>
                    <div className="blog-hero-sub-wrapper">
                        <div className="hero-line"></div>
                        <p className="blog-subtitle">
                            Our biggest challenge is making sure we're always designing and building products that will help you run your business better.
                        </p>
                    </div>

                    <div className="blog-tabs">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                className={`blog-tab ${activeTab === tab ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recent Posts Section */}
            <section className="blog-recent">
                <div className="blog-container relative-container">
                    <div className="recent-grid">
                        {recentPosts.map((post, index) => (
                            <React.Fragment key={post.id}>
                                <div className="recent-card">
                                    <div className="recent-img-wrapper">
                                        <img src={post.image} alt={post.title} className="recent-img" />
                                    </div>
                                    <div className="recent-content">
                                        <div className="recent-meta">
                                            <span className="meta-date">{post.date}</span>
                                            {index === 1 && <span className="meta-author">by : {post.author}</span>}
                                        </div>
                                        <h3 className="recent-title">{post.title}</h3>
                                        <p className="recent-excerpt">{post.excerpt}</p>
                                    </div>
                                </div>
                                {index === 0 && (
                                    <div className="recent-scroll-indicator">
                                        <img src={sliderIcon} alt="Scroll" />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dark Featured Section */}
            <section className="blog-featured">
                <div className="blog-container">
                    <div className="featured-grid-layout">
                        {/* Left Column */}
                        <div className="featured-col-left">
                            <div className="featured-item large-item">
                                <div className="featured-img-wrapper vertical-img">
                                    <img src={blogRecent1} alt="Main feature" />
                                </div>
                                <h2 className="featured-title-large">
                                    <Link to="/detail-blog" className="featured-link">How we perform long-running tasks using AWS services</Link>
                                </h2>
                                <p className="featured-desc">Webflow is web design tool as well as a hosting platform and CMS all in one. While you are probably familiar with all of these, they are usually entirely separate tools.</p>
                            </div>
                            <div className="featured-item">
                                <div className="featured-img-wrapper landscape-img">
                                    <img src={blogRect37} alt="Row feature" />
                                </div>
                                <h3 className="featured-title-small">
                                    <Link to="/detail-blog" className="featured-link">Layout Exploration — Simple exercise but big effect</Link>
                                </h3>
                                <p className="featured-desc-small">Make alternatives or other options for the design we are making. For example, we are creating a website design. Then there is the testimonial section.</p>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="featured-col-right">
                            <div className="featured-item">
                                <div className="featured-img-wrapper landscape-img">
                                    <img src={blogRect35} alt="Side feature" />
                                </div>
                                <h3 className="featured-title-small">
                                    <Link to="/detail-blog" className="featured-link">How to ask when doing User Research</Link>
                                </h3>
                                <p className="featured-desc-small">Bro, the story is that you want to make an application for buying and selling goods on the market. During user research, what do you think you will ask people?</p>
                            </div>
                            <div className="featured-item shift-webflow">
                                <div className="featured-img-wrapper landscape-img">
                                    <img src={blogRect36} alt="Row feature" />
                                </div>
                                <h3 className="featured-title-small">
                                    <Link to="/detail-blog" className="featured-link">Webflow Break the Coding Barrier</Link>
                                </h3>
                                <p className="featured-desc-small">Webflow is web design tool as well as a hosting platform and CMS all in one. While you are probably familiar with all of these, they are usually entirely separate tools.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Articles Section */}
            <section className="blog-articles">
                <div className="blog-container">
                    <div className="articles-header">
                        <h2 className="section-title">Articles</h2>
                        <div className="articles-nav">
                            <button className="nav-btn prev" aria-label="Previous" onClick={() => scrollArticles('prev')}>
                                <img src={navPrev} alt="Previous" />
                            </button>
                            <button className="nav-btn next" aria-label="Next" onClick={() => scrollArticles('next')}>
                                <img src={navNext} alt="Next" />
                            </button>
                        </div>
                    </div>
                    <p className="section-subtitle">Complex tech decoded by engineers, business trends analyzed by experts.</p>

                    <div className="articles-grid" ref={articlesGridRef}>
                        {articles.map(article => (
                            <div key={article.id} className="article-card">
                                <div className="article-img-wrapper">
                                    <img src={article.image} alt={article.title} />
                                </div>
                                <h3 className="article-title">{article.title}</h3>
                                <p className="article-desc">{article.desc}</p>
                                <button className="read-more-pill">Read More</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="blog-cta-section">
                <div className="blog-container">
                    <div className="cta-content">
                        <div className="cta-left-block">
                            <h2 className="cta-heading">Think beyond the wave</h2>
                            <div className="cta-sub-wrapper">
                                <div className="cta-line"></div>
                                <p className="cta-description">
                                    Ask about Sans products, pricing, implementation, or anything else. Our highly trained reps are standing by, ready to help
                                </p>
                            </div>
                        </div>
                        <div className="cta-action">
                            <Link to="/contact" className="cta-btn-dark">Try for free</Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
