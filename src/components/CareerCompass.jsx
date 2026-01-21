import React from 'react';
import './CareerCompass.css';

const CareerCompass = () => {
    return (
        <section className="career-compass-section">
            <div className="container compass-container">
                <div className="compass-content">
                    <h2 className="compass-title">Need expert guidance for your admission?</h2>
                    <p className="compass-text">
                        Get 1-on-1 mentorship from our expert counsellors. We help you choose the right college, course, and scholarship to build your dream career.
                    </p>
                </div>
                <div className="compass-action">
                    <button className="btn-career">Get Free Counselling</button>
                </div>
            </div>
        </section>
    );
};

export default CareerCompass;
