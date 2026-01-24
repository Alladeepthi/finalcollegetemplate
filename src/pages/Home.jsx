import React, { useState } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import WelcomeSection from '../components/WelcomeSection';
import CollegeJourney from '../components/CollegeJourney';
import FeaturedExams from '../components/FeaturedExams';
import CareerCompass from '../components/CareerCompass';
import CourseCategories from '../components/CourseCategories';
import CollegeFinder from '../components/CollegeFinder';
import OnlineDegrees from '../components/OnlineDegrees';
import './Home.css';

const Home = () => {
    const [showAd, setShowAd] = useState(true);

    return (
        <>
            <Hero />
            <div style={{ position: 'relative' }}>
                <Features />
                <WelcomeSection />
                <CollegeFinder />
                <CollegeJourney />
                <FeaturedExams />
                <CareerCompass />
                <CourseCategories />
                <OnlineDegrees />

                {/* Fixed Right-Side Ad Container */}
                {showAd && (
                    <aside className="home-ad-sidebar" style={{
                        position: 'fixed',
                        right: '20px',
                        top: '100px',
                        height: 'auto',
                        zIndex: 100,
                        width: '280px',
                        display: 'block'
                    }}>
                        <div className="ad-card" style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}>
                            <button className="ad-close-btn" onClick={() => setShowAd(false)} aria-label="Close Ad">
                                &times;
                            </button>
                            <img
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop"
                                alt="Admission Open"
                                className="ad-image"
                            />
                            <h4 className="ad-title">Admissions Open 2026</h4>
                            <p className="ad-desc">Join the top-ranked universities.</p>
                            <a href="/colleges" className="ad-cta">Apply Now</a>
                        </div>
                    </aside>
                )}
            </div>
        </>
    );
};

export default Home;
