import React, { useState, useEffect } from 'react';
import './GlobalAdPopup.css';

const GlobalAdPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentAdIndex, setCurrentAdIndex] = useState(0);

    const ads = [
        {
            id: 1,
            title: "Admissions Open 2026",
            desc: "Secure your future with top-ranked programs. Limited seats available for early applicants.",
            cta: "Apply Now",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "Upto 100% Scholarship",
            desc: "Merit-based scholarships available for top rankers. Don't miss this opportunity!",
            cta: "Check Eligibility",
            image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "Free Career Counseling",
            desc: "Confused about your path? Talk to our expert counselors for free guidance.",
            cta: "Book Session",
            image: "https://images.unsplash.com/photo-1521791136064-7985c2d18854?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 4,
            title: "Top Colleges in Your City",
            desc: "Find the best colleges near you with placement guarantees.",
            cta: "Explore Colleges",
            image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop"
        }
    ];

    useEffect(() => {
        // Initial popup timer
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 5000); // Wait 5 seconds initially

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);

        // Logic to show the NEXT ad after a delay (e.g., 15 seconds)
        // This mimics the "after wrong click... show other add" behavior
        setTimeout(() => {
            setCurrentAdIndex((prevIndex) => (prevIndex + 1) % ads.length);
            setIsVisible(true);
        }, 60000); // Re-appear after 1 minute (60 seconds)
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    if (!isVisible) return null;

    const currentAd = ads[currentAdIndex];

    return (
        <div className="global-ad-overlay" onClick={handleOverlayClick}>
            <div className="global-ad-content">
                <button className="ad-close-btn" onClick={handleClose}>&times;</button>
                <div className="ad-popup-image-container">
                    <img
                        src={currentAd.image}
                        alt={currentAd.title}
                        className="ad-popup-image"
                    />
                </div>
                <div className="ad-popup-details">
                    <h3 className="ad-popup-title">{currentAd.title}</h3>
                    <p className="ad-popup-desc">{currentAd.desc}</p>
                    <button className="ad-btn-primary" onClick={handleClose}>{currentAd.cta}</button>
                </div>
            </div>
        </div>
    );
};

export default GlobalAdPopup;
