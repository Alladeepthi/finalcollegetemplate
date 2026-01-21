import React from 'react';
import Stats from './Stats';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container hero-container">
                <div className="hero-text-content">
                    <p className="hero-overline">TOP NOTCH COURSES FROM TRAINED PROFESSIONALS</p>
                    <h1 className="hero-title">Search your Favorite Course here</h1>
                </div>

                <div className="hero-search-bar">
                    <div className="search-input-group">
                        <input type="text" placeholder="Keywords" />
                    </div>
                    <div className="search-input-group">
                        <select>
                            <option value="" disabled selected>Categories</option>
                            <option value="engineering">Engineering</option>
                            <option value="medical">Medical</option>
                            <option value="management">Management</option>
                        </select>
                    </div>
                    <div className="search-input-group">
                        <select>
                            <option value="" disabled selected>Instructor</option>
                            <option value="john">John Doe</option>
                            <option value="jane">Jane Smith</option>
                        </select>
                    </div>
                    <div className="search-button-group">
                        <button className="btn-search">Search Courses</button>
                    </div>
                </div>

                {/* Stats Component Overlapping Bottom */}
                <div className="hero-stats-wrapper">
                    <Stats />
                </div>
            </div>

            {/* Background Gradient Elements if needed */}
            <div className="hero-bg-overlay"></div>
        </section>
    );
};

export default Hero;
