import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [locationQuery, setLocationQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        const params = new URLSearchParams();
        if (searchQuery) params.append('search', searchQuery);
        if (locationQuery) params.append('state', locationQuery);

        navigate(`/colleges?${params.toString()}`);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

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

                    <h1 className="hero-title">Search your Favorite Course here</h1>
                </div>

                <div className="hero-search-wrapper">
                    <div className="hero-search-container">
                        <div className="input-group search-group">
                            <span className="search-icon">🔍</span>
                            <input
                                type="text"
                                className="hero-input"
                                placeholder="Search for colleges, exams, courses..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyPress={handleKeyPress}
                            />
                        </div>
                        <div className="divider-vertical"></div>
                        <div className="input-group location-group">
                            <span className="location-icon">📍</span>
                            <input
                                type="text"
                                className="hero-input"
                                placeholder="Location / State"
                                value={locationQuery}
                                onChange={(e) => setLocationQuery(e.target.value)}
                                onKeyPress={handleKeyPress}
                            />
                        </div>
                        <button className="hero-search-btn" onClick={handleSearch}>Search</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
