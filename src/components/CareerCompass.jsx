import React, { useState } from 'react';
import './CareerCompass.css';
import ContactModal from './ContactModal';

const CareerCompass = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="career-compass-section">
            <div className="compass-banner">
                <div className="container compass-container">
                    <div className="compass-content">
                        <h2 className="compass-title">Expert Counselling</h2>
                        <p className="compass-text">
                            Confused about your career path? Get 1-on-1 mentorship from top experts to choose the right college and course.
                        </p>
                    </div>
                    <div className="compass-action">
                        <button className="btn-career" onClick={() => setIsModalOpen(true)}>Book Free Session</button>
                    </div>
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
