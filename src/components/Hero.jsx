import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-video-wrapper">
                <video autoPlay loop muted playsInline className="hero-video">
                    {/* Using a Pexels video of students in a classroom/library setting */}
                    <source src="https://videos.pexels.com/video-files/3209211/3209211-hd_1920_1080_25fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="hero-overlay"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-text-content">
                    <p className="hero-overline">TOP NOTCH COURSES FROM TRAINED PROFESSIONALS</p>
                    <h1 className="hero-title">Search your Favorite Course here</h1>
                </div>

                {/* Search Bar Removed */}
            </div>
        </section>
    );
};

export default Hero;
