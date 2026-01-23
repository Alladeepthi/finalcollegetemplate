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
            <div className="home-layout">
                <main className="home-content">
                    <Features />
                    <WelcomeSection />
                    <CollegeJourney />
                    <FeaturedExams />
                    <CareerCompass />
                    <CourseCategories />
                    <CollegeFinder />
                    <OnlineDegrees />
                </main>

                {showAd && (
                    <aside className="home-ad-sidebar">
                        <div className="ad-card">
                            <button className="ad-close-btn" onClick={() => setShowAd(false)} aria-label="Close Ad">
                                &times;
                            </button>
                            <img
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop"
                                alt="Admission Open"
                                className="ad-image"
                            />
                            <h4 className="ad-title">Admissions Open 2026</h4>
                            <p className="ad-desc">Join the top-ranked universities. Scholarships available for early applicants.</p>
                            <a href="/colleges" className="ad-cta">Apply Now</a>
                        </div>

                        <div className="ad-card">
                            <button className="ad-close-btn" onClick={() => setShowAd(false)} aria-label="Close Ad">
                                &times;
                            </button>
                            <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                                <span style={{ fontSize: '2rem' }}>🎓</span>
                            </div>
                            <h4 className="ad-title">Free Career Counselling</h4>
                            <p className="ad-desc">Confused about your career path? Talk to our experts today.</p>
                            <a href="/careers" className="ad-cta" style={{ background: '#10b981' }}>Book Session</a>
                        </div>
                    </aside>
                )}
            </div>
        </>
    );
};

export default Home;
