import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container footer-container">

                {/* Column 1: About Us */}
                <div className="footer-column about-column">
                    <h3 className="footer-heading">About Us</h3>

                    <div className="brand-logo">
                        <h2>EduMon<span className="dot">.</span></h2>
                    </div>

                    <p className="footer-desc">
                        We offer the most complete online learning platform in the country, from engineering to medical and arts.
                    </p>

                    <div className="social-icons">
                        <a href="#" className="social-icon">f</a> {/* Using text generic icons or placeholders if font-awesome isn't loaded, sticking to simple CSS shapes or svg */}
                        {/* Using simple SVG placeholders for better look */}
                        <a href="#" className="social-icon">
                            <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V1.799C17.258 1.764 16.245 1.75 14.997 1.75c-2.662 0-4.043 1.63-4.043 4.295v2.455H9.5v4h1.454V22h4.043v-8.5z" /></svg>
                        </a>
                        <a href="#" className="social-icon">
                            <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05a4.28 4.28 0 0 0-4.09 3.06c0 .34.04.66.11.98C11.53 9.22 8.28 7.42 6.13 4.79c-.37.64-.58 1.39-.58 2.19 0 1.48.74 2.8 1.91 3.63-.71-.02-1.37-.2-1.99-.57v.05c0 2.07 1.47 3.8 3.44 4.21-.36.1-.74.15-1.13.15-.27 0-.54-.02-.8-.08.54 1.69 2.12 2.93 4 2.96L10.79 19c-1.54 1.15-3.48 1.83-5.58 1.83-.36 0-.72-.02-1.07-.06 2 1.25 4.38 1.98 6.94 1.98 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.39-.01-.59.87-.63 1.63-1.42 2.23-2.33z" /></svg>
                        </a>
                        <a href="#" className="social-icon">
                            <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 7h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-2v-6h2v1.1c.36-.67 1.25-1.1 1.86-1.1 1.48 0 2.14 1 2.14 2.65V18z" /></svg>
                        </a>
                        <a href="#" className="social-icon">
                            <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16"><path d="M4 4h16v16H4V4z" /></svg>
                        </a>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div className="footer-column links-column">
                    <h3 className="footer-heading">Quick Links</h3>
                    <div className="links-grid">
                        <ul className="footer-links">
                            <li><a href="#">› Home</a></li>
                            <li><a href="#">› Services</a></li>
                            <li><a href="#">› Company History</a></li>
                            <li><a href="#">› Blog</a></li>
                            <li><a href="#">› Privacy Policy</a></li>
                        </ul>
                        <ul className="footer-links">
                            <li><a href="#">› Company</a></li>
                            <li><a href="#">› Our Team</a></li>
                            <li><a href="#">› Certifications</a></li>
                            <li><a href="#">› Shop</a></li>
                            <li><a href="#">› Contact Us</a></li>
                        </ul>
                    </div>
                </div>

                {/* Column 3: Keep in Touch */}
                <div className="footer-column contact-column">
                    <h3 className="footer-heading">Keep in Touch</h3>
                    <ul className="contact-list">
                        <li>
                            <span className="contact-icon">📍</span>
                            <span>VFSTR, N block, Guntur, Andhra Pradesh, India</span>
                        </li>
                        <li>
                            <span className="contact-icon">📞</span>
                            <span>+91 8142438759</span>
                        </li>
                        <li>
                            <span className="contact-icon">✉️</span>
                            <span>info@neuraltrixai.com</span>
                        </li>
                    </ul>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
