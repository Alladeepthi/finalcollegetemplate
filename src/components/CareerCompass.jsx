import React, { useState } from 'react';
import './CareerCompass.css';
import ContactModal from './ContactModal';

const CareerCompass = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                    <button className="btn-career" onClick={() => setIsModalOpen(true)}>Get Free Counselling</button>
                </div>
            </div>

            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Get Free Counselling"
                subtitle="Speak to our experts to find the right path for you."
            />
        </section>
    );
};

export default CareerCompass;
