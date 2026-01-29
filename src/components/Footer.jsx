import React from 'react';
import './Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-top-row">
                    {/* Logo Section */}
                    <div className="footer-logo-area">
                        {/* Using text/icon placeholder for Neuraltrix logo */}
                        <div className="neural-logo">
                            <span className="logo-icon-flame">🔥</span>
                            <div className="logo-text-group">
                                <span className="logo-main">NEURALTRIX AI</span>
                                <span className="logo-sub">TURNING VISION INTO INTELLIGENT SOLUTIONS</span>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Links - Center */}
                    <div className="footer-nav">
                        <a href="#">About Us</a>
                        <a href="#">News</a>
                        <a href="#">Contact</a>
                        <a href="#">Support Center</a>
                        <a href="#">Documentation</a>
                        <a href="#">Community</a>
                        <a href="#">Careers</a>
                    </div>

                    {/* Social Icons - Right */}
                    <div className="footer-socials">
                        <a href="#" className="social-circle"><i className="fab fa-facebook-f">f</i></a>
                        <a href="#" className="social-circle"><i className="fab fa-twitter">t</i></a>
                        <a href="#" className="social-circle"><i className="fab fa-instagram">i</i></a>
                        <a href="#" className="social-circle"><i className="fab fa-linkedin-in">in</i></a>
                        <a href="#" className="social-circle"><i className="fab fa-github">gh</i></a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom-row">
                    <p>Copyright 2026. All Rights Reserved.</p>
                </div>
            </div>

            {/* Back to Top Button */}
            <button className="back-to-top" onClick={scrollToTop}>
                <span>↑</span>
            </button>
        </footer>
    );
};

export default Footer;
