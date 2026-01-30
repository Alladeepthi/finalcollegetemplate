import React from 'react';
import './WelcomeSection.css';

const WelcomeSection = () => {
    return (
        <section className="welcome-section">
            <div className="container welcome-container">
                <div className="welcome-content">
                    <h2 className="welcome-title">Why Students Choose EduMon</h2>
                    <div className="title-underline"></div>

                    <p className="welcome-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <p className="welcome-text">
                        Consectetur id Aenean sit amet massa eu velit commodo cursus fringilla a
                        tellus. Morbi eros urna, mollis porta feugiat non, ornare eu augue. Sed rhoncus
                        est sit amet diam tempus.
                    </p>

                    <div className="welcome-features">
                        <div className="welcome-feature-item">
                            <div className="feature-icon-box">
                                <span className="feature-icon">🛠️</span>
                            </div>
                            <div className="feature-info">
                                <h4>Good Planning</h4>
                                <p>Renenan sit amet massa</p>
                            </div>
                        </div>

                        <div className="welcome-feature-item">
                            <div className="feature-icon-box">
                                <span className="feature-icon">📖</span>
                            </div>
                            <div className="feature-info">
                                <h4>Our Courses</h4>
                                <p>Renenan sit amet massa</p>
                            </div>
                        </div>

                        <div className="welcome-feature-item">
                            <div className="feature-icon-box">
                                <span className="feature-icon">❤️</span>
                            </div>
                            <div className="feature-info">
                                <h4>Happy Students</h4>
                                <p>Renenan sit amet massa</p>
                            </div>
                        </div>

                        <div className="welcome-feature-item">
                            <div className="feature-icon-box">
                                <span className="feature-icon">👥</span>
                            </div>
                            <div className="feature-info">
                                <h4>Our Teachers</h4>
                                <p>Renenan sit amet massa</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="welcome-image">
                    <img
                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop"
                        alt="Students Studying"
                    />
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection;
