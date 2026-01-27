import React, { useState } from 'react';
import './OnlineDegrees.css';
import ContactModal from './ContactModal';

const OnlineDegrees = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="online-degrees-section">
            <div className="degree-banner">
                <div className="container degree-container">

                    <div className="degree-text">
                        <p className="degree-subtitle">Unlock Your <strong>Future</strong> with</p>
                        <h2 className="degree-title">Online Degrees</h2>
                        <p className="degree-subtext">from <strong>Top Universities!</strong></p>
                    </div>

                    {/* Features Removed */}
                    <div className="degree-features" style={{ display: 'none' }}>
                    </div>

                    <div className="degree-action">
                        <button className="btn-counselling" onClick={() => setIsModalOpen(true)}>Get Career Recommendations</button>
                    </div>

                </div>

                {/* Decorative Circle for the background effect */}
                <div className="circle-decoration"></div>
                <div className="circle-decoration-2"></div>
            </div>

            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Career Recommendation"
                subtitle="Let us help you find the best online degree for your career."
            />
        </section>
    );
};

export default OnlineDegrees;
