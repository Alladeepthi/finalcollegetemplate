import React, { useState } from 'react';
import './GlobalSideAd.css'; // Assume styles are moved here or global

const GlobalSideAd = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <aside className="global-side-ad">
            <div className="side-ad-card">
                <button
                    className="side-ad-close"
                    onClick={() => setIsVisible(false)}
                    aria-label="Close Ad"
                >
                    &times;
                </button>
                <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop"
                    alt="Admission Open"
                    className="side-ad-image"
                />
                <div className="side-ad-content">
                    <h4 className="side-ad-title">Admissions Open 2026</h4>
                    <p className="side-ad-desc">Join top-ranked universities today.</p>
                    <a href="/colleges" className="side-ad-cta">Apply Now</a>
                </div>
            </div>
        </aside>
    );
};

export default GlobalSideAd;
